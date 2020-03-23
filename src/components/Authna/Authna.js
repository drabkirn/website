import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import MainHeader from '../Shared/MainHeader';
import Footer from '../Shared/Footer';

function Authna() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Authna - Plug and play user authentication system | Drabkirn</title>

        <meta name="description" content="Why re-create user's authentication in every app that you build? You can fire up an Authna server, configure your apps to use Authna, and get your users authenticated. Sweet and simple." />
    <meta name="keywords" content="drabkirn, drab, authna, user, user authentication, authentication" />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://drabkirn.cdadityang.xyz" />
        <meta property="og:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
        <meta property="og:description" content="Why re-create user's authentication in every app that you build? You can fire up an Authna server, configure your apps to use Authna, and get your users authenticated. Sweet and simple." />
        <meta property="og:title" content="Authna - Plug and play user authentication system | Drabkirn" />
        <meta property="og:site_name" content="Drabkirn Authna" />
        <meta property="og:see_also" content="https://drabkirn.cdadityang.xyz" />

        {/* G+ Meta tags */}
        <meta itemprop="name" content="Authna - Plug and play user authentication system | Drabkirn" />
        <meta itemprop="description" content="Why re-create user's authentication in every app that you build? You can fire up an Authna server, configure your apps to use Authna, and get your users authenticated. Sweet and simple." />
        <meta itemprop="image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://drabkirn.cdadityang.xyz" />
        <meta name="twitter:title" content="Authna - Plug and play user authentication system | Drabkirn" />
        <meta name="twitter:description" content="Why re-create user's authentication in every app that you build? You can fire up an Authna server, configure your apps to use Authna, and get your users authenticated. Sweet and simple." />
        <meta name="twitter:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
      </Helmet>
      
      <MainHeader hasTag={false} pageName="Authna" shortDescription="Plug and play user authentication system that we use at Drabkirn, and you can use it too." />

      <section className="container">
        <div>
          <p className="fs-1-6">Why re-create user's authentication in every app that you build? You can fire up an Authna server, configure your apps to use Authna, and get your users authenticated. Sweet and simple.</p>
        </div>

        <div className="mt-50 mb-70 align-center">
          <a href="https://github.com/drabkirn/authna" className="btn wide-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          <br />
          <Link to="/" className="btn wide-btn">Back</Link>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Authna;
