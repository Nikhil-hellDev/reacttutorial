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
import {black} from '@material-ui/core/colors';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  Link: {
color:'black',
fontSize:'20px',
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [userEmail, setuserEmail] = React.useState('');
  const [userPassword, setuserPassword] = React.useState('');

  const checkRecord = async()=>{
    
    console.log(userEmail);
    console.log(userPassword);
    
    let body={

      'userEmail':userEmail,
      'userPassword':userPassword
      
    }
    console.log('new body');
    console.log(body.userEmail);
    const result = await postData('user/checkadminlogin',body)
    console.log(result);
  if(result)
  {
    alert('signin successfull ..')
    setuserEmail('');
    setuserPassword('');
    window.location = '/Intro/user/welcome';
  }
  else
  {
    alert('unsuccessfull ..')
  }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={userEmail}
            label="Email Address"
            name="userEmail"
            autoComplete="email"
            onChange= {(event)=>setuserEmail(event.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userPassword"
            value={userPassword}
            label="Password"
            type="password"
            id="userPassword"
            autoComplete="current-password"
            onChange= {(event)=>setuserPassword(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={checkRecord}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Intro/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
       
      </Box>
    </Container>
  );
}