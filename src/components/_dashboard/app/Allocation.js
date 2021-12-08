import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import searchFill from '@iconify/icons-eva/search-fill';
import {
  Box,
  Grid,
  Card,
  Table,
  Dialog,
  Button,
  Avatar,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  CardHeader,
  CardContent,
  OutlinedInput,
  InputAdornment
} from '@mui/material';

const MyCard = styled(Card)(() => ({
  width: '100%',
  height: '500px',
  margin: '20px 0'
}));

const OperationGrid = styled(Grid)(() => ({
  margin: '20px 0',
  '& .MuiButton-root': {
    margin: '0 40px',
    width: '100px'
  }
}));

const ContainerTable = styled(Grid)(() => ({
  overflowY: 'scroll',
  height: 384
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 140,
  height: 40,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { width: 220, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));

// props type limiting condition
Allocation.propTypes = {
  open: PropTypes.bool
};

function ProjectTable() {
  return (
    <ContainerTable>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>fffffff</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>fffffff</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>fffffff</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>fffffff</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>fffffff</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>fffffff</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>fffffff</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>fffffff</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>fffffff</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>fffffff</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>fffffff</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </ContainerTable>
  );
}

export default function Allocation({ open, selectRowData, openConer }) {
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
              <CardHeader
                style={{ paddingBottom: 10, backgroundColor: '#25bebe' }}
                avatar={<Avatar alt={selectRowData.name} src={selectRowData.avatarUrl} />}
                title={<Typography>{selectRowData.name}</Typography>}
                con
              />
            </MyCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyCard>
              <Typography>{number}</Typography>
            </MyCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MyCard>
              <CardHeader
                avatar={
                  <SearchStyle
                    placeholder="搜索项目..."
                    startAdornment={
                      <InputAdornment position="start">
                        <Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} />
                      </InputAdornment>
                    }
                  />
                }
              />
              <CardContent>
                <ProjectTable />
              </CardContent>
            </MyCard>
          </Grid>
        </Grid>
        <OperationGrid container justifyContent="center">
          <Button variant="contained">提交</Button>
          <Button variant="contained" onClick={openConer}>
            取消
          </Button>
        </OperationGrid>
      </Container>
    </Dialog>
  );
}
