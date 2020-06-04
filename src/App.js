import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/Auth/LoginPage';
import SignupPage from './components/Auth/SignupPage';
import Dashboard from './components/Dashboard/Dashboard';
import ViewTask from './components/Task/ViewTask';
import history from './history';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Route exact path="/" render={() => <LandingPage history={history} />} />
          <Route exact path="/signup" render={() => <SignupPage history={history} />} />
          <Route exact path="/login" render={() => <LoginPage history={history} />} />
          <Route exact path="/dashboard" render={() => <Dashboard history={history} />} /> 
          <Route exact path="/task/:id" render={(props) => <ViewTask history={history} {...props}/>} /> 
        </Router>
      </div>
    );
  }
};

export default App;