import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import MainHeader from '../Shared/MainHeader';
import Footer from '../Shared/Footer';

import './Legal.css';

function PrivacyPolicy() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Privacy Policy - Drabkirn</title>

        <meta name="description" content="In our privacy policy, we explain what information we collect, why, and how we process and handle that information. This document also presents how secure and how long we keep your information." />
        <meta name="keywords" content="drabkirn, privacy policy, policy, privacy, drab, drabkirn policy, drabkirn privacy policy" />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://drabkirn.cdadityang.xyz/legal/privacy_policy" />
        <meta property="og:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
        <meta property="og:description" content="In our privacy policy, we explain what information we collect, why, and how we process and handle that information. This document also presents how secure and how long we keep your information." />
        <meta property="og:title" content="Privacy Policy - Drabkirn" />
        <meta property="og:site_name" content="Privacy Policy - Drabkirn" />
        <meta property="og:see_also" content="https://drabkirn.cdadityang.xyz" />

        {/* G+ Meta tags */}
        <meta itemprop="name" content="Privacy Policy - Drabkirn" />
        <meta itemprop="description" content="In our privacy policy, we explain what information we collect, why, and how we process and handle that information. This document also presents how secure and how long we keep your information." />
        <meta itemprop="image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://drabkirn.cdadityang.xyz/legal/privacy_policy" />
        <meta name="twitter:title" content="Privacy Policy - Drabkirn" />
        <meta name="twitter:description" content="In our privacy policy, we explain what information we collect, why, and how we process and handle that information. This document also presents how secure and how long we keep your information." />
        <meta name="twitter:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
      </Helmet>

      <MainHeader hasTag={false} pageName="Privacy Policy" shortDescription="At Drabkirn, we care about the privacy of your data and are committed to protecting it." />

      <section className="container">
        <div className="drab-pp-changes mb-30">
          <u className="u-orange">Effective as of 20th December, 2019</u>
          <u className="u-gold drab-pp-changes-updated-on">Updated on 20th December, 2019</u>
        </div>

        {/* Intro Content */}
        <div>
          <p>
            This policy explains what information we collect about you and why, what we do with that information, and how we handle that information.
          </p>

          <br />

          <p>Throughout this policy:</p>
          <ol>
            <li>Whenever we write "we"(or "our" or "us"), we're referring to Drabkirn and cdadityang, accessible from <Link to={"/"} >https://drabkirn.cdadityang.xyz</Link> and <a href="https://cdadityang.xyz" target="_blank" rel="noopener noreferrer">https://cdadityang.xyz</a> respectively.</li>
            <li>Whenever we write "services," "products," we're referring software built by Drabkirn.</li>
            <li>Whenever we write "a.k.a," that means "also known as."</li>
          </ol>
        </div>

        <hr />

        {/* Scope of this policy */}
        <div>
          <h1>Scope of this policy</h1>
          <p>
            Drabkirn and all of its products(including this very website) are entirely open-source, and we're actively building them considering your privacy in mind.
          </p>
          <br />
          <p>
            This privacy policy applies to the information obtained by us through your use of our website, products, and other online activities(like interacting with us on social media accounts).
          </p>
          <br />
          <p>
            The terms used in this policy have the same meanings as in our Terms and Conditions, accessible at <Link to={"/lagal/terms_conditions"}>https://drabkirn.cdadityang.xyz/legal/terms_conditions</Link>.
          </p>
        </div>

        <hr />

        {/* Information collection and use */}
        <div>
          <h1>Information collection and use</h1>
          <p>
            When you interact with our website and services, we collect information that could be used to identify you, a.k.a "Personal Data." Some of the Information we collect is stored in a manner that cannot be linked back to you, a.k.a "Non-personal Data."
          </p>
          <br/>
          <h2>Information you provide us directly</h2>
          <ol>
            <li>
              When you use our website and services, we might ask you to provide your first name and email address to us.
              <ol className="ol-lower-latin">
                <li>
                  We use this to:
                  <ol className="ol-lower-roman">
                    <li>Contact you about updates from Drabkirn.</li>
                    <li>Newsletters about our products.</li>
                    <li>Respond to your support queries.</li>
                  </ol>
                </li>
                <li>We use <a href="https://sendgrid.com" target="_blank" rel="noopener noreferrer">Sendgrid</a> service to collect user's emails, manage contacts, newsletters, and everything related to emails. Drabkirn nor SendGrid will ever sell your information to any 3rd party. You can read more about Sendgrid's <a href="https://sendgrid.com/policies/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://sendgrid.com/policies/security/" target="_blank" rel="noopener noreferrer">Security Policy.</a></li>
                <li>You can subscribe for updates at <Link to={"/subscribe"} >https://drabkirn.cdadityang.xyz/subscribe</Link>.</li>
                <li>You can opt-out of our emails at any time by clicking the "unsubscribe" link at the bottom of our email. If you're unable to do so, please contact us (through the end of this policy).</li>
              </ol>
            </li>
            <li>
              When you contact us through our social media profiles, we may see some of your public data that you've shared with us.
              <ol className="ol-lower-latin">
                <li>
                  For example:
                  <ol className="ol-lower-roman">
                    <li>When you comment on our Instagram post, we may see your username.</li>
                    <li>When you send us a message on our Twitter account, we may see your public twitter data.</li>
                  </ol>
                </li>
                <li>We don't manage this data, and particular social network servers manage it.</li>
                <li>Without your consent, we'll not store any of this information on our servers.</li>
                <li>
                  With your consent, we may use this information to showcase our products on our website.
                  For Example:
                  <ol className="ol-lower-roman">
                    <li>If you've given positive feedback about our product, we may take your name and feedback content and showcase this on our website to improve our product engagement.</li>
                  </ol>
                </li>
                <li>To delete your social media engagements with us(messages, comments, so on), you'll need to contact us.</li>
              </ol>
            </li>
            <li>
              Drabkirn requires that every contributor sign a Drabkirn Contributor License Agreement (CLA) when you contribute to a Drabkirn open source project. We automate this process using the tool <a href="https://cla-assistant.io/" target="_blank" rel="noopener noreferrer">CLA Assistant</a>. When you agree and sign this Agreement, we collect your:
              <ol className="ol-lower-latin">
                <li>Email address,</li>
                <li>GitHub username, and</li>
                <li>Receive your employer(s) name if you're contributing on behalf of some organization.</li>
              </ol>
              We use this information to contact you regarding this Agreement in case there is a breach or other issues about this Agreement. Our CLA outlines all the details which you can find at <a href="https://go.cdadityang.xyz/oscla" target="_blank" rel="noopener noreferrer">Drabkirn CLA</a>.
            </li>
          </ol>
        </div>

        <hr />

        {/* Information collected by us automatically */}
        <div>
          <h1>Information collected by us automatically</h1>
          <p>
            We use, process, and store your Information as necessary to administer our website and services, and develop new features.
          </p>
          <br />
          <h2>Analytics</h2>
          <p>A web analytics platform is used by a website owner to measure, collect, analyze, and report visitors data for purposes of understanding and optimizing their website.</p>
          <br />
          <p>We use Matomo Analytics to perform website analytics. We self-host Matomo on our server, accessible at <a href="https://analytics.cdadityang.xyz">https://analytics.cdadityang.xyz</a>, and all of the data we collect stays on our server securely.</p>
          <br />
          <p><b>We collect the following information from self-hosted analytics:</b></p>
          <ul className="ul-circle">
            <li>
              Personal data:
              <ul className="ul-square">
                <li>IP(Internet Protocol) Address</li>
                <li>Cookies</li>
                <li>Location information: We receive the name of the Country/City from where you use your computer and mobile device, and this is extracted from your IP Address. We'll not receive your exact street or house address.</li>
                <li>User ID</li>
              </ul>
            </li>
            <li>
              Non-personal data:
              <ul className="ul-square">
                <li>Device information: Type of hardware and software and device resolution from which you're accessing our website(s). It includes your OS version, browser information, and browser configuration.</li>
                <li>Date and time of your visit to our website.</li>
                <li>Title and URL of the page being viewed.</li>
                <li>Bandwidth: We collect how much time a page has been taken to load.</li>
              </ul>
            </li>
          </ul>
          <br />
          <p><b>We collect the above analytics data for:</b></p>
          <ul className="ul-circle">
            <li>Improving security: Identifying potential scams, fraud, and DDOS attacks so that we can take action to prevent them and run our services smoothly.</li>
            <li>Preventing errors: Identifying "not found" pages and SEO indexing issues so that we can take action to reduce such errors.</li>
          </ul>
          <br />
          <p>We keep the personal data captured by our analytics for 6 months.</p>
          <br />
          <p>We collect your personal and non-personal data from Analytics based on legitimate interest. However, under GPDR, you can exercise the following rights:</p>
          <ul className="ul-circle">
            <li>Right of access: You can ask us at any time to access your data.</li>
            <li>Right to erasure: You can ask us at any time to delete all the personal data we are processing about you.</li>
            <li>Right to portability: You can ask us at any time for a copy of all the personal data we are processing about you in Matomo.</li>
            <li>Right to withdraw consent: You can withdraw your consent at any time by contacting us.</li>
          </ul>
          <br />
          <p><b>How to opt-out of our Analytics:</b></p>
          <ul className="ul-circle">
            <li>We do respond to "Do Not Track" request which is sent to us by your browser. All major browsers support sending "Do Not Track" request to the websites. You can enable "Send Do Not Track" request option in your browser settings. After enabling this option, you can verify the same at <Link to={"/legal/privacy/analytics_opt_out"} >https://drabkirn.cdadityang.xyz/legal/privacy/analytics_opt_out</Link>.</li>
            <li>You can also visit <Link to={"/legal/privacy/analytics_opt_out"}>https://drabkirn.cdadityang.xyz/legal/privacy/analytics_opt_out</Link> and follow the instruction to opt-out the easy way.</li>
          </ul>
          <br />
          <h2>URL Shortener</h2>
          <p>Yourls is an open-source URL shortener service. It stands for "Your Own URL Shortener."</p>
          <br />
          <p>We use Yourls to perform shortening of our long URL's. We self-host Yourls on our server, accessible at <a href="https://go.cdadityang.xyz">https://go.cdadityang.xyz</a>, and all of the data we collect stays on our server.</p>
          <br />
          <p><b>We collect the following information from self-hosted Yourls:</b></p>
          <ul className="ul-circle">
            <li>
              Personal data:
              <ul className="ul-square">
                <li>Location information: We receive the name of the country from where you use your computer and mobile device, and this is extracted from your IP Address. We'll not receive your exact street or house address.</li>
              </ul>
            </li>
            <li>
              Non-personal data:
              <ul className="ul-square">
                <li>Traffic sources: If you visit our service from sources like Twitter or search results, we'll receive the name of the source.</li>
                <li>Traffic statistics: We receive how many times a shortened URL is clicked.</li>
              </ul>
            </li>
          </ul>
          <br />
          <p>We collect this information only to produce aggregated and anonymized analytics and reports. This information is always anonymized, and there is no way we can link this data back to you.</p>
        </div>

        <hr />

        {/* Data Storage and Security */}
        <div>
          <h1>Data Storage and Security</h1>
          <p>Information provided or collected by Drabkirn will be processed and stored in Bangalore, India.</p>
          <br />
          <p>Drabkirn does not sell or rent your personal information. We'll share your personal information with the third party only if we have your explicit consent.</p>
          <br />
          <p>Drabkirn values your trust in providing us your information. We strive to take reasonable administrative and technical measures to safeguard your data against theft, unauthorized access, alteration, or destruction. However, remember that no method of transmission over the internet, whether wired or wireless, is 100% secure and reliable, and we cannot ensure the security of information you transmit to us.</p>
          <br />
          <p>Drabkirn takes reasonable measures to protect our website(s) and services, which includes:</p>
          <ul className="ul-circle">
            <li>Scanning them regularly for security holes and known vulnerabilities.</li>
            <li>Using industry-standard encryption to protect your data in transit, a.k.a transport layer security ("TLS") or secure socket layer ("SSL") technology.</li>
          </ul>
        </div>

        <hr />

        {/* About Third-party privacy policies */}
        <div>
          <h1>About Third-party privacy policies</h1>
          <p>Drabkirn's privacy policy does not apply to other websites. The following third-party services may have their own privacy policies, and we recommend you to review them:</p>
          <ol className="ol-decimal">
            <li>DigitalOcean(DO): We use DO's cloud server to host our website and other products. You can find DO's privacy policy at <a href="https://www.digitalocean.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">https://www.digitalocean.com/legal/privacy-policy/</a>.</li>
          </ol>
        </div>

        <hr />

        {/* Children's Information */}
        <div>
          <h1>Children's Information</h1>
          <p>One of our main priority is adding protection for children under the age of 13. If you are under the age of 13, please do not submit any personal information to us.</p>
          <br />
          <p>We encourage parents and legal guardians to monitor their children’s Internet activity on our website(s) and services and instruct them to never provide personal information to us.</p>
          <br />
          <p>Drabkirn does not knowingly collect any Personal Identifiable Information from children under the age of 13.</p>
          <br />
          <p>If you think that your child has provided any information on our website, we strongly encourage you to contact us immediately. So we can take reasonable measures to remove that information.</p>
        </div>
        
        <hr />

        {/* Changes to this privacy policy */}
        <div>
          <h1>Changes to this privacy policy</h1>
          <p>As Drabkirn improves, we may need to update this policy. We'll notify you of any changes to this policy via email address for which you can subscribe at <Link to={"/subscribe"} >https://drabkirn.cdadityang.xyz/subscribe</Link>. If we don't have your email address, we advise you to review this page periodically for any changes.</p>
        </div>

        <hr />

        {/* Contact US */}
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

export default PrivacyPolicy;
