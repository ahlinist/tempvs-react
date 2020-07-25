import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap'

import { doFetch } from "../util/Fetcher.js";
import ModalImage from "../component/ModalImage";

class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.fetchProfile();
  }

  fetchAvatar(profileId) {
    const url = `/api/image/image/profile/${profileId}`;
    const actions = {
      200: avatars => this.renderAvatar(avatars[0])
    };

    doFetch(url, "GET", null, actions);
  }

  fetchProfile(profileId) {
    const actions = {
      200: profile => this.renderProfile(profile)
    };

    doFetch("/api/profile/profile", "GET", null, actions);
  }

  renderProfile(profile) {
    this.setState({
      firstName: profile.firstName,
      lastName: profile.lastName
    });
    this.fetchAvatar(profile.id)
  }

  renderAvatar(avatar) {
    this.setState({
      avatarImage: avatar.content,
      avatarInfo: avatar.imageInfo
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={4}>
            <ModalImage src={this.state.avatarImage} alt={this.state.avatarInfo} />
          </Col>
          <Col sm={4}>
            First name: {this.state.firstName} <br/>
            Last name: {this.state.lastName} <br/>
          </Col>
          <Col sm={4}>
            Club profiles: <br/>
            TBD
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfilePage;
