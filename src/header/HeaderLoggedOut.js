import React, { Component } from 'react';
import LoginRegisterButton from '../auth/LoginRegisterButton';

class HeaderLoggedOut extends Component {
  render() {
    return (
      <div className="Header">
        <LoginRegisterButton />
      </div>
    );
  }
}

export default HeaderLoggedOut;
