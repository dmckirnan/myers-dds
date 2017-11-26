import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/Nav.scss';

const Nav = ({ toggle, active }) =>
  (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="#!">Logo</a>
        </div>
        <nav>
          <div className="nav-mobile">
            <a id="nav-toggle" onClick={toggle} className={active ? 'active' : ''} href="#"><span /></a>
          </div>
          <ul id={active ? 'displayList' : ''} className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/staff">Staff</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/payment">Payment</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </section>
  );

Nav.propTypes = {
  toggle: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Nav;
