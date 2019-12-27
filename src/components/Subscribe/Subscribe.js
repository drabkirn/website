import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";

import MainHeader from '../Shared/MainHeader';
import Footer from '../Shared/Footer';
import { addContactToNewsletter } from '../../store/actions/newsletterActions';

import './Subscribe.css';

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

  console.log(store.newsletter);
  
  return (
    <React.Fragment>
      <Helmet>
        <title>Newsletter - Drabkirn</title>

        <meta name="description" content="Subscribe to our weekly newsletter about everything Drabkirn on every Tuesday. Don't worry; we won't spam you or sell your email to any third party." />
    <meta name="keywords" content="drabkirn, drab, newsletter, subscribe, drabkirn newsletter, drabkirn subscribe" />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://drabkirn.cdadityang.xyz/subscribe" />
        <meta property="og:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
        <meta property="og:description" content="Subscribe to our weekly newsletter about everything Drabkirn on every Tuesday. Don't worry; we won't spam you or sell your email to any third party." />
        <meta property="og:title" content="Newsletter - Drabkirn" />
        <meta property="og:site_name" content="Drabkirn" />
        <meta property="og:see_also" content="https://drabkirn.cdadityang.xyz" />

        {/* G+ Meta tags */}
        <meta itemprop="name" content="Newsletter - Drabkirn" />
        <meta itemprop="description" content="Subscribe to our weekly newsletter about everything Drabkirn on every Tuesday. Don't worry; we won't spam you or sell your email to any third party." />
        <meta itemprop="image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://drabkirn.cdadityang.xyz/subscribe" />
        <meta name="twitter:title" content="Newsletter - Drabkirn" />
        <meta name="twitter:description" content="Subscribe to our weekly newsletter about everything Drabkirn on every Tuesday. Don't worry; we won't spam you or sell your email to any third party." />
        <meta name="twitter:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
      </Helmet>

      <MainHeader hasTag={false} pageName="Subscription" shortDescription="Subscribe to our free weekly newsletter on everything Drabkirn." />

      <section className="container">
        <div className="form-container mt-50">
          <form className="form-tag" onSubmit={ (e) => {
              e.preventDefault();
              dispatch(addContactToNewsletter(firstName, email))
            }
          }>
            <div className="form-header align-center">
              <h2>Subscribe to our newsletter</h2>
              <u className="form-header-explanation u-gold">Subscribe to our weekly newsletter, and we'll notify you about everything Drabkirn on every Tuesday. Don't worry; we won't spam you or sell your email to any third party.</u>
            </div>

            <div className="form-field">
              <label htmlFor="first_name" className="form-field-label">First Name: </label>
              <p className="form-field-explanation">We collect your first name to refer to you on our emails. We won't let anyone know that you've subscribed to us. For more, see our privacy policy. Name must have minimum of 4 characters and maximum of 20 characters.</p>
              <input type="text" className="form-field-input" id="first_name" required minLength="4" maxLength="20" onChange={ (e) => setfirstName(e.target.value) } />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="form-field-label">Email: </label>
              <p className="form-field-explanation">Make sure you provide your correct email address, this is the only way we can communicate with you. Don't worry, you can anytime unsubscribe from us from the footer of our email.</p>
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
              <button className="btn wide-btn submit-btn">Submit</button>
            </div>
          </form>
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
