import React from 'react';
import './index.css';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Col,
  Button,
  Row
} from 'react-bootstrap';

export default class Import extends React.Component {
  render() {
    // logic goes here

    return (
      <div>
        <div className="app-row">
          <h1>Import:
          </h1>
          <FormGroup controlId="formControlsSelect">
            <Col sm={6} md={4}>
              <ControlLabel>Import from:</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="msmoney">MS Money Sunset</option>
                <option value="other">other</option>
              </FormControl>
            </Col>
            <Col sm={6} md={2} mdPush={6}>
              <Button className="pull-right" bsStyle="primary">Import</Button>
            </Col>
            <Row>
              <Col sm={8} md={6} mdPull={2}>
                <ControlLabel>Paste:</ControlLabel>
                <FormControl componentClass="textarea" rows="25" placeholder="paste here..."/>
              </Col>
            </Row>
          </FormGroup>
        </div>
      </div>
    );
  }
}
