import React, { Component } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class AuthButton extends Component {
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
          <Modal.Body>Login/Register forms to be placed here</Modal.Body>
        </Modal>
      </>
    );
  }
}

export default AuthButton;
