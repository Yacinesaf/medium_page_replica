import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Grid, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloudIcon from '@material-ui/icons/Cloud';
import BigArticleComponent from './BigArticleComponent';
import SmallArticleComponent from './SmallArticleComponent';
import { articles } from './ArticlesObject'
import { subject } from './subjectObject'
import RegularArticleComponenet from './RegularArticleComponent';
import DialogComponent from './DialogComponent'
import TechAndTopics from './TechAndTopics';
import Topics from './Topics';

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

  const [isDialogShown, setIsDialogShown] = useState(false);

  const handleClickOpen = () => {
    setIsDialogShown(true);
  };
  const handleClose = () => {
    setIsDialogShown(false);
  };

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  let mainArticle = articles[Math.floor(Math.random() * articles.length)];
  let randomSubject = subject[Math.floor(Math.random() * subject.length)];

  const randomIndexes =(n) => {
    let list =[];
    for(let i =0; i < n; i++) {
      list.push(Math.floor(Math.random() * articles.length))
    }
    return list
  }



  return (
    <div>
      <AppBar position='static' style={{ backgroundColor: 'white', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)', marginBottom : 20}} elevation={0}>
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
              <Button onClick={() => {console.log(isDialogShown); handleClickOpen()}} color='inherit' variant='outlined' style={{ color: 'rgba(2, 158, 116, 1)', textTransform: 'none' }} size='medium'>
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
              <Topics />
              <BigArticleComponent article={mainArticle} />
              <Typography variant="subtitle2" style={{ fontWeight: 550, borderBottom: '1px solid lightgrey', marginTop: 30 }}>LATEST</Typography>
              <div style={{ paddingBottom: 15 }}>
                {randomIndexes(3).map((x, i) => (
                  <RegularArticleComponenet key={i} article={articles[x]} />
                ))}
              </div>
            </Grid>
            <Grid item lg={4} xl={4} md={4} sm={12} xs={12} style={{ paddingLeft: 30 }}>
              <TechAndTopics  randomSubject={randomSubject} />
              <div style={{ paddingBottom: 10, display: smDown ? 'none' : 'unset' }}>
                {randomIndexes(5).map((x,i) => (
                  <SmallArticleComponent key={i} article={articles[x]} />
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <DialogComponent handleClose={handleClose} bool={isDialogShown} />
    </div>
  )
}

export default Medium; 
