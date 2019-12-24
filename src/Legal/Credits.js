import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import MainHeader from '../Shared/MainHeader';

import './Legal.css';

function Credits() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Credits - Drabkirn</title>

        <meta name="description" content="In this document, we tell you about which free(or freemium) services we use to manage Drabkirn and all of it's products." />
        <meta name="keywords" content="drabkirn, credits, credits, drab, drabkirn credits" />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://drabkirn.cdadityang.xyz/legal/credits" />
        <meta property="og:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
        <meta property="og:description" content="In this document, we tell you about which free(or freemium) services we use to manage Drabkirn and all of it's products." />
        <meta property="og:title" content="Credits - Drabkirn" />
        <meta property="og:site_name" content="Credits - Drabkirn" />
        <meta property="og:see_also" content="https://drabkirn.cdadityang.xyz" />

        {/* G+ Meta tags */}
        <meta itemprop="name" content="Credits - Drabkirn" />
        <meta itemprop="description" content="In this document, we tell you about which free(or freemium) services we use to manage Drabkirn and all of it's products." />
        <meta itemprop="image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://drabkirn.cdadityang.xyz/legal/credits" />
        <meta name="twitter:title" content="Credits - Drabkirn" />
        <meta name="twitter:description" content="In this document, we tell you about which free(or freemium) services we use to manage Drabkirn and all of it's products." />
        <meta name="twitter:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
      </Helmet>

      <MainHeader hasTag={false} pageName="Credits" shortDescription="At Drabkirn, apart from focusing on privacy, we also believe in a free and open world." />

      <section className="container">
      <div className="drab-pp-changes mb-30">
          <u className="u-orange">Updated on 20th December, 2019</u>
        </div>

        {/* Introduction */}
        <div>
          <p>At Drabkirn, We use the following free services(or products or freemium products):</p>
          <ol>
            <li><a href="https://twitter.com/drabkirn" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://instagram.com/drabkirn">Instagram</a>: To connect and share our work with people.</li>
            <li><a href="https://github.com/drabkirn" target="_blank" rel="noopener noreferrer">Github</a>: To host and manage our source code publically.</li>
            <li><a href="https://trello.com/drabkirn" target="_blank" rel="noopener noreferrer">Trello</a>: To manage and version our projects in one place.</li>
            <li><a href="https://zoho.com" target="_blank" rel="noopener noreferrer">Zoho</a>: To manage and read our emails.</li>
            <li><a href="https://www.canva.com/drabkirn" target="_blank" rel="noopener noreferrer">Canva</a>: To create posters and design for social media.</li>
            <li><a href="https://vectr.com" target="_blank" rel="noopener noreferrer">Vectr</a>: To quickly create logos online in vector format.</li>
            <li><a href="https://gtmetrix.com" target="_blank" rel="noopener noreferrer">GTMetrix</a>: To measure website speed performance and speed up the website.</li>
            <li><a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>: For downloading free photos and use them in our blog or posters in Canva.</li>
          </ol>
          <br />
          <p className="p-tag">We use the following open-source products:</p>
          <ol className="ol-tag-decimal">
            <li><a className="a-tag little-white-color-text" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost</a>: As our blogging platform, accessible at <a href="https://blog.cdadityang.xyz">https://blog.cdadityang.xyz</a>.</li>
            <li><a href="https://matomo.org/" target="_blank" rel="noopener noreferrer">Matomo</a>: For our website analytics.</li>
            <li><a href="https://yourls.org" target="_blank" rel="noopener noreferrer">Yourls</a>: For URL shortening of our long URL's.</li>
          </ol>
        </div>

        {/* Contact US */}
        <div>
          <h1>Contact Us</h1>
          <p>We’re always keen to hear from you. If you have any questions or any feedback for us about this policy, you may contact us at <a href="mailto:drabkirn@cdadityang.xyz">drabkirn@cdadityang.xyz</a>.</p>
        </div>
      </section>

      <section className="container mt-60 mb-80">
        <div className="align-center">
          <Link to={"/"} className="btn">Back</Link>
          <Link to={"/legal/privacy_policy"} className="btn">Privacy Policy</Link>
          <Link to={"/legal/terms_conditions"} className="btn">Terms</Link>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Credits;
