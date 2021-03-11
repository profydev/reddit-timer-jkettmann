import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

function App() {
  return (
    <Router>
      <Normalize />
      <Switch>
        <Route path="/search">Search</Route>
        <Route path="/">Home</Route>
      </Switch>
    </Router>
  );
}

export default App;
