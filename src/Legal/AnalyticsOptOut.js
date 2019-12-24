import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from '../Shared/MainHeader';

import './Legal.css';

function AnalyticsOptOut() {
  return (
    <React.Fragment>
      <MainHeader hasTag={false} pageName="Analytics Opt Out" shortDescription="At Drabkirn, we care about the privacy of your data and are committed to protecting it." />

      <section className="container">
        <iframe
          title="Drabkirn Analytics Opt Out Banner"
          className="drab-analytics-opt-out-iframe"
          src="https://analytics.cdadityang.xyz/index.php?module=CoreAdminHome&action=optOut&language=en&backgroundColor=2A2D31&fontColor=FFF&fontSize=1.2em"
        ></iframe>
      </section>

      <section className="container mt-30">
        <div className="align-center">
          <Link to={"/legal/privacy_policy"} className="btn wide-btn">Back</Link>
        </div>
      </section>
      
    </React.Fragment>
  );
}

export default AnalyticsOptOut;
