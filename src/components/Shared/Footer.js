import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="footer-legal">
          <p className="col-dsk-6 col-mob-12 pl-20">Copyrights &copy;, 2019 - <Link to="/">Drabkirn</Link></p>
          <div className="footer-legal-links align-right col-dsk-6 col-mob-12 pr-20">
            <Link to="/legal/privacy_policy" className="mr-10">Privacy</Link>
            <Link to="/legal/terms_conditions" className="mr-10">Terms</Link>
            <Link to="/legal/credits" className="mr-10">Credits</Link>
            <a href="mailto:drabkirn@cdadityang.xyz" className="mr-10">Contact</a>
          </div>
        </div>
        <div className="float-clearfix"></div>
        <div className="footer-baaaaaa">
          <p className="align-center"><i>@Baaaaaa</i></p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
