import React from 'react';
import '../index.css';
import {Panel, ListGroup, ListGroupItem, Col, Row} from 'react-bootstrap';
import GridRow from './grid-row';

export default class Grid extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true
    };
  }

  getTotals = () => {
    let remainingTotal = 0;
    let budgetedTotal = 0;
    let actualTotal = 0;
    for (let i = 0, len = this.props.data.length; i < len; i++) {
      remainingTotal += this.props.data[i]['budgeted'] - this.props.data[i]['actual'];
      budgetedTotal += this.props.data[i]['budgeted'];
      actualTotal += this.props.data[i]['actual'];
    }

    return [remainingTotal, budgetedTotal, actualTotal];
  }

  toggleHeader = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    if (this.props.data === undefined) {
      return (
        <div>
          <p>Missing Data</p>
        </div>
      )
    }

    let title,
      displayTotal,
      budgetedTotal,
      actualTotal;

    [displayTotal, budgetedTotal, actualTotal] = this.getTotals();
    title = this.state.expanded
      ? (
        <Row>
          <Col xs={3}>
            {this.props.title}
          </Col>
          <Col xs={3}>
            Actual
          </Col>
          <Col xs={3}>
            Budgeted
          </Col>
          <Col xs={3}>
            Remaining
          </Col>
        </Row>
      )
      : (
        <Row>
          <Col xs={3}>
            {this.props.title}
          </Col>
          <Col xs={3}>
            Actual ${actualTotal}
          </Col>
          <Col xs={3}>
            Budgeted ${budgetedTotal}
          </Col>
          <Col xs={3}>
            Remaining ${displayTotal}
          </Col>
        </Row>
      );

    return (
      <div>
        <Panel collapsible expanded={this.state.expanded} header={title} onSelect={this.toggleHeader}>
          <ListGroup fill>
            {this.props.data.map(item => <GridRow key={item.id} rowID={item.id} category={item.category} actual={item.actual} budgeted={item.budgeted} handleChange={this.props.handleChange}/>)}
            <ListGroupItem>
              <Row>
                <Col xs={3}>
                  Total:
                </Col>
                <Col xs={3}>
                  ${actualTotal}
                </Col>
                <Col xs={3}>
                  ${budgetedTotal}
                </Col>
                <Col xs={3}>
                  ${displayTotal}
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </div>
    );
  }
}
