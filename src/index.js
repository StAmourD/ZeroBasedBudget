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
      // current: ''
    }
  }

  handleClick() {
    // this.setState(current);
    alert('You clicked!');
  }

  render() {
    // logic goes here
    const HomePage = () => (
      <div>
        <h2>Home</h2>
        <Link to="/about">About</Link>
      </div>
    )

    const BudgetPage = (props) => {
      return (<Budget onClick={this.handleClick}/>);
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
          <Header className="app-row"/>

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
