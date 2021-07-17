import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Album from './Album';
import Link from '@material-ui/core/Link';
import Main from './Main';
import Sidebar from './Sidebar';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
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
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

}));

const sections = [
  { title: 'MEN', url: '#' },
  { title: 'WOMEN', url: '#' },
  { title: 'KIDS', url: '#' },
  { title: 'HOME&LIVING', url: '#' },
  { title: 'ESSENTIALS', url: '#' },
  { title: 'HOME APPLIANCES', url: '#' },
  { title: 'ALL OFFERS', url: '#' },
  { title: 'MOBILES', url: '#' },
  
];

const mainFeaturedPost = {
  title: 'TOP BRANDS ARE HERE FOR YOU',
  description:
    "For get high brand dresses and more attractive offers to click know more ..",
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/matches-final-1548424613.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*',
  imgText: 'main image description',
  linkText: 'Know More.…',
};

const featuredPosts = [
  {
    title: 'TOP FASHION SALE',
  
    description:
      'This is a offer for every one to get discount and heavy cashback benifite .',
    image: 'https://assets.indiadesire.com/images/myntra%20epic%20fashion%20sale.jpg',
    imageText: 'Image Text',
    linkText: 'Know More.…',
  },
  {
    title: 'TOP MOBILE SALE',
    
    description:
      'Here YOU get top mobile brands sale in reliable prizes. and 1 year warranty on all products.',
    image: 'https://www.gizbot.com/img/600x40/img/2017/12/christmasandnewyearsaleoffersontopsmartphonesonamazon-23-1514012527.jpg',
    imageText: 'Image Text',
    linkText: 'Know More.…',
  },
];



const sidebar = {
  title: 'About Us',
  description:
    'Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser. Consumers find a product of interest by visiting the website of the retailer directly or by searching among alternative vendors using a shopping search engine, which displays the same product  availability and pricing at different e-retailers. As of 2020, customers can shop online using a range of different computers and devices, including desktop computers, laptops, tablet computers, smartphones, and smart speakers.     An online shop evokes the physical analogy of buying products or services at a regular "bricks-and-mortar" retailer or shopping center; the process is called business-to-consumer (B2C) online shopping. When an online store is set up to enable businesses to buy from another businesses, the process is called business-to-business (B2B) online shopping. A typical online store enables the customer to browse the firms range of products and services, view photos or images of the products, along with information about the product specifications, features and prices.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'April 2020', url: '#' },
    { title: 'May 2020', url: '#' },
    { title: 'Jun 2020', url: '#' },
     ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="FIZ ROBOTIC SOLUTIONS" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          
          <Album post={Album} />
          
          <Grid container spacing={5} className={classes.mainGrid}>
          
             <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}