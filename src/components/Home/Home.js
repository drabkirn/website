import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import MainHeader from '../Shared/MainHeader';
import Footer from '../Shared/Footer';

function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Drabkirn - Create the world out of the things that you build</title>

        <meta name="description" content="Create the world out of the things that you build. We build those things and will set them free. We also write thoughts and much more." />
        <meta name="keywords" content="drabkirn, open-source, privacy, desityle, quotes, authna, docs" />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://drabkirn.cdadityang.xyz" />
        <meta property="og:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
        <meta property="og:description" content="Create the world out of the things that you build. We build those things and will set them free. We also write thoughts and much more." />
        <meta property="og:title" content="Drabkirn - Create the world out of the things that you build" />
        <meta property="og:site_name" content="Drabkirn" />
        <meta property="og:see_also" content="https://drabkirn.cdadityang.xyz" />

        {/* G+ Meta tags */}
        <meta itemprop="name" content="Drabkirn - Create the world out of the things that you build" />
        <meta itemprop="description" content="Create the world out of the things that you build. We build those things and will set them free. We also write thoughts and much more." />
        <meta itemprop="image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://drabkirn.cdadityang.xyz" />
        <meta name="twitter:title" content="Drabkirn - Create the world out of the things that you build" />
        <meta name="twitter:description" content="Create the world out of the things that you build. We build those things and will set them free. We also write thoughts and much more." />
        <meta name="twitter:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
      </Helmet>

      <MainHeader hasTag={true} tagName="@drabkirn" shortDescription="Create the world out of the things that you build. We build those things and will set them free. We also write thoughts and much more." />

      <section className="container">
        <div>
          <p className="fs-1-6">
            Our mission is to connect and build a free, open, and privacy-respected open-source world that can improve humans life and beyond. We believe in our saying, <b><em>"Human's power is their power, and not the brand's power."</em></b>
          </p>
          <hr className="hr-center" />
          <p className="fs-1-6">
            Our vision is to empower every person on this planet (and beyond) to use free, open and privacy-respected solutions, and we intend to connect with them to spread happiness.
          </p>
          <hr className="hr-center" />
          <p className="fs-1-6">
            We know our motto, mission, and vision are vague, but hey, does that even matter? Let's dive in straight on what we've got for you:
          </p>
        </div>

        <div className="mt-30 align-center">
          <a href="https://cdadityang.xyz" className="btn" target="_blank" rel="noopener noreferrer">Aditya</a>
          <a href="https://drabkirn.quotes.cdadityang.xyz" className="btn" target="_blank" rel="noopener noreferrer">Quotes</a>
          <a href="/desityle/index.html" className="btn">Desityle</a>
          <Link to="/authna" className="btn">Authna</Link>
          <a href="/docs/index.html" className="btn">Docs</a>
        </div>
      </section>

      <section className="container">
        <div className="mt-90 mb-70">
          <p className="fs-1-6 mb-40">
            Don't forget to follow us on social media to stay ahead on us and also take some time to read our blog, because hey, you've got nothing to lose:
          </p>
          <div className="align-center drabkirn-social-icons">
            <a href="https://blog.cdadityang.xyz" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-blog-100x100.png" alt="blog-icon" /></a>
            <a href="https://github.com/drabkirn" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-github-100x100.png" alt="github-icon" /></a>
            <a href="https://twitter.com/drabkirn" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-twitter-100x100.png" alt="twitter-icon" /></a>
            <a href="https://www.instagram.com/drabkirn" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/if-insta-100x100.png" alt="insta-icon" /></a>
            <a href="https://discordapp.com/invite/wFPtMUY" className="mr-20" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/official-discord.svg" width="100px" height="100px" alt="discord-icon" /></a>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Home;
