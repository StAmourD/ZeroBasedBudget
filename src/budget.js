import React from 'react';
import Grid from './components/grid';
import './index.css';
import {Button} from 'react-bootstrap';

export default class Budget extends React.Component {
  render() {
    // logic goes here

    return (
      <div>
        <h1>Budget</h1>
        <Grid type="income"/>
        <Grid type="expense"/>
        <Button onClick={this.props.onClick} bsStyle="primary">Test button</Button>
      </div>
    );
  }
}
