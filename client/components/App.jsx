import React, { Component } from 'react';

import Nav from './Nav.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import '../styles/App.scss';
import services from '../../assets/services';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mobile: false,
      services,
    };
    this.toggleMobile = this.toggleMobile.bind(this);
  }

  toggleMobile() {
    const obj = Object.assign({}, this.state);
    const mobile = !obj.mobile;

    this.setState({ mobile });
  }

  render() {
    return (
      <div>
        <Nav active={this.state.mobile} toggle={this.toggleMobile} />
        <Main services={this.state.services} />
        <Footer />
      </div>
    );
  }
}

export default App;
