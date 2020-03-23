import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import MainHeader from '../Shared/MainHeader';
import Footer from '../Shared/Footer';

function Credits() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Credits - Drabkirn</title>

        <meta name="description" content="Since we believe in a free and open-world, we use some free stuff out there to make drabkirn work as you see it today." />
        <meta name="keywords" content="drabkirn, credits, credits, drab, drabkirn credits" />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://drabkirn.cdadityang.xyz/legal/credits" />
        <meta property="og:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
        <meta property="og:description" content="Since we believe in a free and open-world, we use some free stuff out there to make drabkirn work as you see it today." />
        <meta property="og:title" content="Credits - Drabkirn" />
        <meta property="og:site_name" content="Credits - Drabkirn" />
        <meta property="og:see_also" content="https://drabkirn.cdadityang.xyz" />

        {/* G+ Meta tags */}
        <meta itemprop="name" content="Credits - Drabkirn" />
        <meta itemprop="description" content="Since we believe in a free and open-world, we use some free stuff out there to make drabkirn work as you see it today." />
        <meta itemprop="image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://drabkirn.cdadityang.xyz/legal/credits" />
        <meta name="twitter:title" content="Credits - Drabkirn" />
        <meta name="twitter:description" content="Since we believe in a free and open-world, we use some free stuff out there to make drabkirn work as you see it today." />
        <meta name="twitter:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
      </Helmet>

      <MainHeader hasTag={false} pageName="Credits" shortDescription="Since we believe in a free and open-world, we use some free stuff out there to make drabkirn work as you see it today." />

      <section className="container">
        <div className="drab-pp-changes mb-30">
          <u className="u-orange">Updated on 23rd March, 2020</u>
        </div>

        {/* Introduction */}
        <div>
          <p className="fs-1-4">At Drabkirn, We use the following free services(or products or freemium products):</p>
          <ol>
            <li><a href="https://twitter.com/drabkirn" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://instagram.com/drabkirn" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://discordapp.com/invite/wFPtMUY" target="_blank" rel="noopener noreferrer">Discord</a>: To connect, chit-chat, gossip, and, most importantly, share our work with people.</li>
            <li><a href="https://github.com/drabkirn" target="_blank" rel="noopener noreferrer">Github</a>: To host, collaborate, and manage our entire source code publically. FYI, we're entirely on open-source.</li>
            <li><a href="https://trello.com/drabkirn" target="_blank" rel="noopener noreferrer">Trello</a>: To be at-most productive by managing and versioning our projects in one place using Kanban boards.</li>
            <li><a href="https://zoho.com" target="_blank" rel="noopener noreferrer">Zoho</a>: To manage and read the emails that you send us <a href="mailto:drabkirn@cdadityang.xyz">drabkirn@cdadityang.xyz</a></li>
            <li><a href="https://www.canva.com/drabkirn" target="_blank" rel="noopener noreferrer">Canva</a>: To create sleek and awesome posters and designs for our social media audience.</li>
            <li><a href="https://vectr.com" target="_blank" rel="noopener noreferrer">Vectr</a>: To quickly create logos online in vector format.</li>
            <li><a href="https://gtmetrix.com" target="_blank" rel="noopener noreferrer">GTMetrix</a>: To measure website speed performance and speed up our website with recommendations.</li>
            <li><a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>: For downloading free photos and use them in our blog or posters in Canva. These photos are royalty-free, so we don't have to link-back them whenever we use them. We believe everything should be free without any strings attached.</li>
            <li><a href="https://www.iconfinder.com/" target="_blank" rel="noopener noreferrer">Iconfinder</a>: To use icons for various purposes. We only use icons that require "No Link Back" to authors. Like we said, we believe everything should be free without any strings attached.</li>
            <li><a href="https://sendgrid.com" target="_blank" rel="noopener noreferrer">Sendgrid</a>: To manage our newsletter and use email marketing in general.</li>
          </ol>

          <hr className="hr-center" />

          <p className="fs-1-4">We use the following open-source products:</p>
          <ol className="ol-tag-decimal">
            <li><a className="a-tag little-white-color-text" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost</a>: To write on our blog with ease, which is accessible at <a href="https://blog.cdadityang.xyz">https://blog.cdadityang.xyz</a>.</li>
            <li><a href="https://matomo.org/" target="_blank" rel="noopener noreferrer">Matomo</a>: To host our website analytics by preserving your privacy.</li>
            <li><a href="https://yourls.org" target="_blank" rel="noopener noreferrer">Yourls</a>: To shorten our long URLs for you to easily remember and access them seamlessly.</li>
            <li><a href="https://github.com/slatedocs/slate" target="_blank" rel="noopener noreferrer">Slate</a>: To write our documentation. Slate provides a useful UI and API reference explorer.</li>
            <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>: We write all of our code on our machine in this IDE. We do use some extensions, but I think I'll get a life, and we'll leave that for now.</li>
            <li><a href="https://openvpn.net/" target="_blank" rel="noopener noreferrer">Yourls</a>: We access all of our codebase hosted on our server through a VPN. This helps us to blockade access to other IPs that wants to access them. Thus, security on the Go.</li>
            <li><b>Web Ecosystem</b>: We primarily use Ruby, Rails, React, and many more open-source products/services to make our websites work. Like We've said, we'll get some life and leave that for now.</li>
          </ol>

          <hr className="hr-center" />

          <u className="u-gold fs-1-6">References:</u>
          <ol>
            <li>
              Our contributing guidelines on all GitHub repositories are made by referring to the following guides, plus we added more taste to them as per our requirements:
              <ol className="ol-upper-latin">
                <li><a href="https://github.com/codenvy/codenvy/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Codenvy Guide</a></li>
                <li><a href="https://github.com/TheOdinProject/theodinproject/wiki/Contributing-Guide" target="_blank" rel="noopener noreferrer">The Odin Project Guide</a></li>
              </ol>
            </li>
            <li>
              Our <Link to="/legal/cla">CLA</Link> document was created by referring to the following guides, plus we added more flavor to them as per our requirements:
              <ol className="ol-upper-latin">
                <li><a href="https://cla.developers.google.com/about/google-individual" target="_blank" rel="noopener noreferrer">Google Developers Individual CLA</a></li>
                <li><a href="https://cla-assistant.io/thepracticaldev/dev.to" target="_blank" rel="noopener noreferrer">The Practical Dev CLA</a></li>
                <li><a href="http://contributoragreements.org/agreement-chooser.html" target="_blank" rel="noopener noreferrer">Contributor Agreements CLA Chooser</a></li>
              </ol>
            </li>
          </ol>
        </div>
        
        <hr />

        {/* Contact US */}
        <div>
          <h1>Contact Us</h1>
          <p>We’re always keen to hear from you. If you have any questions or any feedback for us about this page, you may contact us at <a href="mailto:drabkirn@cdadityang.xyz">drabkirn@cdadityang.xyz</a>.</p>
        </div>
      </section>

      <section className="container mt-60 mb-80">
        <div className="align-center">
          <Link to={"/"} className="btn wide-btn">Back</Link>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Credits;
