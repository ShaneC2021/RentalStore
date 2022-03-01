import React from 'react';
import {Form, Row, Button, Col} from 'react-bootstrap';



function FormField(props) {
  return (
    <Form.Group as={Col} controlId={props.name}>
              <Form.Label>{props.field}</Form.Label>
              <Form.Control
                type={props.type}
                placeholder={props.field}
                name={props.name}
                onChange={props.onChange}
                value={props.value} 
                required
              />
            </Form.Group>
  )
}

export default FormField


