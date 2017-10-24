import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/home/Home.jsx';
import Staff from './views/staff/Staff.jsx';
import Services from './views/services/Services.jsx';
import Payment from './views/payment/Payment.jsx';
import Contact from './views/contact/Contact.jsx';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/staff" component={Staff} />
      <Route path="/services" component={Services} />
      <Route path="/payment" component={Payment} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </main>
);

export default Main;
