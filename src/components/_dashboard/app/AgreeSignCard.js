import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Button } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(16),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

ShowSginStatus.propTypes = {
  slogan: PropTypes.string
};

export default function ShowSginStatus({ slogan }) {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Typography variant="h3">Agree</Typography>
      </IconWrapperStyle>
      <Typography variant="h3">{slogan}</Typography>
      <Button>查看</Button>
    </RootStyle>
  );
}
