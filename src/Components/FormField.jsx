import React from 'react';
import {Form, Col} from 'react-bootstrap';



function FormField(props) {
  
  return (
    <Form.Group as={Col} controlId={props.name}>
              <Form.Label>{props.field}</Form.Label>
              <Form.Control
                as={props.as}
                rows={props.rows}
                type={props.type}
                placeholder={props.field}
                name={props.name}
                onChange={props.onChange}
                value={props.value} 
                pattern={props.pattern}
                min={props.min}
                max={props.max}
                required
              />
              
            <Form.Text>
              {props.children}
            </Form.Text>
            </Form.Group>
  )
}

export default FormField


