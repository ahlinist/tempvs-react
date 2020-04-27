import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from '@reach/router';

import LibraryButton from '../library/LibraryButton';
import LoginRegisterButton from '../auth/LoginRegisterButton';

class HeaderLoggedOut extends Component {
  render() {
    return (
      <Container>
        <Row className="show-grid">
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
            <LoginRegisterButton />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HeaderLoggedOut;
