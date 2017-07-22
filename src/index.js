import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './components/header';
import Budget from './budget';
import BarChart from './barchart';
import Settings from './settings';
import Import from './import';
import About from './about';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rowData: [
        {
          id: 0,
          type: 'income',
          category: 'Cat Name2',
          actual: 30,
          budgeted: 75
        }, {
          id: 1,
          type: 'income',
          category: 'More Cats',
          actual: 33,
          budgeted: 99
        }, {
          id: 2,
          type: 'income',
          category: 'Another Cat',
          actual: 100,
          budgeted: 1000
        }, {
          id: 3,
          type: 'income',
          category: 'Bad Cat',
          actual: 200,
          budgeted: 150
        }, {
          id: 10,
          type: 'expense',
          category: 'Dog',
          actual: 25,
          budgeted: 75
        }, {
          id: 11,
          type: 'expense',
          category: 'Dog Cat',
          actual: 122,
          budgeted: 200
        }, {
          id: 12,
          type: 'expense',
          category: 'More dogs',
          actual: 1110,
          budgeted: 1050
        }, {
          id: 13,
          type: 'expense',
          category: 'Good Dog',
          actual: 200,
          budgeted: 350
        }
      ],
      display: 12,
      month: 'July'
    }
  }

  handleChange = (id, field, value) => {
    let newState = this.state.rowData;

    for (let i in newState) {
      if (newState[i].id === id) {
        newState[i][field] = Number(value);
        this.setState({rowData: newState});
        break; //Stop this loop, we found it!
      }
    }
  }

  handleClick = () => {
    // this.changeActual(2, 500);
    debugger;
    alert('clicked');
  }

  render() {
    const HomePage = () => (
      <div>
        <h2>Home</h2>
        <Link to="/about">About</Link>
      </div>
    )

    const BudgetPage = () => {
      return (<Budget incomeData={this.state.rowData.filter((row) => {
        return row.type === 'income'
      })} expenseData={this.state.rowData.filter((row) => {
        return row.type === 'expense'
      })} onClick={this.handleClick} handleChange={this.handleChange} month={this.state.month}/>);
    }

    const BarChartPage = () => (<BarChart/>)

    const ImportPage = () => (<Import/>)

    const SettingsPage = () => (<Settings budgetDefaultTo={this.state.budgetDefaultTo
      ? this.state.budgetDefaultTo
      : ''}/>)

    const AboutPage = () => (<About/>)

    return (
      <Router>
        <div>
          <Header/>

          <hr/>

          <Route exact path="/" component={HomePage}/>
          <Route path="/budget" render={BudgetPage}/>
          <Route path="/barchart" render={BarChartPage}/>
          <Route path="/import" render={ImportPage}/>
          <Route path="/settings" render={SettingsPage}/>
          <Route path="/about" component={AboutPage}/>

        </div>
      </Router>
    );
  }
}

// ========================================

ReactDOM.render(
  <App/>, document.getElementById('root'));
