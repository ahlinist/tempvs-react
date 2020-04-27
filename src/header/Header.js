import React, { Component } from "react";

import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";

import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {loggedIn: false};
  }

  render() {
    return (
      <div className="Header">
        {this.state.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      </div>
    );
  }
}

export default Header;
