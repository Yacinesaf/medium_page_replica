import React from 'react'
import { Typography, Grid } from '@material-ui/core';

function SmallArticleComponent({ article }) {

  return (
    <div>
      <Grid key='1' container style={{ paddingTop: 20 }}>
        <Grid item sm={9} style={{ paddingRight: 10 }}>
          <Typography color='inherit' style={{ fontWeight: 600 }} >
            {article.title}
          </Typography>
          <Typography variant='caption'>
            {article.timeRead}
          </Typography>
        </Grid>
        <Grid item sm={3} style={{ paddingLeft: 'calc(25% - 60px)' }}>
          <div
            style={{ width: 60, height: 60, backgroundImage: `url(${article.imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
        </Grid>
      </Grid>
    </div >

  )
}

export default SmallArticleComponent;