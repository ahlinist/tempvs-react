import React, { Component } from 'react';
import LoginRegisterButton from '../auth/LoginRegisterButton';

class HeaderLoggedIn extends Component {
  render() {
    return (
      <div className="Header">
        <LoginRegisterButton />
      </div>
    );
  }
}

export default HeaderLoggedIn;
