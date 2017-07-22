import React from 'react';
import Grid from './components/grid';
import './index.css';
import {
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Table
} from 'react-bootstrap';

export default class Budget extends React.Component {
  getGrandTotals = () => {
    let budgetedIncomeTotal = 0;
    let actualIncomeTotal = 0;
    for (let i = 0, len = this.props.incomeData.length; i < len; i++) {
      budgetedIncomeTotal += this.props.incomeData[i]['budgeted'];
      actualIncomeTotal += this.props.incomeData[i]['actual'];
    }

    let budgetedExpenseTotal = 0;
    let actualExpenseTotal = 0;
    for (let i = 0, len = this.props.expenseData.length; i < len; i++) {
      budgetedExpenseTotal += this.props.expenseData[i]['budgeted'];
      actualExpenseTotal += this.props.expenseData[i]['actual'];
    }

    return [
      budgetedIncomeTotal - budgetedExpenseTotal,
      actualIncomeTotal - actualExpenseTotal
    ];
  }

  render() {
    let [budgetedGrandTotal,
      actualGrandTotal] = this.getGrandTotals();
    return (
      <div>
        <h1>Budget</h1>
        <Button onClick={this.props.onClick} bsStyle="primary">Test button</Button>

        <Table responsive>
          <tr>
            <td>
              <Button onClick={this.props.onClick} bsStyle="default">&lt;</Button>
            </td>
            <td>
              <h2>{this.props.month}</h2>
            </td>
            <td>
              <Button onClick={this.props.onClick} bsStyle="default">&gt;</Button>
            </td>
          </tr>
        </Table>
        <Grid title="Income" data={this.props.incomeData} handleChange={this.props.handleChange} expanded={false}/>
        <Grid title="Expense" data={this.props.expenseData} handleChange={this.props.handleChange}/>

        <ListGroup fill>
          <ListGroupItem>
            <Row>
              <Col xs={3}>
                Difference
              </Col>
              <Col xs={3}>
                <div >
                  <label className={actualGrandTotal < 0
                    ? "zbb-is-negative"
                    : ""}>${actualGrandTotal}</label>
                </div>
              </Col>
              <Col xs={3}>
                <div >
                  <label className={budgetedGrandTotal < 0
                    ? "zbb-is-negative"
                    : budgetedGrandTotal === 0
                      ? "zbb-is-zero"
                      : ""}>${budgetedGrandTotal}</label>
                </div>
              </Col>
              <Col xs={3}></Col>
            </Row>
          </ListGroupItem>
        </ListGroup>

      </div>
    );
  }
}
