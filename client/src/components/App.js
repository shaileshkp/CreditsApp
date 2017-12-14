import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const SurvayNew = () => <h2>SurvayNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
        <div>
            <BrowserRouter>
              <div>
                  <Header/>
                  <div className="container">
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/surveys" component={Dashboard} />
                  <Route exact path="/surveys/new" component={SurvayNew} />
                  </div>
              </div>
            </BrowserRouter>
        </div>
    );
  }
};

export default connect(null, actions)(App);
