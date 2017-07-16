import React from 'react';
import {
  ListGroupItem,
  FormGroup,
  InputGroup,
  FormControl,
  Col,
  Row
} from 'react-bootstrap';

export default class GridRow extends React.Component {

  render() {
    // logic goes here
    let remaining = this.props.budgeted - this.props.actual;
    return (
      <ListGroupItem>
        <Row>
          <Col xs={3}>
            {this.props.category}
          </Col>
          <Col xs={3}>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" defaultValue={this.props.actual} onChange={(e) => {
                  this.props.handleChange(this.props.rowID, 'actual', e.target.value);
                }}/>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs={3}>
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" defaultValue={this.props.budgeted} onChange={(e) => {
                  this.props.handleChange(this.props.rowID, 'budgeted', e.target.value);
                }}/>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs={3}>
            <div >
              <label className={remaining < 0
                ? "zbb-is-negative"
                : ""}>${remaining}</label>
            </div>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}
