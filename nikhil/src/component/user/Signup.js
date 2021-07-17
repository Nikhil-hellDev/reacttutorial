import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SignIn from './SignIn';
import {postData} from '../FetchServices';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignUp() {
  const classes = useStyles();

const [userName, setuserName] = React.useState('');
const [userEmail, setuserEmail] = React.useState('');
const [userGender, setuserGender] = React.useState('');
const [userMobile, setuserMobile] = React.useState('');
const [userAddress, setuserAddress] = React.useState('');
const [userPassword, setuserPassword] = React.useState('');


const addNewRecord = async()=>{
  console.log(userName);
  console.log(userEmail);
  console.log(userGender);
  console.log(userMobile);
  console.log(userAddress);
  console.log(userPassword);


  let body={
'userName':userName,
    'userEmail':userEmail,
    'userGender':userGender,
    'userMobile':userMobile,
    'userAddress':userAddress,
    'userPassword':userPassword
    
  }
  console.log('new body');
  console.log(body.userPassword);
  const result = await postData('user/checksignup',body)
  console.log(result);
if(result)
{
  alert('signup successfull ..')
  setuserName('');
  setuserEmail('');
  setuserGender('');
  setuserMobile('');
  setuserAddress('');
  setuserPassword('');
  window.location = '/Intro/user';
}
else
{
  alert('unsuccessfull ..')
}

}



  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="userName"
                variant="outlined"
                required
                fullWidth
                value={userName}
                id="userName"
                label="Full Name"
                autoFocus
                onChange= {(event)=>setuserName(event.target.value)}
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={userEmail}
                id="userEmail"
                label="Email Address"
                name="userEmail"
                autoComplete="email"
                onChange= {(event)=>setuserEmail(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="gender"
                name="userGender"
                variant="outlined"
                required
                fullWidth
                value={userGender}
                id="userGender"
                label="Gender"
                autoFocus
                onChange= {(event)=>setuserGender(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="mobileNO"
                name="userMobile"
                variant="outlined"
                required
                value={userMobile}
                fullWidth
                id="userMobile"
                label="Mobile No."
                autoFocus
                onChange= {(event)=>setuserMobile(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="address"
                name="userAddress"
                variant="outlined"
                required
                value={userAddress}
                fullWidth
                id="userAddress"
                label="Address"
                autoFocus
                onChange= {(event)=>setuserAddress(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={userPassword}
                name="userPassword"
                label="Password"
                type="password"
                id="userPassword"
                autoComplete="current-password"
                onChange= {(event)=>setuserPassword(event.target.value)}
              />
            </Grid>
            
          </Grid>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={addNewRecord}
          >
            Sign Up
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/Intro/user" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>

        </form>
      </div>
     
    </Container>
  );
}