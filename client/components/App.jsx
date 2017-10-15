import React, { Component } from 'react';

import Nav from './Nav.jsx';
import Main from './Main.jsx';
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mobile: false,
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
        <Main />
      </div>
    );
  }
}

export default App;
