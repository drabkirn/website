import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import MainHeader from '../Shared/MainHeader';

import './Legal.css';

function AnalyticsOptOut() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Analytics Opt Out - Drabkirn</title>

        <meta name="description" content="At Drabkirn, we care about the privacy of your data and are committed to protecting it. You can opt-out of our web analytics here." />
        <meta name="keywords" content="drabkirn, analytics, analytics opt out, drab, drabkirn analytics opt out" />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://drabkirn.cdadityang.xyz/legal/privacy/analytics_opt_out" />
        <meta property="og:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
        <meta property="og:description" content="At Drabkirn, we care about the privacy of your data and are committed to protecting it. You can opt-out of our web analytics here." />
        <meta property="og:title" content="Analytics Opt Out - Drabkirn" />
        <meta property="og:site_name" content="Analytics Opt Out - Drabkirn" />
        <meta property="og:see_also" content="https://drabkirn.cdadityang.xyz" />

        {/* G+ Meta tags */}
        <meta itemprop="name" content="Analytics Opt Out - Drabkirn" />
        <meta itemprop="description" content="At Drabkirn, we care about the privacy of your data and are committed to protecting it. You can opt-out of our web analytics here." />
        <meta itemprop="image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://drabkirn.cdadityang.xyz/legal/privacy/analytics_opt_out" />
        <meta name="twitter:title" content="Analytics Opt Out - Drabkirn" />
        <meta name="twitter:description" content="At Drabkirn, we care about the privacy of your data and are committed to protecting it. You can opt-out of our web analytics here." />
        <meta name="twitter:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
      </Helmet>

      <MainHeader hasTag={false} pageName="Analytics Opt Out" shortDescription="At Drabkirn, we care about the privacy of your data and are committed to protecting it. You can opt-out of our web analytics here." />

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
