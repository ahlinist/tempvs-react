import React, { Component } from 'react';
import AuthButton from './auth/AuthButton';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <AuthButton />
      </div>
    );
  }
}

export default Header;
