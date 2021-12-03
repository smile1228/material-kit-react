import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Container, Card, Button, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const MyCard = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '200px',
  margin: '20px 0',
  backgroundColor: theme.palette.success.lighter
}));

const OperationGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  '& .MuiButton-root':{
    width: '100px'
  }
}));

// props type limiting condition
Allocation.propTypes = {
  open: PropTypes.bool
};

export default function Allocation({ open }) {
  const [number, serNumber] = useState(0);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');

  const count = (function () {
    return number;
  })();

  const click = () => {
    serNumber((n) => n + 1);
  };

  return (
    <Dialog open={open} fullWidth={fullWidth} maxWidth={maxWidth}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <MyCard>
              <Typography>{number}</Typography>
            </MyCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyCard>
              <Typography>{number}</Typography>
            </MyCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyCard>
              <Typography>{number}</Typography>
            </MyCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyCard>
              <Typography>{number}</Typography>
            </MyCard>
          </Grid>
          <OperationGrid alignItems="center" item xs={12}>
            <Button>提交</Button>
            <Button>取消</Button>
          </OperationGrid>
        </Grid>
      </Container>
    </Dialog>
  );
}
