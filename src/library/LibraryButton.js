import React, { Component } from 'react';

import { FaBook } from 'react-icons/fa';

import Button from 'react-bootstrap/Button';

class LibraryButton extends Component {
  render() {
    return (
      <Button className="float-sm-right" variant="default">
        <FaBook/>
      </Button>
    );
  }
}

export default LibraryButton;
