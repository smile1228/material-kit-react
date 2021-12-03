import React, { Component } from 'react';
import { Container, Grid } from '@mui/material';

import Page from '../components/Page';
import { AgreeSignCard, IpmpSignCard, Clock, ProfileBacklog } from '../components/_dashboard/app';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Page>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <AgreeSignCard slogan="已签到" bgc="read" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <IpmpSignCard slogan="未签到" bgc="read" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Clock />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ProfileBacklog />
            </Grid>
          </Grid>
        </Container>
      </Page>
    );
  }
}
