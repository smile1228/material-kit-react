import DateAdapter from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, StaticTimePicker } from '@mui/lab';
import { styled } from '@mui/system';
import { Card, TextField } from '@mui/material';

const RouterStyle = styled(Card)(({ theme }) => ({
  '& .css-eziifo': {
    backgroundColor: theme.palette.info.lighter
  }
}));
function setValue(newValue) {
  console.log('newValue', newValue);
}

export default function Clock() {
  return (
    <RouterStyle>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Card>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <StaticTimePicker
              orientation="landscape"
              openTo="seconds"
              // value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Card>
      </LocalizationProvider>
    </RouterStyle>
  );
}
