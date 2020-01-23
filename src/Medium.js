import React from 'react';
import { AppBar, Typography, Toolbar, Grid, Button, Card } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PinterestIcon from '@material-ui/icons/Pinterest';
import BigImg from './alex-knight-5-GNa303REg-unsplash.jpg'
import img1 from './artiom-vallat-1uBCLmu5BqA-unsplash.jpg'
import img2 from './artiom-vallat-awHbsDUY5FI-unsplash.jpg'
import img3 from './aviv-rachmadian-5fZqHF21CIw-unsplash.jpg'
import img4 from './balkouras-nicos-BMBUEXaFvGI-unsplash.jpg'
import img5 from './emmanuel-WcrqKjgMPfI-unsplash.jpg'



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
  let imagesList = [img1, img2, img3, img4, img5];
  let timeList = ['23 min read', '75 min read', '15 min read', '9 min read', '45 min read'];
  let titleList = [
    'How Mormons Built the Next Silicon Valley While No One Was Looking',
    'We Finally Figured Out Who Makes wikiHow’s Bizarre Art',
    'How Science Fiction Imagined the 2020s',
    'How to Configure Your iPhone to Work for You, Not Against You',
    'Survival of the Richest',
  ];



  return (
    <div>
      <Grid container justify='center'>
        <Grid item xs={12}>
          <AppBar position='static' style={{ backgroundColor: 'white', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)' }} elevation={0}>
            <Toolbar style={smDown ? space('p', 'x', 20) : space('p', 'x', 150)}>
              <PinterestIcon fontSize='large' style={{ display: smDown ? 'unset' : 'none', color: 'black' }} />
              <Typography style={{ color: 'black', fontWeight: 600, display: smDown ? 'none' : 'unset', paddingRight: 10 }} variant='h5'>
                Medium
              </Typography>
              <Typography style={{ color: 'black', flexGrow: 1, paddingLeft: 10, borderLeft: 'solid 1px lightgrey' }} variant='subtitle1'>
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
              <Button color='inherit' variant='outlined' style={{ color: 'rgba(2, 158, 116, 1)', textTransform: 'none' }} size='small'>
                Get Started
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={8} xl={8} md={9} sm={12} xs={12} style={{ paddingLeft: smDown ? 0 : 150, paddingTop: 60, paddingRight: 60 }}>
          <div style={{ height: xsOnly ? 300 : 450, width: '100%', backgroundImage: `url(${BigImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
        </Grid>
        <Grid item lg={4} xl={4} md={3} sm={12} xs={12} style={{ paddingLeft: 30, paddingRight: 150 }}>
          <Typography variant='h4' style={Object.assign({}, space('p', 't', 60), { fontWeight: 500 })}>
            Technology
          </Typography>
          <Typography variant='subtitle1' style={{ paddingTop: 10, color: 'grey' }}>
            The download.
          </Typography>
          <Button size="medium" variant='outlined' style={{ marginTop: 20, textTransform: 'none' }} color='inherit'>
            Follow
          </Button>
          <Typography style={{ marginTop: 25, color: 'grey' }}>
            Follow to get great stories about Technology in your inbox and on your homepage
          </Typography>
          <Typography variant="subtitle1" color='inherit' style={{ fontWeight: 600, marginTop: 40, borderBottom: '1px solid lightgrey' }}>
            RELATED TOPICS
          </Typography>
          <Typography style={{ color: 'grey', fontSize: 12, paddingBottom: 10, paddingTop: 20 }} >SOFTWARE ENGENEERING</Typography>
          <Typography style={{ color: 'grey', fontSize: 12, paddingBottom: 10 }} >PROGRAMMING</Typography>
          <Typography style={{ color: 'grey', fontSize: 12, paddingBottom: 10 }} >ARTIFICIAL INTELLIGENCE</Typography>
          <Typography style={{ color: 'grey', fontSize: 12, paddingBottom: 10 }} >CRYPTOCURRENCY</Typography>
          <Typography style={{ color: 'grey', fontSize: 12, paddingBottom: 10 }} >BIOTECH</Typography>
          <Typography variant="subtitle1" color='inherit' style={{ fontWeight: 600, marginTop: 40, borderBottom: '1px solid lightgrey' }}>
            POPULAR IN TECHNOLOGY
          </Typography>
          {imagesList.map((x, i) => (
            <div style={{ display: 'flex' }}>
              <div>
                <Typography color='inherit' style={{ paddingBottom: 10, paddingTop: 20, fontWeight: 600 }} >
                  {titleList[i]}
                </Typography>
                <Typography variant='caption' style={{ display: 'block' }}>
                  {timeList[i]}
                </Typography>
              </div>
              <div
                style={{ maxHeight: 60, minWidth: 60, maxWidth: 60, minHeight: 60, backgroundImage: `url(${x})`, backgroundSize: 'cover', backgroundPosition: 'center', marginTop: 20, marginLeft: 80 }}>
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default Medium; 