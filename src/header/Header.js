import React, { Component } from 'react';
import HeaderLoggedIn from './HeaderLoggedIn';
import HeaderLoggedOut from './HeaderLoggedOut';

class Header extends Component {
  constructor() {
    super();
    this.state = {loggedIn: false};
  }

  render() {
    return (
      <>
        {this.state.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      </>
    );
  }
}

export default Header;
