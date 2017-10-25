import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Home from './views/home/Home.jsx';
import Staff from './views/staff/Staff.jsx';
import Services from './views/services/Services.jsx';
import Payment from './views/payment/Payment.jsx';
import Contact from './views/contact/Contact.jsx';

const Main = ({ services }) =>
  (
    <main>
      <Switch>
        <Route exact path="/" render={props => (<Home services={services} />)} />
        <Route path="/staff" component={Staff} />
        <Route path="/services" component={Services} />
        <Route path="/payment" component={Payment} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  );

Main.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Main;
