import React from 'react';
import { Link } from 'react-router-dom';

function MainHeader(props) {
  return (
    <React.Fragment>
      <header>
        <div className="header-intro-dsk">
          <div className="header-intro-dsk-logo col-dsk-4 align-center mt-70 mb-40">
            <Link to="/"><img src="/assets/drabkirn-logo-180x180.png" alt="Drabkirn Logo Header" /></Link>
          </div>
          <div className="header-intro-dsk-content drabkirn-header-intro-dsk-content col-dsk-8">
            <h1>Drabkirn</h1>
            {
              props.hasTag ? (
                <p className="header-intro-dsk-username-tag">{ props.tagName }</p>
              ) : (
                <h2>{ props.pageName }</h2>
              )
            }
            <p className="mt-20">{ props.shortDescription }</p>
          </div>
        </div>

        <div className="float-clearfix"></div>

        <div className="header-intro-mob">
          <div className="header-intro-mob-logo align-center mt-30">
            <img src="/assets/drabkirn-logo-180x180.png" alt="Drabkirn Logo Header" />
          </div>
          <div className="container header-intro-mob-content align-center">
          <h1>Drabkirn</h1>
            {
              props.hasTag ? (
                <p className="header-intro-dsk-username-tag">{ props.tagName }</p>
              ) : (
                <h2>{ props.pageName }</h2>
              )
            }
            <p className="mt-20">{ props.shortDescription }</p>
          </div>
        </div>

        <hr />
      </header>
    </React.Fragment>
  );
}

export default MainHeader;
