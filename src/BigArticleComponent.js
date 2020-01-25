import React from 'react'
import { Typography, Avatar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import StarIcon from '@material-ui/icons/Star';


function BigArticleComponent({article}) {
  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));


  return (
    <div>
      <div style={{ height: xsOnly ? 300 : 400, width: '100%', backgroundImage: `url(${article.imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
      <Typography variant='h3' style={{ paddingTop: 15, fontWeight: 600 }}>
        {article.title}
      </Typography>
      <Typography variant='body1' style={{ color: 'grey', paddingTop: 15 }}>
        {article.subTitle}
      </Typography>
      <div style={{ display: 'flex', marginTop: 20 }}>
        <Avatar alt='sliker' src={article.authorImgUrl} style={{ height: 50, width: 50, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }} />
        <div style={{ paddingLeft: 10 }}>
          <Typography variant='body1'>{article.author}</Typography>
          <div style={{ display: 'flex' }}>
            <Typography variant='body2' style={{ color: 'grey' }}>{`${article.date} · ${article.timeRead}`} </Typography>
            <StarIcon style={{ fontSize: 15, color: 'grey', paddingLeft: 5, paddingTop: 2 }} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default BigArticleComponent;