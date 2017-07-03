import React from 'react';
import '../index.css';
import {Panel, ListGroup, ListGroupItem, Col, Row} from 'react-bootstrap';
import GridRow from './grid-row';

export default class Income extends React.Component {
  getRemainingTotal(data) {
    let remainingTotal = 0;
    for (let i = 0, len = data.length; i < len; i++) {
      remainingTotal += data[i]['budgeted'] - data[i]['actual'];
    }

    return remainingTotal;
  }

  render() {
    const data = [
      {
        id: 0,
        category: 'Cat Name2',
        actual: 30,
        budgeted: 75
      }, {
        id: 1,
        category: 'More Cats',
        actual: 33,
        budgeted: 99
      }, {
        id: 2,
        category: 'Another Cat',
        actual: 100,
        budgeted: 1000
      }, {
        id: 3,
        category: 'Bad Cat',
        actual: 200,
        budgeted: 150
      }
    ];

    let title,
      displayTotal;
    if (this.props.type === 'income') {
      title = 'Income';
      displayTotal = this.getRemainingTotal(data);
    } else {
      title = 'Expense';
      displayTotal = 0;
    }

    return (
      <div>
        <Panel collapsible defaultExpanded header={title}>
          <ListGroup fill>
            <ListGroupItem>
              <Row>
                <Col xs="3">
                  Category
                </Col>
                <Col xs="3">
                  Actual
                </Col>
                <Col xs="3">
                  Budgeted
                </Col>
                <Col xs="3">
                  Remaining
                </Col>
              </Row>
            </ListGroupItem>
            {data.map(item => <GridRow key={item.id} category={item.category} actual={item.actual} budgeted={item.budgeted}/>)}
            <ListGroupItem>
              <Row>
                <Col xs="3"></Col>
                <Col xs="3"></Col>
                <Col xs="3"></Col>
                <Col xs="3">
                  Total: ${displayTotal}
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </div>
    );
  }
}
