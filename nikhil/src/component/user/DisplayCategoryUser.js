import React,{ useState , useEffect} from 'react';
import {getData,BaseUrl} from '../FetchServices';
import {Carousel,Container,Image,Card,Row ,Col, CardDeck ,small } from 'react-bootstrap';
import { grey,green, blue, orange } from '@material-ui/core/colors';


export default function DisplayCategoryUser() {
  
  const [result , setresult ] = React.useState([]);

  useEffect ( async() => {
    var axios = require('axios');
  var config = {
  method: 'get',
  url: 'http://203.190.153.22:5511/user',
  headers: { 
    'Content-Type': 'application/json'
  },
};

axios(config)
.then( (response)=> {
  console.log(("latest refresh",response.data.data));
  var data =response.data.data
  setresult(data)
})
.catch(function (error) {
  console.log(error);
});
    // const result=await getData('admin/displayallcategory')
    //  console.log("data get",result);
    //  setresult(result);
 }, [])

  return (
    
        <div>
        <Container className="center">
        <h1 style={{color:blue[500] , textAlign:"center"}}>Categories</h1></Container>
        <Container >
        <Carousel style={{marginTop:40}}>
        <Carousel.Item>
        <Row>
            {
                result.map(res => (
                                        <Col lg={3} sm={6} >
                  <  Card style={{ width: '16rem' }}>
                  <Image src={`${BaseUrl}/images/${res.categoryImage}`}
                  width="75"
    height="65"
                  ></Image>
<Card.Body>
  <Card.Title>{res.name}</Card.Title>
  <Card.Text>
  <li >{res.email}</li>
  <li >{res.categoryDetails}</li>
  </Card.Text>
</Card.Body>
</Card>
</Col>        
                ))
            }
            
</Row>
</Carousel.Item>
</Carousel>
</Container>
           
        </div>
    
  );
}


