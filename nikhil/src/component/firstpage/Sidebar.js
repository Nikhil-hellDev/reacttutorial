import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    marginTop: theme.spacing(4),
   
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2), 
  },
  
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={12}>
      
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      
      <Grid container spacing={6} xs={12}>
     
            <Grid item xs={6} sm={6} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
      </Paper>
      </Grid>
      <Grid item xs={6} spacing={6} sm={6} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
      </Paper>
      </Grid>
      <Grid item xs={6} spacing={2} sm={6} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
      <Footer title="COPYRIGHTS" description="This is a authenticated website for the commerciel use since ISO[2000-2020]!" />
      </Paper>
      </Grid>
     

      </Grid>
   </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};