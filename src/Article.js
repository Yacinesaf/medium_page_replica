import React, { useState } from 'react';
import { Typography, Grid, Avatar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Nav from './Nav';
import { articles } from './ArticlesObject'
import StarIcon from '@material-ui/icons/Star';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { subject } from './subjectObject'

function Article() {
  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <div>
      <Grid container justify='center'>
        <Grid item xs={4}>
          <Typography>
            {articles[0].title}
          </Typography>
          <Typography>
            {articles[0].subtitle}
          </Typography>
          <div style={{ display: 'flex', justifyContent : 'center' }}>
            <Avatar alt='sliker' src={articles[0].authorImgUrl} style={{ height: 50, width: 50, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }} />
            <div style={{width : '100%', paddingLeft : 10}}>
              <Typography variant={xsOnly ? 'caption' : 'body2'} style={{ paddingBottom: 5 }}>{articles[0].author}</Typography>
              <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexGrow: 1 }}>
                  <Typography variant={xsOnly ? 'caption' : 'body2'}>{`${articles[0].date} · ${articles[0].timeRead}`} </Typography>
                  <StarIcon style={{ fontSize: 15, color: 'grey', paddingLeft: 5, paddingTop: 2 }} />
                </div>
                <TwitterIcon style={{ fontSize: 20 }} />
                <FacebookIcon style={{ fontSize: 20 }} />
                <BookmarkBorderIcon style={{ fontSize: 20 }} />
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${articles[0].imgUrl})`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: 350 }}></div>
          <Typography style={{ textAlign: 'center' }}>Photo: Tomohiro Oshumi/Getty Images</Typography>
          <RemoveCircleIcon style={{ transform: 'rotate(90deg)' }} />
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id justo nec leo finibus laoreet. Suspendisse ornare libero sed eros
            porttitor pharetra. Suspendisse potenti. Nullam fringilla elit vitae felis mollis, sed feugiat nunc cursus. Curabitur scelerisque
            volutpat fringilla. Phasellus ac metus mi. Fusce ultrices ac mauris quis pulvinar. Aenean faucibus lacinia eros, et luctus purus.
            Suspendisse hendrerit faucibus congue. Mauris malesuada ligula ut neque vehicula laoreet. Nunc a urna fermentum nulla porta egestas.
            Sed efficitur venenatis egestas. Donec quis ipsum nulla. Donec eu lectus lectus. Etiam a mi fermentum, rhoncus nunc vel, laoreet tellus.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id justo nec leo finibus laoreet. Suspendisse ornare libero sed eros
            porttitor pharetra. Suspendisse potenti. Nullam fringilla elit vitae felis mollis, sed feugiat nunc cursus. Curabitur scelerisque
            volutpat fringilla. Phasellus ac metus mi. Fusce ultrices ac mauris quis pulvinar. Aenean faucibus lacinia eros, et luctus purus.
            Suspendisse hendrerit faucibus congue. Mauris malesuada ligula ut neque vehicula laoreet. Nunc a urna fermentum nulla porta egestas.
            Sed efficitur venenatis egestas. Donec quis ipsum nulla. Donec eu lectus lectus. Etiam a mi fermentum, rhoncus nunc vel, laoreet tellus.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id justo nec leo finibus laoreet. Suspendisse ornare libero sed eros
            porttitor pharetra. Suspendisse potenti. Nullam fringilla elit vitae felis mollis, sed feugiat nunc cursus. Curabitur scelerisque
            volutpat fringilla. Phasellus ac metus mi. Fusce ultrices ac mauris quis pulvinar. Aenean faucibus lacinia eros, et luctus purus.
            Suspendisse hendrerit faucibus congue. Mauris malesuada ligula ut neque vehicula laoreet. Nunc a urna fermentum nulla porta egestas.
            Sed efficitur venenatis egestas. Donec quis ipsum nulla. Donec eu lectus lectus. Etiam a mi fermentum, rhoncus nunc vel, laoreet tellus.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id justo nec leo finibus laoreet. Suspendisse ornare libero sed eros
            porttitor pharetra. Suspendisse potenti. Nullam fringilla elit vitae felis mollis, sed feugiat nunc cursus. Curabitur scelerisque
            volutpat fringilla. Phasellus ac metus mi. Fusce ultrices ac mauris quis pulvinar. Aenean faucibus lacinia eros, et luctus purus.
            Suspendisse hendrerit faucibus congue. Mauris malesuada ligula ut neque vehicula laoreet. Nunc a urna fermentum nulla porta egestas.
            Sed efficitur venenatis egestas. Donec quis ipsum nulla. Donec eu lectus lectus. Etiam a mi fermentum, rhoncus nunc vel, laoreet tellus.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id justo nec leo finibus laoreet. Suspendisse ornare libero sed eros
            porttitor pharetra. Suspendisse potenti. Nullam fringilla elit vitae felis mollis, sed feugiat nunc cursus. Curabitur scelerisque
            volutpat fringilla. Phasellus ac metus mi. Fusce ultrices ac mauris quis pulvinar. Aenean faucibus lacinia eros, et luctus purus.
            Suspendisse hendrerit faucibus congue. Mauris malesuada ligula ut neque vehicula laoreet. Nunc a urna fermentum nulla porta egestas.
            Sed efficitur venenatis egestas. Donec quis ipsum nulla. Donec eu lectus lectus. Etiam a mi fermentum, rhoncus nunc vel, laoreet tellus.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )

}

export default Article;

