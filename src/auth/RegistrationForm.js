import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import { FormattedMessage } from "react-intl";

class RegistrationForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="email" className="row">
          <Form.Label className="col-sm-4"><FormattedMessage id="email.label" defaultMessage="Email"/> *</Form.Label>
          <Form.Control className="col-sm-8" name="email" type="email" required/>
        </Form.Group>
        <Button variant="secondary" type="submit">
          <FormattedMessage id="request.registration.button" defaultMessage="Request registration"/>
        </Button>
      </Form>
    );
  }
}

export default RegistrationForm;
