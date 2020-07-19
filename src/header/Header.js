import React, { Component } from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from '@reach/router';

import Cookies from 'js-cookie';

import LibraryButton from '../library/LibraryButton';
import LoginRegisterButton from '../auth/LoginRegisterButton';
import LogOutButton from '../auth/LogOutButton';

import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: Cookies.get('TEMPVS_LOGGED_IN')
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  render() {
    return (
      <div className="Header">
        <Container>
          <Row className="show-grid">
            {this.state.loggedIn ? this.loggedInMarkup() : this.loggedOutMarkup()}
          </Row>
        </Container>
      </div>
    );
  }

  logIn() {
    this.setState({loggedIn: true});
  }

  logOut() {
    this.setState({loggedIn: false})
  }

  loggedInMarkup() {
    return (
      <>
        <Col sm={3}>
        </Col>
        <Col sm={6}>
          <Link to="/library">
            <LibraryButton />
          </Link>
        </Col>
        <Col sm={2}>
        </Col>
        <Col sm={1}>
          <LogOutButton logOut={this.logOut}/>
        </Col>
      </>
    );
  }

  loggedOutMarkup() {
    return (
      <>
        <Col sm={3}>
        </Col>
        <Col sm={6}>
          <Link to="/library">
            <LibraryButton />
          </Link>
        </Col>
        <Col sm={2}>
        </Col>
        <Col sm={1}>
          <LoginRegisterButton logIn={this.logIn}/>
        </Col>
      </>
    );
  }
}

export default Header;
