import React from 'react';
import './index.css';
import {FormGroup, ControlLabel, FormControl, Panel} from 'react-bootstrap';

export default class Settings extends React.Component {
  render() {
    // logic goes here

    return (
      <div>
        <div className="app-row">
          <h1>Settings
          </h1>
          <Panel header="Budget">
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Default spent remaining</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="spent">Spent or Received</option>
                <option value="remaining">Remaining</option>
              </FormControl>
            </FormGroup>
          </Panel>
          <Panel header="Chart">
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Default spent remaining</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="relative">Relative bar lengths</option>
                <option value="absolute">Max width bars</option>
              </FormControl>
            </FormGroup>
          </Panel>
        </div>
      </div>
    );
  }
}
