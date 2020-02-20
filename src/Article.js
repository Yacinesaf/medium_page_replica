import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { articles } from './ArticlesObject'
import StarIcon from '@material-ui/icons/Star';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { AppBar, Typography, Toolbar, Grid, Button, Avatar, Divider, Chip } from '@material-ui/core';
import CloudIcon from '@material-ui/icons/Cloud';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useParams } from 'react-router-dom'

function Article() {
  let { title } = useParams();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  const [img, setImg] = useState('');

  fetch("https://api.unsplash.com/photos/random?client_id=uxmW_PR6Zn3N6vc5Zsc2pQJVOwzezAXoPBSOi1eXa4A").then(res => {
    res.json().then(real => {
      setImg(real.urls.regular)
    })
  })

const loremGenerator = () => {
  return fetch("https://mashape-community-skate-ipsum.p.rapidapi.com/6/1/JSON", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "mashape-community-skate-ipsum.p.rapidapi.com",
      "x-rapidapi-key": "33bfbd583amshc3ab9d939cbd064p1b78dbjsnb9b3cbe85197"
    }
  })
  .then(response => {
    return response.json().then(res =>{
      return res
    })
  })
}

const yeet = loremGenerator().then(res =>  {
  console.dir(typeof res)})

  return (
    <div>
      <AppBar position='static' style={{ backgroundColor: 'white', boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)', marginBottom: 20 }} elevation={0}>
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
                <Typography style={{ color: 'rgba(2, 158, 116, 1)', padding: '0px 10px' }}>
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
        <Grid item xs={11} sm={11} md={8} lg={6} xl={4} >
          <Typography variant={smDown ? 'h4' : 'h2'} style={{ fontWeight: 600, padding: '5px 0px' }}>
            {title}
          </Typography>
          <Typography variant={smDown ? 'subtitle2' : 'h5'} style={{ paddingBottom: 15 }}>
            {articles[7].subTitle}
          </Typography>
          <div style={{ display: smDown ? 'flex' : 'none', padding: '15px 0px 25px' }}>
            <TwitterIcon fontSize='default' />
            <FacebookIcon fontSize='default' style={{ padding: '0px 10px' }} />
            <BookmarkBorderIcon fontSize='default' />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 15 }}>

            <Avatar alt='sliker' src={articles[0].authorImgUrl} style={{ height: 50, width: 50, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }} />
            <div style={{ width: '100%', paddingLeft: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant={xsOnly ? 'subtitle2' : 'body2'} style={{ paddingBottom: 5, paddingRight: 10 }}>{articles[0].author}</Typography>
                <Button variant='outlined' size='small' color='inherit' style={{ textTransform: 'none', padding: 0 }}>Follow</Button>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexGrow: 1 }}>
                  <Typography variant={xsOnly ? 'caption' : 'body2'}>{`${articles[0].date} · ${articles[0].timeRead}`} </Typography>
                  <StarIcon style={{ fontSize: 15, color: 'grey', paddingLeft: 5, paddingTop: 2 }} />
                </div>
                <div style={{ display: smDown ? 'none' : 'flex' }}>
                  <TwitterIcon style={{ fontSize: 30 }} />
                  <FacebookIcon style={{ fontSize: 30, padding: '0px 10px' }} />
                  <BookmarkBorderIcon style={{ fontSize: 30 }} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: 350 }}></div>
          <Typography variant={smDown ? 'caption' : 'body2'} style={{ display: 'flex', justifyContent: 'center', paddingTop: smDown ? 5 : 15 }}>Photo: Tomohiro Oshumi/Getty Images</Typography>
          <Typography style={{ padding: '15px 0px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id justo nec leo finibus laoreet. Suspendisse ornare libero sed eros
            porttitor pharetra. Suspendisse potenti. Nullam fringilla elit vitae felis mollis, sed feugiat nunc cursus. Curabitur scelerisque
            volutpat fringilla. Phasellus ac metus mi. Fusce ultrices ac mauris quis pulvinar. Aenean faucibus lacinia eros, et luctus purus.
            Suspendisse hendrerit faucibus congue. Mauris malesuada ligula ut neque vehicula laoreet. Nunc a urna fermentum nulla porta egestas.
            Sed efficitur venenatis egestas. Donec quis ipsum nulla. Donec eu lectus lectus. Etiam a mi fermentum, rhoncus nunc vel, laoreet tellus.
            </Typography>

          <Typography style={{ padding: '15px 0px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id justo nec leo finibus laoreet. Suspendisse ornare libero sed eros
            porttitor pharetra. Suspendisse potenti. Nullam fringilla elit vitae felis mollis, sed feugiat nunc cursus. Curabitur scelerisque
            volutpat fringilla. Phasellus ac metus mi. Fusce ultrices ac mauris quis pulvinar. Aenean faucibus lacinia eros, et luctus purus.
            Suspendisse hendrerit faucibus congue. Mauris malesuada ligula ut neque vehicula laoreet. Nunc a urna fermentum nulla porta egestas.
            Sed efficitur venenatis egestas. Donec quis ipsum nulla. Donec eu lectus lectus. Etiam a mi fermentum, rhoncus nunc vel, laoreet tellus.
          </Typography>
          <Typography style={{ padding: '15px 0px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id justo nec leo finibus laoreet. Suspendisse ornare libero sed eros
            porttitor pharetra. Suspendisse potenti. Nullam fringilla elit vitae felis mollis, sed feugiat nunc cursus. Curabitur scelerisque
            volutpat fringilla. Phasellus ac metus mi. Fusce ultrices ac mauris quis pulvinar. Aenean faucibus lacinia eros, et luctus purus.
            Suspendisse hendrerit faucibus congue. Mauris malesuada ligula ut neque vehicula laoreet. Nunc a urna fermentum nulla porta egestas.
            Sed efficitur venenatis egestas. Donec quis ipsum nulla. Donec eu lectus lectus. Etiam a mi fermentum, rhoncus nunc vel, laoreet tellus.
          </Typography>
          <Typography style={{ padding: '15px 0px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id justo nec leo finibus laoreet. Suspendisse ornare libero sed eros
            porttitor pharetra. Suspendisse potenti. Nullam fringilla elit vitae felis mollis, sed feugiat nunc cursus. Curabitur scelerisque
            volutpat fringilla. Phasellus ac metus mi. Fusce ultrices ac mauris quis pulvinar. Aenean faucibus lacinia eros, et luctus purus.
            Suspendisse hendrerit faucibus congue. Mauris malesuada ligula ut neque vehicula laoreet. Nunc a urna fermentum nulla porta egestas.
            Sed efficitur venenatis egestas. Donec quis ipsum nulla. Donec eu lectus lectus. Etiam a mi fermentum, rhoncus nunc vel, laoreet tellus.
          </Typography>
          <Typography style={{ padding: '15px 0px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id justo nec leo finibus laoreet. Suspendisse ornare libero sed eros
            porttitor pharetra. Suspendisse potenti. Nullam fringilla elit vitae felis mollis, sed feugiat nunc cursus. Curabitur scelerisque
            volutpat fringilla. Phasellus ac metus mi. Fusce ultrices ac mauris quis pulvinar. Aenean faucibus lacinia eros, et luctus purus.
            Suspendisse hendrerit faucibus congue. Mauris malesuada ligula ut neque vehicula laoreet. Nunc a urna fermentum nulla porta egestas.
            Sed efficitur venenatis egestas. Donec quis ipsum nulla. Donec eu lectus lectus. Etiam a mi fermentum, rhoncus nunc vel, laoreet tellus.
          </Typography>
          <div style={{ display: 'flex', paddingTop: 40, flexWrap: 'wrap', }}>
            <Chip clickable style={{ borderRadius: 0, margin: 4 }} label='Parenting' />
            <Chip clickable style={{ borderRadius: 0, margin: 4 }} label='Motherboard' />
            <Chip clickable style={{ borderRadius: 0, margin: 4 }} label='Apple Watch' />
            <Chip clickable style={{ borderRadius: 0, margin: 4 }} label='Gadgets' />
            <Chip clickable style={{ borderRadius: 0, margin: 4 }} label='Digital Life' />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', paddingTop: 40 }}>
            <div style={{ display: 'flex', flexGrow: 1, alignItems: 'flex-end' }}>
              <ThumbUpIcon fontSize='large' style={{ transform: 'scaleX(-1)', marginRight: 10 }} />
              <Typography>312 Likes</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TwitterIcon style={{ fontSize: 30 }} />
              <FacebookIcon style={{ fontSize: 30 }} />
              <BookmarkBorderIcon style={{ fontSize: 30 }} />
              <MoreVertIcon style={{ transform: 'rotate(90deg)', fontSize: 30 }} />
            </div>
          </div>
          <Divider variant='fullWidth' style={{ margin: '20px 0px' }} />
          <div style={{ width: '100%', paddingLeft: 10, paddingBottom: 30 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar alt='sliker' src={articles[0].authorImgUrl} style={{ height: 100, width: 100, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }} />
              <div style={{ paddingLeft: 20, flexGrow: 1 }}>
                <Typography variant={xsOnly ? 'h6' : 'h4'} style={{ paddingBottom: 5, paddingRight: 10 }}>Written By</Typography>
                <Typography variant={xsOnly ? 'h6' : 'h4'} style={{ paddingBottom: 5, paddingRight: 10, fontWeight: 550 }}>{articles[0].author}</Typography>
              </div>
              <Button variant='outlined' size='medium' color='inherit' style={{ textTransform: 'none', padding: 2 }}>Follow</Button>
            </div>
          </div>
          <div style={{ width: '100%', paddingLeft: 10, paddingBottom: 30 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar alt='sliker' src={articles[0].authorImgUrl} style={{ height: 100, width: 100, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }} />
              <div style={{ paddingLeft: 20, flexGrow: 1 }}>
                <Typography variant={xsOnly ? 'h6' : 'h4'} style={{ paddingBottom: 5, paddingRight: 10 }}>Written By</Typography>
                <Typography variant={xsOnly ? 'h6' : 'h4'} style={{ paddingBottom: 5, paddingRight: 10, fontWeight: 550 }}>{articles[0].author}</Typography>
              </div>
              <Button variant='outlined' size='medium' color='inherit' style={{ textTransform: 'none', padding: 2 }}>Follow</Button>
            </div>
          </div>
          <Divider variant='fullWidth' style={{ margin: '20px 0px' }} />
          <Button fullWidth variant='outlined' style={{ textTransform: 'none', fontSize: 16, padding: '20px 30px', marginBottom: 20 }}>See Comments(9)</Button>
        </Grid>
      </Grid>
    </div>
  )

}

export default Article;

// <div>
// {[0,1,2,3,4,5].map((x,i) => (
//   <Typography key={i} style={{ padding: '15px 0px' }}>
//     {console.log(yeet[x])}
//   </Typography>
// ))}
// </div>