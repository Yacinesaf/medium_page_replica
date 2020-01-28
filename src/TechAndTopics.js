import React from 'react'
import { Typography, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function TechAndTopics({ randomSubject }) {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ display: smDown ? 'none' : 'unset' }}>
      <Typography variant='h4' style={{ fontWeight: 500 }}>
        {randomSubject.subject}
      </Typography>
      <Typography variant='subtitle1' style={{ paddingTop: 10, color: 'grey' }}>
        The download.
      </Typography>
      <Button size="medium" variant='outlined' style={{ marginTop: 20, textTransform: 'none' }} color='inherit'>
        Follow
      </Button>
      <Typography style={{ marginTop: 25, color: 'grey' }}>
        {`Follow to get great stories about ${randomSubject.subject} in your inbox and on your homepage `}
      </Typography>
      <Typography variant="subtitle1" color='inherit' style={{ fontWeight: 600, marginTop: 40, borderBottom: '1px solid lightgrey' }}>
        RELATED TOPICS
      </Typography>
      <div style={{ paddingTop: 20 }}>
        {randomSubject.topics.map((x, i) => (
          <Typography key={i} style={{ color: 'grey', fontSize: 12, paddingBottom: 10 }} >{x}</Typography>
        ))}
        <Typography variant="subtitle1" color='inherit' style={{ fontWeight: 600, marginTop: 40, borderBottom: '1px solid lightgrey' }}>
          {'POPULAR IN ' + randomSubject.subject.toUpperCase()}
      </Typography>
      </div>
    </div>
  )

}

export default TechAndTopics;