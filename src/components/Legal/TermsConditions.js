import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import MainHeader from '../Shared/MainHeader';
import Footer from '../Shared/Footer';

function TermsConditions() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Terms and Conditions - Drabkirn</title>

        <meta name="description" content="There are some rules and regulations you need to read, understand, and agree to access our websites and our products." />
        <meta name="keywords" content="drabkirn, terms, terms and conditions, terms, conditions, drab, drabkirn terms and conditions, drabkirn terms, drabkirn conditions" />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://drabkirn.cdadityang.xyz/legal/terms_conditions" />
        <meta property="og:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
        <meta property="og:description" content="There are some rules and regulations you need to read, understand, and agree to access our websites and our products." />
        <meta property="og:title" content="Terms and Conditions - Drabkirn" />
        <meta property="og:site_name" content="Terms and Conditions - Drabkirn" />
        <meta property="og:see_also" content="https://drabkirn.cdadityang.xyz" />

        {/* G+ Meta tags */}
        <meta itemprop="name" content="Terms and Conditions - Drabkirn" />
        <meta itemprop="description" content="There are some rules and regulations you need to read, understand, and agree to access our websites and our products." />
        <meta itemprop="image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://drabkirn.cdadityang.xyz/legal/privacy_policy" />
        <meta name="twitter:title" content="Terms and Conditions - Drabkirn" />
        <meta name="twitter:description" content="There are some rules and regulations you need to read, understand, and agree to access our websites and our products." />
        <meta name="twitter:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
      </Helmet>

      <MainHeader hasTag={false} pageName="Terms and Conditions" shortDescription="There are some rules and regulations you need to read, understand, and agree to access our websites and our products." />

      <section className="container">
        <div className="drab-pp-changes mb-30">
          <u className="u-orange">Effective as of 20th December, 2019</u>
          <u className="u-gold drab-pp-changes-updated-on">Updated on 20th December, 2019</u>
        </div>

        {/* Introduction */}
        <div>
          <p>
            The following document informs you about the rules and regulation you need to read, understand, and agree to access cdadityang's website, Drabkirn's website and it's products.
          </p>
          <br />
          <p>Throughout this document:</p>
          <ol>
            <li>Whenever we write "we"(or "our" or "us"), we're referring to Drabkirn and cdadityang, accessible from <Link to={"/"} >https://drabkirn.cdadityang.xyz</Link> and <a href="https://cdadityang.xyz" target="_blank" rel="noopener noreferrer">https://cdadityang.xyz</a> respectively.</li>
            <li>Whenever we write "services," "products," we're referring software built by Drabkirn.</li>
            <li>Whenever we write "you"(or "your" or "users"), we're referring to you(website visitor or who uses our products).</li>
          </ol>
          <br />
          <p>This document is a legal agreement between Drabkirn and you. If you do not agree with these terms or the privacy policy, accessible at <Link to={"/legal/privacy_policy"}>https://drabkirn.cdadityang.xyz/legal/privacy_policy</Link>, you must immediately leave this website and stop using all of our products. So you are required to read, understand, and agree to these terms.</p>
        </div>

        <hr />

        {/* Security and Privacy */}
        <div>
          <h1>Security and Privacy</h1>
          <p>
            Please check our privacy policy, accessible at <Link to={"/legal/privacy_policy"}>https://drabkirn.cdadityang.xyz/legal/privacy_policy</Link>, in which we explain what information we collect, why, and how we process and handle that information.
          </p>
        </div>

        <hr />

        {/* License */}
        <div>
          <h1>License</h1>
          <p>
            Unless otherwise stated, Drabkirn owns the intellectual property rights for all material on Drabkirn. All intellectual property rights are reserved.
          </p>
          <br/>
          <p>
            Drabkirn's and its products logo, name, slogans, statements are not trademarked, but still, you cannot copy, redistribute or republish them. We believe in a free and open world, so we've open-sourced all of the Drabkirn, and we expect you to support us on this. However, you can reproduce, modify our products by following the license of a specific product.
          </p>
          <br />
          <h3 id="quotes" className="mb-5">Drabkirn Quotes</h3>
          <p>
            Drabkirn Quotes, a collection of quotes from Drabkirn, source code is open-source under AGPL-V3.0, which you can find at our <a href="https://github.com/drabkirn/quotes">GitHub repository</a>. However, you cannot copy or redistribute the Quotes content(i.e., the quote(s) itself) without our consent. However, you can share our quotes with others or include it on your website through our API, provided you put a proper attribution as "Drabkirn Quotes" or provide a link to our Quotes website.
          </p>
          <br />
          <p>
            If you think Drabkirn's or any of its products logo, name, slogans, quotes, or statements represent yours, please contact us through the end of this policy.
          </p>
        </div>

        <hr />

        {/* Termination and Prohibition */}
        <div>
          <h1>Termination and Prohibition</h1>
          <p>
            We may terminate or suspend any or all of our services without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms. If you wish to delete any of your data that we have, please contact us. You can read our privacy policy, accessible at <Link to={"/legal/privacy_policy"}>https://drabkirn.cdadityang.xyz/legal/privacy_policy</Link>, for more information on how we use personal data.
          </p>
          <br />
          <p>
            You are prohibited, and we reserve the right to suspend you from using this website, and it's products if you do the following:
          </p>
          <ul className="ul-circle">
            <li>Violate any international, federal, provincial or state regulations, rules, laws, or local ordinances.</li>
            <li>Harass, abuse, insult, harm, defame, intimidate, or discriminate based on gender, sexual orientation, religion, race, age, national origin, or disability.</li>
            <li>Submit false or misleading information.</li>
            <li>Commit any unlawful purpose.</li>
            <li>Upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or the Internet.</li>
            <li>Collect or track the personal information of others.</li>
            <li>Any obscene or immoral purpose.</li>
            <li>Interfere with or circumvent the security features of the Service or the Internet.</li>
          </ul>
        </div>

        <hr />

        {/* Warranty Disclaimer */}
        <div>
          <h1>Warranty Disclaimer</h1>
          <p>You use our website and the products at your own risk. The website and the products are provided on an "As Is, As Available" basis. We shall have no responsibility or liability for any content appearing on our website and services. We disclaim all responsibility for any loss, claim, liability, or damage of any kind resulting from our website, including but not limited to, technical inaccuracies, typographical errors, or malicious/outdated links.</p>
        </div>

        <hr />

        {/* Third-party links */}
        <div>
          <h1>Third-party links</h1>
          <p>We provide some third-party links on our websites and products for references or to navigate to other websites. Drabkirn has no control over the content, privacy policies, or practices of any such websites. If you choose to access these third-party websites, you acknowledge that we are not responsible for any content or damage caused on such websites.</p>
          <br />
          <p>We strongly advise you to read the legal documents of any third-party websites that you visit.</p>
        </div>

        <hr />

        {/* Changes to these terms */}
        <div>
          <h1>Changes to these terms</h1>
          <p>Drabkirn reserves the right to modify or replace these terms at any time. We'll notify you of any changes to this document via email address. If we don't have your email address, we advise you to review this document periodically for any changes.</p>
        </div>

        <hr />

        {/* Contact us */}
        <div>
          <h1>Contact us</h1>
          <p>We’re always keen to hear from you. If you have any questions or any feedback for us about this policy, you may contact us at <a href="mailto:drabkirn@cdadityang.xyz">drabkirn@cdadityang.xyz</a>.</p>
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

export default TermsConditions;
