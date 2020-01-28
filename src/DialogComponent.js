import React from 'react'
import { Typography, Grid, Dialog, IconButton, Button, Card } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import CloseIcon from '@material-ui/icons/Close';
import rightImage from './images/1_lhbp8cxKdkDB-MgmwIPE5w.png'
import leftImage from './images/1_MQH4A5bsyRz4AWh5V4IfvQ.png'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function DialogComponent({ handleClose, bool }) {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Dialog onClose={handleClose} open={bool} onBackdropClick={handleClose} maxWidth='md' >
        <Card style={{ background: 'linear-gradient(to right, #ece9e6, #ffffff)', height: smDown ? 'unset' : 600 }}>
          <Grid container justify='center'>
          <div style={{position: "absolute", paddingLeft : 'calc(100% - 48px)' }}>
                <IconButton aria-label="close" onClick={handleClose} >
                  <CloseIcon />
                </IconButton>
              </div>
            <Grid item md={3} style={{ display: smDown ? 'none' : 'unset' }}>
              <div style={{ backgroundImage: `url(${leftImage})`, backgroundPosition: 'center', width: '100%', height: '100%', backgroundSize: 'cover' }}>
              </div>
            </Grid>
            <Grid item xs={11} sm={6} md={6} lg={6} style={{ paddingTop: smDown ? 40 : 80 }}>

              <Typography variant='h4' style={{ textAlign: "center", paddingBottom: 5, fontWeight: 500 }}>
                Join Medium.
              </Typography>
              <Typography variant='body2' style={{ textAlign: "center", color: 'grey', paddingBottom: 25 }}>
                Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.
              </Typography>
              <Grid container justify='center' style={{ paddingBottom: 30 }}>
                <Grid item xs={11} lg={6}>
                  <Button fullWidth variant='outlined' startIcon={<GitHubIcon />} style={{ textTransform: 'none', marginBottom: 10 }}>
                    Sign up whith GitHub
                </Button>
                  <Button fullWidth variant='outlined' startIcon={<FacebookIcon color='primary' />} style={{ textTransform: 'none' }}>
                    Sign up with Facebook
                </Button>
                </Grid>
              </Grid>
              <Typography style={{ textAlign: "center", paddingBottom: smDown ? 10 : 30 }}>Sign up with email</Typography>
              <div style={{ display: 'flex', textAlign: "center", justifyContent: 'center', paddingBottom: smDown ? 20 : 80 }}>
                <Typography variant={smDown ? 'body2' : 'body1'} style={{ fontWeight: 500, paddingRight: 2 }}>
                  Already have an account?
                </Typography>
                <Typography variant={smDown ? 'body2' : 'body1'} style={{ fontWeight: 500, color: 'rgba(2, 158, 116, 1)' }}>
                  Sign in
                </Typography>
              </div>
              <Typography variant={smDown ? 'body2' : 'body1'} style={{ textAlign: "center", color: 'grey', paddingBottom: 40 }}>
                To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s Terms of Service & Privacy Policy.
              </Typography>
            </Grid>
            <Grid item md={3} style={{ display: smDown ? 'none' : 'unset' }}>
              <div style={{ backgroundImage: `url(${rightImage})`, backgroundPosition: 'center', width: '100%', height: '100%', backgroundSize: 'cover' }}>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Dialog>

    </div>
  )
}
export default DialogComponent;