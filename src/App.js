import React from 'react';
import './App.css';
import { Route, NavLink, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from "history";

import Main from './screens/Main';
import View from './screens/View';
import Add from './screens/Add';
import Notfound from './screens/NotFound';

import Header from "./components/Header";
import Footer from "./components/Footer";

const history = createBrowserHistory()

class App extends React.Component {
  render() {
  return (
    <Router history={history}>
      <div className="bodyDiv">
        {/* <Dimmer active={appstates.busy}>
            <Loader>Loading</Loader>
          </Dimmer> */}
        <Header/>
        <div className="content">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/view/:id" component={View} />
          <Route path="/add" component={Add} />
          <Route component={Notfound} />
        </Switch>
        </div>
        <Footer className="footer" />

      </div>
    </Router>
  );
}
}
export default App;
