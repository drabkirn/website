import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import PrivacyPolicy from './Legal/PrivacyPolicy';
import AnalyticsOptOut from './Legal/AnalyticsOptOut';
import TermsConditions from './Legal/TermsConditions';
import Credits from './Legal/Credits';

import 'desityle/dist/css/desityle.min.css';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/legal/privacy_policy" component={ PrivacyPolicy } />
      <Route exact path="/legal/privacy/analytics_opt_out" component={ AnalyticsOptOut } />
      <Route exact path="/legal/terms_conditions" component={ TermsConditions } />
      <Route exact path="/legal/credits" component={ Credits } />
      <Route path="/" component={ Home } />
    </Switch>
  );
}

export default App;
