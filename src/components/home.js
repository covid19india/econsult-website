import React from 'react';
import * as Icon from 'react-feather';
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
                    src="/econsult_background.png"
                    alt="eConsult"
                  />
                  <div className="home-card-container">
                    <h2>consultation</h2>
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
                    src="/econsult_background.png"
                    alt="eConsult"
                  />
                  <div className="home-card-container">
                    <a
                      className="button econsult-button"
                      href="https://bit.ly/econsultdoc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon.Map />
                      <span>Esssentials near you&nbsp;</span>
                    </a>
                  </div>
                </div>
                &nbsp;&nbsp;
                <div className="home-card">
                  <div className="home-card-container">
                    <a
                      className="button econsult-button"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon.Download />
                      <span>Download Prescription&nbsp;</span>
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
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon.User />
                    <span>Volunteer as doctor&nbsp;</span>
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
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon.User />
                    <span>Volunteer as Medical Assistant&nbsp;</span>
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
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon.Users />
                    <span>Volunteer as Essential services&nbsp;</span>
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
