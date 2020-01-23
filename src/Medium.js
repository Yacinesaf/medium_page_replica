import React from 'react';
import { AppBar, Typography, Toolbar, Grid, Button, Card } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PinterestIcon from '@material-ui/icons/Pinterest';
import BigImg from './alex-knight-5-GNa303REg-unsplash.jpg'
function Medium() {
  const space = (type, direction, value) => {
    let types = { m: 'margin', p: 'padding' }
    let directions = { l: 'Left', r: 'Right', t: 'Top', b: 'Bottom', a: '' }
    let obj = {}
    let val = value === "auto" ? 'auto' : value + 'px'

    if (!['x', 'y'].includes(direction)) {
      let key = types[type] + directions[direction]
      obj[key] = val
    }
    else if (direction === 'x') {
      obj[types[type] + 'Left'] = val
      obj[types[type] + 'Right'] = val
    }
    else if (direction === 'y') {
      obj[types[type] + 'Top'] = val
      obj[types[type] + 'Bottom'] = val
    }
    return obj
  }
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));



  return (
    <div>
      <Grid container justify='center'>
        <Grid item xs={12}>
          <AppBar position='static' style={{ backgroundColor: 'white', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)' }} elevation={0}>
            <Toolbar style={smDown ? space('p', 'x', 20) : space('p', 'x', 150)}>
              <PinterestIcon fontSize='large' style={{ display: smDown ? 'unset' : 'none', color: 'black' }} />
              <Typography style={{ color: 'black', fontWeight: 600, display: smDown ? 'none' : 'unset' }} variant='h5'>
                Medium
              </Typography>
              <Typography style={{ color: 'black', flexGrow: 1, paddingLeft: 10 }} variant='subtitle1'>
                Technology
              </Typography>
              <div style={{ display: smDown ? 'none' : 'flex' }}>
                <Typography style={{ color: 'grey' }}>
                  Become a memeber
              </Typography>
                <Typography style={Object.assign({}, { color: 'rgba(2, 158, 116, 1)' }, space('m', 'x', 15))}>
                  Sign in
              </Typography>
              </div>
              <Button color='inherit' variant='outlined' style={{ color: 'rgba(2, 158, 116, 1)', fontSize: xsOnly ? 10 : 'unset' }}>
                Get Started
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
      <Grid container justify='center'>
        <Grid item lg={8} xl={8} md={10} sm={10} xs={12} >
          <div style={{height : 400, width : 600,  backgroundImage: `url(${BigImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Medium; 