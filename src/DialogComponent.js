import React, { useState } from 'react'
import { Typography, Grid, Dialog, IconButton, DialogContent, Button, DialogTitle } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import img from './shapelined-_JBKdviweXI-unsplash.jpg'
import CloseIcon from '@material-ui/icons/Close';


function DialogComponent({ handleClose, bool }) {

  // const [isDialogShown, setIsDialogShown] = useState(false);

  return (
    <div>

      <Dialog onClose={handleClose} open={bool}>
        <Grid container justify='center' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <DialogTitle>
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h3'>
              Join Medium.
              </Typography>
            <Typography variant='body2'>
              Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.
              </Typography>
            <Button variant='outlined' startIcon={<GitHubIcon />} style={{ textTransform: 'none' }}>
              Sign up whith GitHub
              </Button>
            <Button variant='outlined' startIcon={<FacebookIcon color='primary' />} style={{ textTransform: 'none' }}>
              Sign up with Facebook
              </Button>
            <Typography>Sign up with email</Typography>
            <div style={{ display: 'flex' }}>
              <Typography>
                Already have an account?
                </Typography>
              <Typography>
                Sign in
                </Typography>
            </div>
            <Typography>
              To make Medium work, we log user data and share it with service providers. Click “Sign Up” above to accept Medium’s Terms of Service & Privacy Policy.
              </Typography>
          </Grid>
        </Grid>
      </Dialog>

    </div>
  )
}
export default DialogComponent;