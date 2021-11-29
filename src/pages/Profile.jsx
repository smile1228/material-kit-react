import React, { Component } from 'react';
import { Container, Grid } from '@mui/material';
import Page from '../components/Page';

import { AgreeSignCard, IpmpSignCard } from '../components/_dashboard/app';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Page>
        <Container maxWidth="xl">
          <Grid container spacing={9}>
            <Grid item xs={12} sm={6} md={3}>
              <AgreeSignCard slogan="已签到" bgc="read" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <IpmpSignCard slogan="未签到" bgc="read" />
            </Grid>
          </Grid>
        </Container>
      </Page>
    );
  }
}
