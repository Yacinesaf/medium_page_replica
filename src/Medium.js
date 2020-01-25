import React from 'react';
import { AppBar, Typography, Toolbar, Grid, Button, Card, Avatar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloudIcon from '@material-ui/icons/Cloud';
import BigImg from './alex-knight-5-GNa303REg-unsplash.jpg'
import img1 from './artiom-vallat-1uBCLmu5BqA-unsplash.jpg'
import img2 from './artiom-vallat-awHbsDUY5FI-unsplash.jpg'
import img3 from './aviv-rachmadian-5fZqHF21CIw-unsplash.jpg'
import img4 from './balkouras-nicos-BMBUEXaFvGI-unsplash.jpg'
import img5 from './emmanuel-WcrqKjgMPfI-unsplash.jpg'
import sliker from './sliker-main.jpg'
import StarIcon from '@material-ui/icons/Star';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

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
  let bigTitles = [
    'Software Ate the World. Now It’s Design’s Turn',
    'Do yourself a favor in 2020: Mute Elon Musk',
    'What Shoshana Zuboff & Mark Zuckerberg both get wrong about privacy rights, and how you can fix it.'
  ];
  let subtitle = [
    'We are entering a Golden Age of product design, in which even niche enterprise products are finally becoming sensible, easy to use, and…',
    'Bad tweets from famous people aren’t worth your time.',
    'Ten practical perspectives that will help you understand how people do (and will) balance privacy in their daily lives.'
  ];
  let captions = [
    'Fast Company in Fast Company',
    'Mashable',
    'Jason T. Voiovich'
  ];
  let dateTime = [
    'Jan 23 · 4 min read',
    'Jan 3 · 10 min read',
    'Jan 13 · 21 min read'
  ];



  return (
    <div>

      <AppBar position='static' style={{ backgroundColor: 'white', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)' }} elevation={0}>
        <Grid container justify='center'>
          <Grid item xs={11} lg={10} md={11}>
            <Toolbar style={{ padding: 0 }}>
              <CloudIcon fontSize='large' style={{ display: smDown ? 'unset' : 'none', color: 'black', paddingRight: 10 }} />
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
              <Button color='inherit' variant='outlined' style={{ color: 'rgba(2, 158, 116, 1)', textTransform: 'none' }} size='medium'>
                Get Started
            </Button>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>


      <Grid container justify='center'>
        <Grid className="mainGrid" item xl={10} lg={10} md={11} sm={12} xs={12} style={{ paddingTop: xsOnly ? 0 : 40 }} >
          <Grid container justify='center'>
            <Grid item md={8} sm={11} xs={11} style={{ paddingRight: smDown ? 0 : 40 }}>
              <div style={{ height: xsOnly ? 300 : 400, width: '100%', backgroundImage: `url(${BigImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
              <Typography variant='h3' style={{ paddingTop: 15, fontWeight: 600 }}>
                The Future Doesn't Last
          </Typography>
              <Typography variant='body1' style={{ color: 'grey', paddingTop: 15 }}>
                A controversy around old Sonos devices is a reminder that software updates can be a death sentence
          </Typography>
              <div style={{ display: 'flex', marginTop: 20 }}>
                <Avatar alt='sliker' src={sliker} style={{ height: 50, width: 50, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }} />
                <div style={{ paddingLeft: 10 }}>
                  <Typography variant='body1'>Mohammed Jihad Sliker</Typography>
                  <div style={{ display: 'flex' }}>
                    <Typography variant='body2' style={{ color: 'grey' }}>Jan 23 · 3min read </Typography>
                    <StarIcon style={{ fontSize: 15, color: 'grey', paddingLeft: 5, paddingTop: 2 }} />
                  </div>
                </div>
              </div>
              <Typography variant="subtitle2" style={{ fontWeight: 550, borderBottom: '1px solid lightgrey', marginTop: 30 }}>LATEST</Typography>
              <div style={{ paddingBottom: 15 }}>
                {bigTitles.map((x, i) => (
                  <Grid container key={i} style={{ paddingTop: 20 }}>
                    <Grid item xs={10} sm={10} md={9} style={{ paddingRight: 40 }}>
                      <Typography style={{ fontWeight: 550, fontSize: xsOnly ? 14 : 18 }}>{x}</Typography>
                      <Typography variant='body2' style={{ color: 'grey', paddingBottom: xsOnly ? 5 : 10, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{subtitle[i]}</Typography>
                      <div style={{ display: xsOnly ? 'none' : 'unset' }}>
                        <Typography variant={xsOnly ? 'caption' : 'body2'} style={{ paddingBottom: 5 }}>{captions[i]}</Typography>
                        <div style={{ display: 'flex' }}>
                          <div style={{ display: 'flex', flexGrow: 1 }}>
                            <Typography variant={xsOnly ? 'caption' : 'body2'}>{dateTime[i]} </Typography>
                            <StarIcon style={{ fontSize: 15, color: 'grey', paddingLeft: 5, paddingTop: 2 }} />
                          </div>
                          <BookmarkBorderIcon style={{fontSize: 20 }} />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={3}>
                      <div
                        style={{ width: xsOnly ? 56 : "100%", height: xsOnly ? 56 : '100%', backgroundImage: `url(${imagesList[i]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                      </div>
                    </Grid>
                    <Grid item xs={12} style={{ display: xsOnly ? 'unset' : 'none' }}>
                      <div>
                        <Typography variant={xsOnly ? 'caption' : 'body2'} style={{ paddingBottom: 5 }}>{captions[i]}</Typography>
                        <div style={{ display: 'flex' }}>
                          <div style={{ display: 'flex', flexGrow: 1 }}>
                            <Typography variant={xsOnly ? 'caption' : 'body2'}>{dateTime[i]} </Typography>
                            <StarIcon style={{ fontSize: 15, color: 'grey', paddingLeft: 5, paddingTop: 2 }} />
                          </div>
                          <BookmarkBorderIcon style={{fontSize: 20 }} />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                ))}
              </div>
            </Grid>
            <Grid item lg={4} xl={4} md={4} sm={12} xs={12} style={{ paddingLeft: 30 }}>
              <Typography variant='h4' style={{ fontWeight: 500 }}>
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
              <div style={{ paddingBottom: 10, display: smDown ? 'none' : 'unset' }}>
                {imagesList.map((x, i) => (
                  <Grid key={i} container style={{ paddingTop: 20 }}>
                    <Grid item sm={9} style={{ paddingRight: 10 }}>
                      <Typography color='inherit' style={{ fontWeight: 600 }} >
                        {titleList[i]}
                      </Typography>
                      <Typography variant='caption'>
                        {timeList[i]}
                      </Typography>
                    </Grid>
                    <Grid item sm={3} style={{ paddingLeft: 'calc(25% - 60px)' }}>
                      <div
                        style={{ width: 60, height: 60, backgroundImage: `url(${x})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                      </div>
                    </Grid>
                  </Grid>))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Medium; 