import React, { Component } from 'react';

import { FaSignInAlt } from 'react-icons/fa';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

class LoginRegisterButton extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow() {
    this.setState({show: true});
  }

  handleClose() {
    this.setState({show: false});
  }

  render() {
    return (
      <>
        <Button className="float-sm-right" variant="default" onClick={this.handleShow}>
          <FaSignInAlt/>
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <Tabs className="row">
              <Tab eventKey="login" title="Log In" className="col-sm-6">
                <LoginForm />
              </Tab>
              <Tab eventKey="register" title="Register">
                <RegistrationForm />
              </Tab>
            </Tabs>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default LoginRegisterButton;
