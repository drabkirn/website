import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';

import 'desityle/dist/css/desityle.min.css';

function App() {
  return (
    <Switch>
      <Route path="/" component={ Home } />
    </Switch>
  );
}

export default App;
