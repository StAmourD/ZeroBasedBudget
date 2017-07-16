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
          <Panel header="Chart">
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Default spent remaining</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="relative">Relative Bar Lengths</option>
                <option value="absolute">Max Width Bars</option>
              </FormControl>
            </FormGroup>
          </Panel>
        </div>
      </div>
    );
  }
}
