import React from 'react';
import { Helmet } from "react-helmet";

import MainHeader from '../Shared/MainHeader';
import Footer from '../Shared/Footer';

import './Home.css';

function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Drabkirn - Create the world out of the things that you build</title>

        <meta name="description" content="Our mission is to connect and build a free, open, and privacy-respected world that can improve humans life and beyond. Human's power is their power, and not the brand's power." />
    <meta name="keywords" content="drabkirn, drab, open-source, privacy-respected, world, human power, desityle, quotes" />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://drabkirn.cdadityang.xyz" />
        <meta property="og:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
        <meta property="og:description" content="Our mission is to connect and build a free, open, and privacy-respected world that can improve humans life and beyond. Human's power is their power, and not the brand's power." />
        <meta property="og:title" content="Drabkirn - Create the world out of the things that you build" />
        <meta property="og:site_name" content="Drabkirn" />
        <meta property="og:see_also" content="https://drabkirn.cdadityang.xyz" />

        {/* G+ Meta tags */}
        <meta itemprop="name" content="Drabkirn - Create the world out of the things that you build" />
        <meta itemprop="description" content="Our mission is to connect and build a free, open, and privacy-respected world that can improve humans life and beyond. Human's power is their power, and not the brand's power." />
        <meta itemprop="image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://drabkirn.cdadityang.xyz" />
        <meta name="twitter:title" content="Drabkirn - Create the world out of the things that you build" />
        <meta name="twitter:description" content="Our mission is to connect and build a free, open, and privacy-respected world that can improve humans life and beyond. Human's power is their power, and not the brand's power." />
        <meta name="twitter:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
      </Helmet>

      <MainHeader hasTag={true} tagName="@drabkirn" shortDescription="Create the world out of the things that you build." />

      <section className="container">
        <div>
          <p className="fs-1-6">Our mission is to connect and build a free, open, and privacy-respected world that can improve humans life and beyond. Human's power is their power, and not the brand's power.</p>
          <br />
          <p className="fs-1-6">Our vision is to empower every person on this planet and beyond to use free, open, and privacy-respected solutions and connect with them to spread happiness.</p>
          <br />
          <p className="fs-1-6">We're coming soon, take a ride:</p>
        </div>

        <div className="mt-50 align-center">
          <a href="https://cdadityang.xyz" className="btn">Aditya</a>
          <a href="https://drabkirn.quotes.cdadityang.xyz" className="btn">Quotes</a>
        </div>
      </section>

      <section className="container">
        <div className="mt-50 mb-70 align-center drabkirn-social-icons">
          <a href="https://blog.cdadityang.xyz" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-blog-100x100.png" alt="blog-icon" /></a>
          <a href="https://github.com/drabkirn" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-github-100x100.png" alt="github-icon" /></a>
          <a href="https://twitter.com/drabkirn" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-twitter-100x100.png" alt="twitter-icon" /></a>
          <a href="https://www.instagram.com/drabkirn" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-insta-100x100.png" alt="insta-icon" /></a>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Home;
