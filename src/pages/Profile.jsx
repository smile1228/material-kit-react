import React, { Component } from 'react';
import { Card } from '@mui/material';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card>我是Profile</Card>
      </div>
    );
  }
}
