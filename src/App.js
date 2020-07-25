import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/Auth/LoginPage';
import SignupPage from './components/Auth/SignupPage';
import Dashboard from './components/Dashboard/Dashboard';
import ViewTask from './components/Task/ViewTask';
import history from './history';
// import { getTasks } from './api';
// import TasksContext from './context/TasksContext';
import { Provider as TasksProvider } from './context/TasksContext';

class App extends React.Component {
  // state = {
  //   allTasks: [],
  // };

  // async componentDidMount() {
  // const { allTasks } = this.state;
  // if (allTasks.length === 0) {
  //   const tasks = await getTasks();
  //   this.setState({ allTasks: [...tasks] });
  // }
  // }

  render() {
    // const { allTasks } = this.state;
    // console.log(allTasks);

    return (
      <div className="App">
        <TasksProvider>
          <Router history={history}>
            <Route
              exact
              path="/"
              render={() => <LandingPage history={history} />}
            />
            <Route
              exact
              path="/signup"
              render={() => <SignupPage history={history} />}
            />
            <Route
              exact
              path="/login"
              render={() => <LoginPage history={history} />}
            />
            <Route
              exact
              path="/dashboard"
              render={() => <Dashboard history={history} />}
            />
            <Route
              exact
              path="/task/:id"
              render={(props) => <ViewTask history={history} {...props} />}
            />
          </Router>
        </TasksProvider>
      </div>
    );
  }
}

export default App;
