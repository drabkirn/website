import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from '../Shared/MainHeader';

import './Home.css';

function Home() {
  return (
    <React.Fragment>
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
          <Link to="/legal/privacy_policy" className="btn">Privacy Policy</Link>
          <Link to="/legal/terms_conditions" className="btn">Terms</Link>
          <Link to="/legal/credits" className="btn">Credits</Link>
        </div>

        <div className="mt-50 mb-70 align-center drabkirn-social-icons">
          <a href="https://blog.cdadityang.xyz" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-blog-100x100.png" alt="blog-icon" /></a>
          <a href="https://github.com/drabkirn" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-github-100x100.png" alt="github-icon" /></a>
          <a href="https://twitter.com/drabkirn" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-twitter-100x100.png" alt="twitter-icon" /></a>
          <a href="https://www.instagram.com/drabkirn" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-insta-100x100.png" alt="insta-icon" /></a>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
