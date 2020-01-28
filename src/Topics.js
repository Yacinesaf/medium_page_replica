import React from 'react'
import { Typography, Button, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Topics() {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));


  return (
    <Grid container style={{ display: smDown ? 'unset' : 'none'}}>
      <Grid item style={{display : 'flex'}}>
        <Typography variant={xsOnly ? 'h5' : 'h4'} style={{ fontWeight: 600, flexGrow : 1 }}>
          Technology
        </Typography>
        <Button size="small" variant='outlined' style={{ textTransform: 'none' }} color='inherit'>
          Follow
        </Button>
      </Grid>
      <Grid item>
        <Typography variant='subtitle1' style={{ paddingTop: 5, color: 'grey' }}>
          The download.
        </Typography>
        <Typography style={{ paddingTop: 10, color: 'grey', paddingBottom : 40 }}>
          Follow to get great stories about Technology in your inbox and on your homepage
        </Typography>
      </Grid>
    </Grid>
  )

}

export default Topics;