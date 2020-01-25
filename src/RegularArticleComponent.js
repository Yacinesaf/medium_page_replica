import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import StarIcon from '@material-ui/icons/Star';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

function RegularArticleComponenet({ article }) {

  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));


  return (
    <div>
      <Grid container key='2' style={{ paddingTop: 20 }}>
        <Grid item xs={10} sm={10} md={9} style={{ paddingRight: 40 }}>
          <Typography style={{ fontWeight: 550, fontSize: xsOnly ? 14 : 18 }}>{article.title}</Typography>
          <Typography variant='body2' style={{ color: 'grey', paddingBottom: xsOnly ? 5 : 10, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{article.subTitle}</Typography>
          <div style={{ display: xsOnly ? 'none' : 'unset' }}>
            <Typography variant={xsOnly ? 'caption' : 'body2'} style={{ paddingBottom: 5 }}>{article.author}</Typography>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', flexGrow: 1 }}>
                <Typography variant={xsOnly ? 'caption' : 'body2'}>{`${article.date} · ${article.timeRead}`} </Typography>
                <StarIcon style={{ fontSize: 15, color: 'grey', paddingLeft: 5, paddingTop: 2 }} />
              </div>
              <BookmarkBorderIcon style={{ fontSize: 20 }} />
            </div>
          </div>
        </Grid>
        <Grid item xs={2} sm={2} md={3}>
          <div
            style={{ width: xsOnly ? 56 : "100%", height: xsOnly ? 56 : '100%', backgroundImage: `url(${article.imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
        </Grid>
        <Grid item xs={12} style={{ display: xsOnly ? 'unset' : 'none' }}>
          <div>
            <Typography variant={xsOnly ? 'caption' : 'body2'} style={{ paddingBottom: 5 }}>{article.subTitle}</Typography>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', flexGrow: 1 }}>
                <Typography variant={xsOnly ? 'caption' : 'body2'}>{`${article.date} · ${article.timeRead}`} </Typography>
                <StarIcon style={{ fontSize: 15, color: 'grey', paddingLeft: 5, paddingTop: 2 }} />
              </div>
              <BookmarkBorderIcon style={{ fontSize: 20 }} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default RegularArticleComponenet;