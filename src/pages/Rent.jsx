import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import VehicleCard from "../components/VehicleCard";
import Footer from "../components/Footer";
import RentStageOne from "../components/RentStageOne";
import { useLocation } from "react-router-dom";
import RentStageTwo from "../components/RentStageTwo";
import formatDate from "../scripts/utilities";

function Rent() {
  const location = useLocation();
  const item = location.state.vcard.vehicle;
  const vehicleId = item.vehicle;

  const [currentPage, setCurrentPage] = useState(0);

  const initialState = {
    firstName: "",
    lastName: "",
    pickUpDate: "",
    dropOffDate: "",
    age: "",
  };

  const [state, setState] = useState(initialState);

  function getStorageValue(key) {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved || "[]");
    return initial;
  }

  const dates = getStorageValue(vehicleId);

  function unavailablePeriod(storedDates) {
    const newPickUp = new Date(state.pickUpDate);
    const newDropOff = new Date(state.dropOffDate);

    let pickUpGood = true;
    let dropOffGood = true;

    if (state.pickUpDate === "" || state.dropOffDate === "") {
      return false;
    }

    if (storedDates.length) {
      for (const dates of storedDates) {
        const oldPickUp = dates.pickUp;
        const oldDropOff = dates.dropOff;
        const storedPickup = new Date(oldPickUp).getTime();
        const storedDropOff = new Date(oldDropOff).getTime();

        if (newPickUp >= storedPickup && newPickUp <= storedDropOff) {
          pickUpGood = false;
        }

        if (newDropOff >= storedPickup && newDropOff <= storedDropOff) {
          dropOffGood = false;
        }

        if (newPickUp <= storedPickup && newDropOff >= storedDropOff) {
          pickUpGood = false;
          dropOffGood = false;
        }

        if (!pickUpGood || !dropOffGood) {
          return true;
        }
      }
    }

    return false;
  }

  const handleStateChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeStage = (pageId) => {
    setCurrentPage(pageId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChangeStage(1);
    calculateRentalFee();
  };

  const currentDate = formatDate();

  const calculateRentalFee = () => {
    const date1 = new Date(state.pickUpDate);
    const date2 = new Date(state.dropOffDate);
    const timeSpan = date2.getTime() - date1.getTime();
    let timeSpanDays = timeSpan / (1000 * 3600 * 24);
    let rentalCost = null;

    if (timeSpan === 0) {
      rentalCost = item.cost;
      timeSpanDays = 1;
    } else rentalCost = timeSpanDays * item.cost;

    setState({
      ...state,
      rentalFee: rentalCost,
      rentalDuration: timeSpanDays,
    });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <RentStageOne
            onSubmit={handleSubmit}
            data={state}
            handleChangeStage={handleChangeStage}
            handleStateChange={handleStateChange}
            calculateRentalFee={calculateRentalFee}
            currentDate={currentDate}
            enableButton={unavailablePeriod(dates)}
          />
        );

      case 1:
        return (
          <RentStageTwo
            data={state}
            handleChangeStage={handleChangeStage}
            handleStateChange={handleStateChange}
            van={item}
            currentDate={currentDate}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="main-body body-color d-flex flex-column justify-content-center">
        <div>
          
<Row className="m-0 p-0">
<Col xs={12} sm={2} md={3} lg={3}></Col>
<Col xs={12} sm={8} md={6} lg={6} className="m-0 p-0">
  <div className="p-4 ">
    <VehicleCard obj={item} />
  </div>
</Col>
<Col xs={12} sm={2} md={3} lg={3}></Col>
</Row>

<Row className="m-0 p-0">
<Col xs={12} sm={2} md={3} lg={3}></Col>
<Col xs={12} sm={8} md={6} lg={6} className="p-4">
  <div>{renderCurrentPage()}</div>
</Col>
<Col xs={12} sm={2} md={3} lg={3}></Col>
</Row>  
          
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Rent;

