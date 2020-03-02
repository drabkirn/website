import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import MainHeader from '../Shared/MainHeader';
import Footer from '../Shared/Footer';

import './Legal.css';

function CLA() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contributor License Agreement - Drabkirn</title>

        <meta name="description" content="In this Contributor License Agreement, clarify and document the rights granted by contributors to Drabkirn. This license is for your protection as a Contributor as well as the protection of Drabkirn." />
        <meta name="keywords" content="drabkirn, Contributor License Agreement, Contributor, License, Agreement, CLA, drab, drabkirn agreement, drabkirn Contributor License Agreement" />

        {/* Facebook Meta */}
        <meta property="og:url" content="https://drabkirn.cdadityang.xyz/legal/cla" />
        <meta property="og:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
        <meta property="og:description" content="In this Contributor License Agreement, clarify and document the rights granted by contributors to Drabkirn. This license is for your protection as a Contributor as well as the protection of Drabkirn." />
        <meta property="og:title" content="Contributor License Agreement - Drabkirn" />
        <meta property="og:site_name" content="Contributor License Agreement - Drabkirn" />
        <meta property="og:see_also" content="https://drabkirn.cdadityang.xyz" />

        {/* G+ Meta tags */}
        <meta itemprop="name" content="Contributor License Agreement - Drabkirn" />
        <meta itemprop="description" content="In this Contributor License Agreement, clarify and document the rights granted by contributors to Drabkirn. This license is for your protection as a Contributor as well as the protection of Drabkirn." />
        <meta itemprop="image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://drabkirn.cdadityang.xyz/legal/privacy_policy" />
        <meta name="twitter:title" content="Contributor License Agreement - Drabkirn" />
        <meta name="twitter:description" content="In this Contributor License Agreement, clarify and document the rights granted by contributors to Drabkirn. This license is for your protection as a Contributor as well as the protection of Drabkirn." />
        <meta name="twitter:image" content="https://drabkirn.cdadityang.xyz/assets/drabkirn-logo-180x180.png" />
      </Helmet>

      <MainHeader hasTag={false} pageName="Contributor License Agreement (CLA)" shortDescription='The purpose of this Agreement is to clarify and document the rights granted by contributors to Drabkirn.' />

      <section className="container">
        <div className="drab-pp-changes mb-30">
          <u className="u-orange">Effective as of 1st March, 2020</u>
          <u className="u-gold drab-pp-changes-updated-on">Updated on 1st March, 2020</u>
        </div>

        {/* Intro Content */}
        <div>
          <p>
            The purpose of this Contributor License Agreement(CLA)("Agreement") is to clarify and document the rights granted by contributors to Drabkirn. This license is for your protection as a Contributor as well as the protection of Drabkirn.
          </p>

          <br />

          <p>Throughout this policy:</p>
          <ol>
            <li>Whenever we write "we" (or "our" or "us"), we're referring to Drabkirn and cdadityang, accessible from <Link to={"/"} >https://drabkirn.cdadityang.xyz</Link> and <a href="https://cdadityang.xyz" target="_blank" rel="noopener noreferrer">https://cdadityang.xyz</a> respectively.</li>
            <li>Whenever we write "services," "projects," we're referring open source software built by Drabkirn.</li>
            <li>Whenever we write "you" (or "your" or "users"), we're referring to you(contributor who submits a contribution to us OR party signing below).</li>
            <li>"Contribution" means any original work of authorship, including any modifications or additions to an existing work of authorship, submitted by you to us, in which you own the copyright.</li>
            <li>"Copyright" means all rights protecting works of authorship, including copyright, moral, and neighboring rights, as appropriate, for the full term of their existence.</li>
            <li>"Project" means any of the projects owned or managed by Drabkirn in which software is offered under a license approved by the Open Source Initiative (OSI) (<a href="https://www.opensource.org" target="_blank" rel="noopener noreferrer">https://www.opensource.org</a>) and/or documentation provided under an OSI or a Creative Commons license (<a href="https://creativecommons.org/licenses" target="_blank" rel="noopener noreferrer">https://creativecommons.org/licenses</a>).</li>
            <li>"Submit" is the act of uploading, submitting, transmitting, or distributing code or other content to any project, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the project to discuss and improve that project, but excluding communication that is conspicuously marked or otherwise designated in writing by you as "Not a Contribution."</li>
            <li>"Submission" means the code and any other copyrightable material submitted by you, including any associated comments and documentation.</li>
          </ol>

          <p>
            You must accept and agree to the following Agreement for your past, present, and future contributions to Drabkirn open source projects by signing this Agreement. This Agreement is effective upon your acknowledgment via the CLA Assistant tool. Except for the licenses granted in this Agreement, you retain all of your right, title & interest to your contributions.
          </p>
        </div>

        <hr />

        {/* Originality of work */}
        <div>
          <h1>Originality of work</h1>
          <p>
            You represent that each of your contributions is entirely your original work. Should you wish to submit materials(or code) that are not your original work, you may submit them separately to the project if you:
          </p>
          <ol>
            <li>Retain all the copyright and license information that was in the materials as you received them,</li>
            <li>In the description accompanying your contribution, include the phrase "Contribution containing materials of a third party:" followed by the names of the third party and any licenses or other restrictions of which you are aware of, and</li>
            <li>Follow any additional instructions in the project's written guidelines concerning contributions.</li>
          </ol>
          <br />
          <p>
            If your contribution is made as a part of your employment with past or present employer(s), you represent that such employer(s) has authorized you to make your contributions on behalf of such employer(s). In this case, the term "you" in this Agreement will refer to you and the employer(s) collectively. OR it would be best if you made sure such that your employer(s) has waived all of their right, title, or interest in or to your contributions. If you change employers in the future and desire to submit additional contributions for the new employer, then you agree to sign a new Agreement and secure permission from the new employer before submitting those contributions.
          </p>
        </div>

        <hr />

        {/* Licenses: */}
        <div>
          <h1>Licenses</h1>
          <ol>
            <li><b>Copyright license:</b> You grant us, and those who receive the contribution directly or indirectly from us, a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license in the contribution to reproduce, prepare derivative works of, publicly display, publicly perform, and distribute the contribution and such derivative works, and to sublicense any or all of the preceding rights to third parties.</li>
            <li><b>Patent license:</b> You grant us, and those who receive the contribution directly or indirectly from us, a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable license under your patent claims that are necessarily infringed by the contribution or the combination of the contributions with the project to which it was submitted to make, have made, use, offer to sell, sell and import or otherwise dispose of the contribution alone or with the project.</li>
            <li><b>Other Rights Reserved:</b> Each party reserves all rights not expressly granted in this Agreement. No additional licenses or rights whatsoever (including, without limitation, any implied licenses) are granted by implication, exhaustion, estoppel or otherwise.</li>
          </ol>
        </div>

        <hr />

        {/* Warranty Disclaimer */}
        <div>
          <h1>Warranty Disclaimer</h1>
          <p>
            You are not expected to provide support for Your contributions, except to the extent you desire to provide support. You may provide support for free, for a fee, or not at all. Unless required by applicable law or agreed to in writing, you provide your contributions on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON- INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
          </p>
        </div>

        <hr />

        {/* Notice to Drabkirn */}
        <div>
          <h1>Notice to Drabkirn:</h1>
          <p>
            You agree to notify Drabkirn in writing of any facts or circumstances of which you later become aware that would make your representations in this Agreement inaccurate in any respect.
          </p>
        </div>

        <hr />

        {/* Miscellaneous */}
        <div>
          <h1>Miscellaneous</h1>
          <ol>
            <li>You agree that contributions to projects and information about contributions may be maintained indefinitely and disclosed publicly, including Your name and other information that you submit with your submission.</li>
            <li>This Agreement and all disputes, claims, actions, suits or other proceedings arising out of this Agreement or relating in any way to it shall be governed by the laws of India excluding its private international law provisions.</li>
            <li>You have the right to terminate this Agreement if we do not fulfill the obligations as outlined in our licenses. Such terminations must be made in writing. However, Free and Open Source Software (sub) licenses that have already been granted for contributions till the date of this Agreement termination shall remain in full force after the termination of this Agreement.</li>
          </ol>
        </div>

        <hr />

        {/* Contact US */}
        <div>
          <h1>Contact us</h1>
          <p>We’re always keen to hear from you. If you have any questions or any feedback for us about this Agreement, you may contact us at <a href="mailto:drabkirn@cdadityang.xyz">drabkirn@cdadityang.xyz</a>.</p>
        </div>
      </section>

      <section className="container mt-60 mb-80">
        <div className="align-center">
          <a href="https://go.cdadityang.xyz/clas" target="_blank" rel="noopener noreferrer" className="btn wide-btn">Sign our CLA</a>
          <br />
          <Link to={"/"} className="btn wide-btn">Back</Link>
        </div>
      </section>
      
      <Footer />
    </React.Fragment>
  );
}

export default CLA;
