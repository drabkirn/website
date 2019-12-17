import React from 'react';

import './Home.css';

function Home() {
  return (
    <React.Fragment>
      <header>
        <div className="header-intro-dsk">
          <div className="header-intro-dsk-logo col-dsk-4 align-center mt-70 mb-40">
            <img src="/assets/drabkirn-logo-180x180.png" alt="drabkirn logo" />
          </div>
          <div className="header-intro-dsk-content drabkirn-header-intro-dsk-content col-dsk-8">
            <h1>Drabkirn</h1>
            <p className="header-intro-dsk-username-tag">@drabkirn</p>
            <p className="mt-20">Create the world out of the things that you build.</p>
          </div>
        </div>

        <div className="float-clearfix"></div>

        <div className="header-intro-mob">
          <div className="header-intro-mob-logo align-center mt-30">
            <img src="/assets/drabkirn-logo-180x180.png" alt="drabkirn logo" />
          </div>
          <div className="container header-intro-mob-content align-center">
            <h1>Drabkirn</h1>
            <p className="header-intro-dsk-username-tag">@drabkirn</p>
            <p className="mt-20">Create the world out of the things that you build.</p>
          </div>
        </div>

        <hr />
      </header>

      <section className="container">
        <div>
          <p className="fs-1-6">Our mission is to connect and build a free, open, and privacy-respected world that can improve humans life and beyond. Human's power is their power, and not the brand's power.</p>
          <br />
          <p className="fs-1-6">Our vision is to empower every person on this planet and beyond to use free, open, and privacy-respected solutions and connect with them to spread happiness.</p>
          <br />
          <p className="fs-1-6">We're coming soon, take a ride:</p>
        </div>

        <div className="mt-50 align-center">
          <a href="https://cdadityang.xyz" className="btn wide-btn">Aditya</a>
        </div>

        <div className="mt-50 mb-70 align-center drabkirn-social-icons">
          <a href="https://blog.cdadityang.xyz" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-blog-100x100.png" alt="blog-icon" /></a>
          <a href="https://github.com/drabkirn" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-github-100x100.png" alt="github-icon" /></a>
          <a href="https://twitter.com/drabkirn" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-twitter-100x100.png" alt="twitter-icon" /></a>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
