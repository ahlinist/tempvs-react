import React, { Component } from 'react';

import { FaSignOutAlt } from 'react-icons/fa';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FormattedMessage } from "react-intl";

import { doFetch } from "../util/Fetcher.js";

class LogOutButton extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleShow() {
    this.setState({showModal: true});
  }

  handleClose() {
    this.setState({showModal: false});
  }

  logOut() {
    const actions = {
      200: () => {
        this.handleClose();
        this.props.logOut();
      }
    };

    doFetch("/api/user/logout", "POST", null, actions);
  }

  render() {
    return (
      <>
        <Button className="float-sm-right" variant="default" onClick={this.handleShow}>
          <FaSignOutAlt/>
        </Button>

        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Body>
            <div className="text-center">
              <FormattedMessage id="logout.confirmation" defaultMessage="Are you sure you want to log out?"/>
            </div>
            <div>
              <Button variant="secondary" type="submit" className="float-sm-left" onClick={this.logOut}>
                <FormattedMessage id="yes" defaultMessage="Yes"/>
              </Button>
              <Button variant="secondary" type="submit" className="float-sm-right" onClick={this.handleClose}>
                <FormattedMessage id="no" defaultMessage="No"/>
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default LogOutButton;
