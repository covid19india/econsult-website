import React from 'react';
import * as Icon from 'react-feather';
import {FaUserNurse} from 'react-icons/fa';
import {FaUserMd} from 'react-icons/fa';
import {MdLocalPharmacy} from 'react-icons/md';
// import StartConsultation from './startConsultation';

import {Link} from 'react-router-dom';

function Home(props) {
  return (
    <React.Fragment>
      <div className="Home">
        <div className="home-left">
          <div className="header fadeInUp" style={{animationDelay: '1s'}}>
            <div className="header-mid">
              <div className="titles">
                <div className="home-card">
                  <img
                    className="fadeInUp"
                    src="/consultation.png"
                    alt="eConsult"
                  />
                  <div className="home-card-container">
                    <Link
                      to="/startConsultation"
                      className="button econsult-button"
                    >
                      <Icon.Play />
                      <span>click here to Start&nbsp;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-right">
          <div className="header fadeInUp" style={{animationDelay: '1s'}}>
            <div className="header-mid">
              <div className="titles">
                <div className="home-card">
                  <img
                    className="fadeInUp"
                    src="/essentials.png"
                    alt="essentials"
                  />
                  <div className="home-card-container">
                    <a
                      className="button econsult-button"
                      href="https://www.covid19india.org/essentials"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon.Map />
                      <span>Find Nearby&nbsp;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="volunteer">
        <div className="volunteer-left">
          <div className="header fadeInUp" style={{animationDelay: '1s'}}>
            <div className="titles">
              <div className="home-card volunteer-card">
                <div className="home-card-container">
                  <a
                    className="button econsult-button"
                    href="https://airtable.com/shrVJBHlWPmZFPKCI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaUserMd />
                    <span>Volunteer as a doctor&nbsp;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="volunteer-mid">
          <div className="header fadeInUp" style={{animationDelay: '1s'}}>
            <div className="titles">
              <div className="home-card volunteer-card">
                <div className="home-card-container">
                  <a
                    className="button econsult-button"
                    href="https://forms.gle/X6A1dTdjtS1fpdaD8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaUserNurse />
                    <span>Volunteer as a Medical Assistant&nbsp;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="volunteer-left">
          <div className="header fadeInUp" style={{animationDelay: '1s'}}>
            <div className="titles">
              <div className="home-card volunteer-card">
                <div className="home-card-container">
                  <a
                    className="button econsult-button"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfquevp7_rdgdEoDgTdimWwTXO3B9TjFEAm3DbrMDXxCiuwuA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdLocalPharmacy />
                    <span>Enlist as an Essential service&nbsp;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;

/* &nbsp;&nbsp;
<div className="home-card">
                  <div className="home-card-container">
                    <a
                      className="button econsult-button"
                      href="#"
                      target="_self"
                      rel="noopener noreferrer"
                    >
                      <Icon.Download />
                      <span>Download Prescription&nbsp;</span>
                    </a>
                  </div>
                </div> */
