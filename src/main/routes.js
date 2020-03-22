import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../pages/Home';

export default () => (
  <Router basename="/">
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="*" component={() => <h1>Not found</h1>} />
    </Switch>
  </Router>
);
