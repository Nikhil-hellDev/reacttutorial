import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import {postDataAndImage} from './FetchServices';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Avatar from '@material-ui/core/Avatar'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {green,blue,orange} from '@material-ui/core/colors';


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

const theme = createMuiTheme({
    palette: {
      primary: {
        main:blue[500]
      },
      secondary: {
        main:orange[500]
      },
      type:"light"
    },
    status: {
      danger: 'orange',
    },
  
  });
  
  const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    //flexGrow: 1,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      marginBottom: theme.spacing(8),
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  paper:{padding:'30px',marginTop:'10px'},
    textField: {
      marginTop: theme.spacing(8),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        padding: theme.spacing(0),
      },
      dense: {
          marginTop: theme.spacing(2),
        },
        button: {
          marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        background : '#3f51b5',
        width:'300px'
        },
        button1: {
          marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(3),
        background : '#3f51b5',
        },
        input:{
          display:'none',
          marginTop:theme.spacing(1)
        },
        rightIcon: {
          marginLeft: theme.spacing(1),
        },
        bigAvatar: {
          margin: 10,
          width: 60,
          height: 60,
        },
            
        
          child:{
              padding: 4,
          },
          formControl: {
            marginRight: theme.spacing(1),
          margin: theme.spacing(1),
          minWidth: 155,
          minHeight:20
        },
}));

export default function AddCategory() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  const [categoryName,setcategoryName]=React.useState('')
  const[categoryDetails,setcategoryDetails]=React.useState('')
  const[categoryOffer,setcategoryOffer]=React.useState('')
   const [categoryImage,setcategoryImage]=React.useState({icon:'',file:''})
  const[Message,setMessage]=React.useState('')
  
  const addNewRecord=async()=>{
      let formData=new FormData()
      formData.append('categoryName',categoryName)
      formData.append('categoryDetails',categoryDetails)
      formData.append('categoryOffer',categoryOffer)
      formData.append('categoryImage',categoryImage.file)
      const config={headers:{'content-type':'multipart/form-data'}}
      const result=await postDataAndImage('admin/addnewCategory',formData,config)
      if(result)
      {
       setMessage('Record Submitted...')
       setcategoryName('')
       setcategoryDetails('')
       setcategoryOffer('')
       setcategoryImage('')
       setcategoryImage({icon:'',file:''})
        }
      else
      {setMessage("Fail to Submit Record..")}
      }
       const clearMessage=async()=>{
          setMessage('')
      }



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Add Category Details
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >

    
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <ThemeProvider theme={theme}>

        <Container maxWidth='xs' maxheight='xs'>
        <Paper className={classes.paper}>
        <Typography> <center><h2>Category Details</h2></center></Typography>
        <Grid container spacing={3}>
        
        <Grid xs={12}>
            <TextField
            id="outlined-dense"
            label="Category Name"
            className={clsx(classes.TextField,classes.dense)}
            margin="dense"
            value={categoryName}
            variant="outlined"
            fullWidth
            onClick={clearMessage}
            onChange={(event)=>setcategoryName(event.target.value)}
            />
            </Grid>
<Grid xs={12}>
<TextField
id="outlined-dense"
label="Category Details"
className={clsx(classes.TextField,classes.dense)}
margin="dense"
value={categoryDetails}
variant="outlined"
fullWidth
onClick={clearMessage}
onChange={(event)=>setcategoryDetails(event.target.value)}
/>
</Grid>


<Grid xs={12}>
<TextField
id="outlined-dense"
label="Category Offer"
className={clsx(classes.TextField,classes.dense)}
margin="dense"
value={categoryOffer}
variant="outlined"
fullWidth
onClick={clearMessage}
onChange={(event)=>setcategoryOffer(event.target.value)}
/>
</Grid>


<Grid container  xs={12}>
<Grid item xs={8}>
<input
accept='images/*'
className={classes.input}
id="contained-button-file"
multiple
type='file'
onClick={clearMessage}
onChange={(event)=>setcategoryImage({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})}
/>
<label htmlFor="contained-button-file">
<Button variant="contained" component="span" className={classes.button1}>
  Category Image
  <CloudUploadIcon className={classes.rightIcon} />
</Button>
</label>
</Grid> 


<Grid item xs={4}>
<Avatar alt="Image" src={categoryImage.icon} className={classes.bigAvatar} />
</Grid>  
</Grid>



<Grid item xs={12}>
<Button variant="contained" color="primary" onClick={addNewRecord} className={classes.button} fullWidth>
              Submit
</Button>
</Grid>
</Grid>
</Paper>
<Typography>
{Message}
</Typography>
</Container>      
</ThemeProvider>  
      </main>
    </div>
  );
}
