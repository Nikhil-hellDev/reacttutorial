// Import all the libraried here ....................
import React, { useEffect } from "react"
import {getData,BaseUrl} from '../FetchServices'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  h6 :{
     color: "#293659",
     textAlign: 'center',
     marginTop : '100px',
     '&:hover': {
       color:"#fbb615",
      },
      fontWeight: 1000,
  },
  root: {
    width: '100%',
  },
  root1: {
    display:'flex',
    flexWrap:'wrap',
   justifyContent:'center'
  },
  card: {
        
    maxWidth: 345,
    margin:40,
    height: 345,
  },
  media: {
    width:'100%',
    height:'100%'
  },
   
   
   
  }));
  
  
export default function FrontContent( props ){
    const classes = useStyles();

    const [getList,setList]=React.useState([])
      
      
    const readAllRecords = async()=>{
        var list = await getData('mainCategory/displaymaincategory')
        setList(list)
    } 

    useEffect(()=>{
        readAllRecords()
        
    },[])


    const handleClick =(Id)=>{
      // props.setViews('STEPPERS',schoolId);
     
      if(Id == 1){
       props.setViews('College_Category',Id);
      }
      else if( Id == 2){
        props.setViews('School_Class',Id)
      }
      else 
      alert (" This Function is restricted.. Please try another options");
  }

  const displayList=()=>{
    return getList.map((item,index)=>{
        return(
            <Card className={classes.card} elevation={5} >
                <CardActionArea onClick={()=>handleClick(item.main_category_id)}>
                    <CardMedia
                    component='img'
                    className={classes.media}
                    image={`${BaseUrl}/images/${item.main_category_image}`}
                    title={item.main_category_name}
                    />
                     <CardContent>
  <Typography gutterBottom variant="h5" component="h2">
  {item.main_category_name}
  </Typography>
</CardContent>
                </CardActionArea>

            </Card>
        )
    })
}


    return (
      <div className={classes.root}>   
          <Typography variant="h4" gutterBottom className={classes.h6}>
        Courses For
      </Typography>
      <br/>
      <br/>
    <div className={classes.root1}>
      {displayList()}
     
      </div>
      <br/>
      <br/>
      </div>
    );
  }