import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import MainHeader from '../Shared/MainHeader';
import Footer from '../Shared/Footer';

function Palace() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Drabkirn Palace - All of the drabkirn in one place</title>

        <meta name="description" content="All of the drabkirn in one place. Think this as an address book for everything drabkirn. Sweet and simple." />
    <meta name="keywords" content="drabkirn, drabkirn palace, palace, drabkirn address book, address book" />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://drabkirn.cdadityang.xyz" />
        <meta property="og:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
        <meta property="og:description" content="All of the drabkirn in one place. Think this as an address book for everything drabkirn. Sweet and simple." />
        <meta property="og:title" content="Drabkirn Palace - All of the drabkirn in one place" />
        <meta property="og:site_name" content="Drabkirn Palace" />
        <meta property="og:see_also" content="https://drabkirn.cdadityang.xyz" />

        {/* G+ Meta tags */}
        <meta itemprop="name" content="Drabkirn Palace - All of the drabkirn in one place" />
        <meta itemprop="description" content="All of the drabkirn in one place. Think this as an address book for everything drabkirn. Sweet and simple." />
        <meta itemprop="image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://drabkirn.cdadityang.xyz" />
        <meta name="twitter:title" content="Drabkirn Palace - All of the drabkirn in one place" />
        <meta name="twitter:description" content="All of the drabkirn in one place. Think this as an address book for everything drabkirn. Sweet and simple." />
        <meta name="twitter:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
      </Helmet>
      
      <MainHeader hasTag={false} pageName="Palace" shortDescription="All of the drabkirn in one place. Sweet and simple!" />

      <section className="container">
        <div className="mb-50">
          <p className="fs-1-4">
            We built this palace to gather all of the essential things of drabkirn on one page. Think this as an address book for everything drabkirn. For more generalized information about us, visit our <Link to="/">Home Page.</Link>
          </p>
        </div>

        <hr className="hr-center" />

        <div className="mb-50">
          <div>
            <h2>Apps:</h2>
            <p className="field-explanation">Here are some of the great things that we've built:</p>
            <div className="align-center mt-20">
              <a href="https://drabkirn.quotes.cdadityang.xyz" target="_blank" rel="noopener noreferrer" className="btn">Quotes</a>
              <a href="/desityle/index.html" className="btn">Desityle</a>
              <Link to="/authna" className="btn">Authna</Link>
            </div>
          </div>
        </div>

        <hr className="hr-center" />

        <div className="mb-50">
          <div>
            <h2>Writings:</h2>
            <p className="field-explanation">We maintain a simple blog and documentation that reflects on how we make things work here at drabkirn.</p>
            <div className="align-center mt-20">
              <a href="https://blog.cdadityang.xyz" className="btn wide-btn" target="_blank" rel="noopener noreferrer">Blog</a>
              <a href="/docs/index.html" className="btn wide-btn" target="_blank" rel="noopener noreferrer">Docs</a>
            </div>
          </div>
        </div>

        <hr className="hr-center" />

        <div className="mb-50">
          <div>
            <h2>Legal:</h2>
            <p className="field-explanation">We don't take things seriously at drabkirn, unless it's legal:</p>
            <div className="align-center mt-20">
              <Link to="/legal/privacy_policy" className="btn">Privacy</Link>
              <Link to="/legal/terms_conditions" className="btn">Terms</Link>
              <Link to="/legal/credits" className="btn">Credits</Link>
              <Link to="/legal/cla" className="btn">CLA</Link>
            </div>
          </div>
        </div>

        <hr className="hr-center" />

        <div className="mb-50">
          <div>
            <h2>Social:</h2>
            <p className="field-explanation">You may want to connect with us or collaborate or want to say us a sweet Hi, here's how you can do it:</p>
            <div className="drabkirn-social-icons align-center mt-30">
              <a href="https://twitter.com/drabkirn" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-twitter-100x100.png" alt="twitter-icon" /></a>
              <a href="https://www.instagram.com/drabkirn" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-insta-100x100.png" alt="insta-icon" /></a>
              <a href="https://github.com/drabkirn" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-github-100x100.png" alt="github-icon" /></a>
              <a href="https://discordapp.com/invite/wFPtMUY" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/official-discord.svg" width="100px" height="100px" alt="discord-icon" /></a>
            </div>
          </div>
        </div>

        <hr className="hr-center" />

        <div className="mb-70">
          <div className="align-center">
            <Link to={"/"} className="btn wide-btn">Back</Link>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Palace;
