import React from 'react';
import { AppBar, Typography, Toolbar, Grid, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloudIcon from '@material-ui/icons/Cloud';

function Nav({space, randomSubject, isDialogShown, handleClickOpen}) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <AppBar position='static' style={{ backgroundColor: 'white', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)', marginBottom: 20 }} elevation={0}>
      <Grid container justify='center'>
        <Grid item xs={11} lg={10} md={11}>
          <Toolbar style={{ padding: 0 }}>
            <CloudIcon fontSize='large' style={{ display: smDown ? 'unset' : 'none', color: 'black', paddingRight: 10 }} />
            <Typography style={{ color: 'black', fontWeight: 600, display: smDown ? 'none' : 'unset', paddingRight: 10 }} variant='h5'>
              Medium
            </Typography>
            <Typography style={{ color: 'black', flexGrow: 1, paddingLeft: 10, borderLeft: 'solid 1px lightgrey' }} variant='subtitle1'>
              {randomSubject.subject}
            </Typography>
            <div style={{ display: smDown ? 'none' : 'flex' }}>
              <Typography style={{ color: 'grey' }}>
                Become a memeber
            </Typography>
              <Typography style={Object.assign({}, { color: 'rgba(2, 158, 116, 1)' }, space('m', 'x', 15))}>
                Sign in
            </Typography>
            </div>
            <Button onClick={() => { console.log(isDialogShown); handleClickOpen() }} color='inherit' variant='outlined' style={{ color: 'rgba(2, 158, 116, 1)', textTransform: 'none' }} size='medium'>
              Get Started
            </Button>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Nav;

