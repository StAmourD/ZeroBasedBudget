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

    return (
      <ListGroupItem>
        <Row>
          <Col xs="3">
            {this.props.category}
          </Col>
          <Col xs="3">
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" defaultValue={this.props.actual}/>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs="3">
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" defaultValue={this.props.budgeted}/>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs="3">
            ${this.props.budgeted - this.props.actual}
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}
