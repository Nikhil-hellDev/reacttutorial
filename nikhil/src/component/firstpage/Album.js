import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '99.25%', // 16:9
    marginTop: theme.spacing(3),
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  Typography: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3), 
  },
  
}));

const cards = [1];


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          
        <Typography gutterBottom variant="h5" component="h1" > 
                    Leading Brands OF Clothes
                  </Typography>
                  
          <Grid container spacing={4} xs={12}>
            {cards.map((card) => (
              <Grid item key={card} xs={6} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                  style=""
                    className={classes.cardMedia}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuFUuGMLsmn2gE9OD4mEQWDCimXKx1HQVV1I1mnLFrUfJNEtzxORno9QMZAOZoMMzQh6s0FUQ&usqp=CAc"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      LIBAS
                    </Typography>
                    <Typography>
                      20% off Seasion sale.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    </CardActions>
                </Card>
              </Grid>
            ))}
        


        
          {cards.map((card) => (
            <Grid item key={card} xs={6} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/6/22/c68dc840-343f-4996-8f44-fefbf1d43d7e1592765512400-sass.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    SASSAFARS
                  </Typography>
                  <Typography>
                    50-70% off Seasion sale.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  </CardActions>
              </Card>
            </Grid>
          ))}


          {cards.map((card) => (
            <Grid item key={card} xs={6} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/11/e6e0b149-ba12-4903-bdb1-3b05a81b2ce91594477963853-flying-machine.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    FLYING MACHINE
                  </Typography>
                  <Typography>
                    30% off .
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  </CardActions>
              </Card>
            </Grid>
          ))}

          {cards.map((card) => (
            <Grid item key={card} xs={6} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/3f43f095-05af-4aa9-b8ea-630c70cb41111594203792451-desktop-hp_24_04-20.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    LIVES
                  </Typography>
                  <Typography>
                    10% off end sale.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  </CardActions>
              </Card>
            </Grid>
          ))}
          </Grid>

          <Typography gutterBottom variant="h5" component="h1" style={{ marginTop:'10px'}} >
                    Leading Brands OF MOBILE
                  </Typography>
        <Grid container spacing={4} xs={12}>
          {cards.map((card) => (
            <Grid item key={card} xs={6} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="data:image/jpeg;base64,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"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    IPHONE
                  </Typography>
                  <Typography>
                    20% off Seasion sale.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  </CardActions>
              </Card>
            </Grid>
          ))}
          {cards.map((card) => (
            <Grid item key={card} xs={6} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://lh3.googleusercontent.com/proxy/zBlo1FWpTD3SZ8TDALHbm9vadqSC-ug5CVZIBox2LWTmOsAqa9uqgRlhmu45tB5x7X9vTGKnRM81C2qu-f_AKB46pGzCCTBl2St1Bv0pExpMmDvBM8u4Sim2Z-CDEQFV4T1ANw"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    MICROMAX
                  </Typography>
                  <Typography>
                    20-40% off 
                                    </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  </CardActions>
              </Card>
            </Grid>
          ))}
          {cards.map((card) => (
            <Grid item key={card} xs={6} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://cdn.mos.cms.futurecdn.net/KwpxMD6YS7PDFQkTBdtTCE-768-80.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    ONE PLUS
                  </Typography>
                  <Typography>
                    60% off Seasion sale.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  </CardActions>
              </Card>
            </Grid>
          ))}
          {cards.map((card) => (
            <Grid item key={card} xs={6} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="data:image/jpeg;base64,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"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    REDMI
                  </Typography>
                  <Typography>
                    30% off .
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  </CardActions>
              </Card>
            </Grid>
          ))}


        </Grid>

          </Container>
      </main>

    </React.Fragment>
  );
}