import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Button } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.info.dark,
  backgroundColor: theme.palette.info.lighter,
  button: {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    color: theme.palette.info.dark
  }
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
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
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
        <Typography variant="h3">IPMP</Typography>
      </IconWrapperStyle>
      <Typography variant="h3">{slogan}</Typography>
      <Button>签到</Button>
    </RootStyle>
  );
}
