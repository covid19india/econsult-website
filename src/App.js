import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Icon from 'react-feather';

import './App.scss';

import Home from './components/home';
import Navbar from './components/navbar';
import Links from './components/links';
import FAQ from './components/faq';
import TNC from './components/tnc';
import StartConsultation from './components/startConsultation';
import TawkTo from './components/tawkto';
import Footer from './components/footer'
const history = require('history').createBrowserHistory;

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
    },
    {
      pageLink: '/links',
      view: Links,
      displayName: 'Helpful Links',
      animationDelayForNavbar: 0.3,
    },
    {
      pageLink: '/tnc',
      view: TNC,
      displayName: 'Terms and Conditions',
      animationDelayForNavbar: 0.4,
    },
    {
      pageLink: '/faq',
      view: FAQ,
      displayName: 'About',
      animationDelayForNavbar: 0.5,
    },
    {
      pageLink: '/startConsultation',
      view: StartConsultation,
      displayName: 'startConsultation',
      animationDelayForNavbar: 0.5,
    },
    {
      pageLink: '/tawkto',
      view: TawkTo,
      displayName: 'tawkto',
      animationDelayForNavbar: 0.5,
    },
  ];

  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              <Navbar pages={pages} />
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />
                  );
                })}
                <Redirect to="/" />
              </Switch>
            </div>
          )}
        /> 
      </Router>
      <Footer />
    </div>
  );
}

export default App;
