import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import MainHeader from '../Shared/MainHeader';
import Footer from '../Shared/Footer';

function AnalyticsOptOut() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Opt Out of our analytics - Drabkirn</title>

        <meta name="description" content="Like we said, we care about the privacy of your data and are committed to protecting it. So we give you this option to opt-out of our web analytics. You're a free bird!" />
        <meta name="keywords" content="drabkirn, analytics, analytics opt out, drab, drabkirn analytics opt out" />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://drabkirn.cdadityang.xyz/legal/privacy/analytics_opt_out" />
        <meta property="og:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
        <meta property="og:description" content="Like we said, we care about the privacy of your data and are committed to protecting it. So we give you this option to opt-out of our web analytics. You're a free bird!" />
        <meta property="og:title" content="Analytics Opt Out - Drabkirn" />
        <meta property="og:site_name" content="Analytics Opt Out - Drabkirn" />
        <meta property="og:see_also" content="https://drabkirn.cdadityang.xyz" />

        {/* G+ Meta tags */}
        <meta itemprop="name" content="Analytics Opt Out - Drabkirn" />
        <meta itemprop="description" content="Like we said, we care about the privacy of your data and are committed to protecting it. So we give you this option to opt-out of our web analytics. You're a free bird!" />
        <meta itemprop="image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://drabkirn.cdadityang.xyz/legal/privacy/analytics_opt_out" />
        <meta name="twitter:title" content="Analytics Opt Out - Drabkirn" />
        <meta name="twitter:description" content="Like we said, we care about the privacy of your data and are committed to protecting it. So we give you this option to opt-out of our web analytics. You're a free bird!" />
        <meta name="twitter:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
      </Helmet>

      <MainHeader hasTag={false} pageName="Analytics Opt Out" shortDescription="Like we said, we care about the privacy of your data and are committed to protecting it. So we give you this option to opt-out of our web analytics. You're a free bird!" />

      <section className="container">
        <iframe
          title="Drabkirn Analytics Opt Out Banner"
          className="drab-analytics-opt-out-iframe"
          src="https://analytics.cdadityang.xyz/index.php?module=CoreAdminHome&action=optOut&language=en&backgroundColor=2A2D31&fontColor=FFF&fontSize=1.2em"
        ></iframe>
      </section>

      <section className="container mt-30 mb-100">
        <div className="align-center">
          <Link to={"/legal/privacy_policy"} className="btn wide-btn">Back</Link>
        </div>
      </section>

      <Footer />
      
    </React.Fragment>
  );
}

export default AnalyticsOptOut;
