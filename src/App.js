import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import JoinRoom from './screens/JoinRoom';
import Room from './screens/Room';
import Introduction from './screens/Introduction';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Introduction />
        </Route>
        <Route exact path="/join-room">
          <JoinRoom />
        </Route>
        <Route exact path="/room">
          <Room />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
