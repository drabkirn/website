import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";

import MainHeader from '../Shared/MainHeader';
import Footer from '../Shared/Footer';
import { addContactToNewsletter } from '../../store/actions/newsletterActions';

function Subscribe() {
  const [email, setEmail] = useState();
  const [firstName, setfirstName] = useState();

  // Get the Redux state
  const store = useSelector(store => store);
  const newsletterSubscribeStatus = store.newsletter.newsletterSubscribeStatus;
  const newsletterSubscribeData = store.newsletter.newsletterSubscribeData;
  const newsletterSubscribeError = store.newsletter.err;

  // Get the Redux Dispatch
  const dispatch = useDispatch();
  
  return (
    <React.Fragment>
      <Helmet>
        <title>Subscribe to our free weekly newsletter - Drabkirn</title>

        <meta name="description" content="We had to work a lot on making a free newsletter for you. We shoot you a mail once in a week on everything drabkirn." />
        <meta name="keywords" content="drabkirn, drab, newsletter, subscribe, drabkirn newsletter, drabkirn subscribe" />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://drabkirn.cdadityang.xyz/subscribe" />
        <meta property="og:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
        <meta property="og:description" content="We had to work a lot on making a free newsletter for you. We shoot you a mail once in a week on everything drabkirn." />
        <meta property="og:title" content="Subscribe to our free weekly newsletter - Drabkirn" />
        <meta property="og:site_name" content="Drabkirn" />
        <meta property="og:see_also" content="https://drabkirn.cdadityang.xyz" />

        {/* G+ Meta tags */}
        <meta itemprop="name" content="Subscribe to our free weekly newsletter - Drabkirn" />
        <meta itemprop="description" content="We had to work a lot on making a free newsletter for you. We shoot you a mail once in a week on everything drabkirn." />
        <meta itemprop="image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://drabkirn.cdadityang.xyz/subscribe" />
        <meta name="twitter:title" content="Subscribe to our free weekly newsletter - Drabkirn" />
        <meta name="twitter:description" content="We had to work a lot on making a free newsletter for you. We shoot you a mail once in a week on everything drabkirn." />
        <meta name="twitter:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
      </Helmet>

      <MainHeader hasTag={false} pageName="Newsletter" shortDescription="We had to work a lot on making a free newsletter for you. We shoot you a mail once in a week on everything drabkirn." />

      <section className="container">
        <div className="form-container mt-50">
          <form className="form-tag" onSubmit={ (e) => {
              e.preventDefault();
              dispatch(addContactToNewsletter(firstName, email))
            }
          }>
            <div className="form-header align-center">
              <h2>Subscribe to our newsletter</h2>
              <u className="form-header-explanation u-gold">You've got nothing to worry about; you can read our <Link to="/legal/privacy_policy">privacy policy</Link> on how we handle your data. TLDR: We won't spam you or sell this data to any third party.</u>
            </div>

            <div className="form-field">
              <label htmlFor="first_name" className="form-field-label">First Name: </label>
              <p className="form-field-explanation">We collect your first name to refer to you on our emails. We won't let anyone know that you've subscribed to us. Name must have a minimum of 4 characters and a maximum of 20 characters.</p>
              <input type="text" className="form-field-input" id="first_name" required minLength="4" maxLength="20" onChange={ (e) => setfirstName(e.target.value) } />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="form-field-label">Email: </label>
              <p className="form-field-explanation">Make sure you provide your correct email address, this is the only way we can communicate with you. Don't worry, you can anytime unsubscribe from us from the footer section of any of our email. It's that simple.</p>
              <input type="email" className="form-field-input" id="email" required onChange={ (e) => setEmail(e.target.value) } />
            </div>

            {
              newsletterSubscribeStatus ? (
                <React.Fragment>
                  <div className="jumbo success-jumbo">
                    <p>{ newsletterSubscribeData.message }</p>
                  </div>
                </React.Fragment>
              ) : ""
            }
            
            {
              newsletterSubscribeError ? (
                <React.Fragment>
                  <div className="jumbo error-jumbo">
                    <p>{ newsletterSubscribeError.message }. { newsletterSubscribeError.detail }</p>
                  </div>
                </React.Fragment>
              ) : ""
            }

            <div className="form-footer align-center mt-40">
              <button className="btn wide-btn submit-btn">Subscribe</button>
            </div>
          </form>
        </div>

        <div className="align-center mt-20">
          <a href="https://go.cdadityang.xyz/nlif" className="newsletter-redirect-link" target="_blank" rel="noopener noreferrer">We understand things sometimes break, anyways click here if the above form doesn't work.</a>
        </div>
      </section>

      <section className="container mt-40 mb-80">
        <div className="align-center">
          <Link to={"/"} className="btn wide-btn">Back</Link>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Subscribe;
