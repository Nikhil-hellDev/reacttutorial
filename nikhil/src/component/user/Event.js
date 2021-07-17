import React,{ useState , useEffect} from 'react';
import Container from '@material-ui/core/Container';
import {getData,BaseUrl} from '../FetchServices';
import {Carousel,Image,Card,Row ,Navbar,Nav,Col, CardDeck ,small } from 'react-bootstrap'
import { grey,red, blue,yellow, orange } from '@material-ui/core/colors'
import axios from 'axios';
import Logo from './1.jpg'
import './event.css'
import slide1 from './1.jpg'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RoomIcon from '@material-ui/icons/Room';
import $ from 'jquery';

export default function Event() {
  
  const [events , setEvents ] = React.useState([]);

  useEffect (() => {
    axios.get('https://aakashrivastava.pythonanywhere.com/api/events?format=json')
    .then(res =>{
      console.log(res)
      setEvents(res.data.result)
    })
    .catch(err =>{
      console.log(err)
    })

    
  }, [])

  

  return (
        <div>
           <Navbar collapseOnSelect expand="lg"  className="navbar" variant="dark" fixed="top">
  <Navbar.Brand href="#home">
    <Image
    src={Logo}
    ></Image>
     </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className=" ml-auto"> 
      <Nav.Link  href="#features" style={{color:yellow[700]  ,marginRight:20 }}>HOME</Nav.Link>
      <Nav.Link  href="#pricing"style={{color:grey[50] ,marginRight:20 }} >EVENT</Nav.Link>
      <Nav.Link  href="#pricing" style={{color:grey[50] ,marginRight:20 }}>WORKSHOPS</Nav.Link>
      <Nav.Link  href="#pricing" style={{color:grey[50] ,marginRight:20 }}>PRODUCT</Nav.Link>
      <Nav.Link  href="#pricing" style={{color:grey[50] ,marginRight:20 }}>GALLERY</Nav.Link>
      <Nav.Link  href="#pricing" style={{color:grey[50] ,marginRight:20 }}>BLOG</Nav.Link>
      <Nav.Link  href="#pricing" style={{color:grey[50] ,marginRight:20 }}>TRAINING</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <Container style={{marginTop:127}} >
        <h1 style={{color:blue[800] , textAlign:"center"}}>EVENT</h1></Container>
        <Container className="main" style={{maxWidth:1200, marginTop:40}} >
        {/* <Carousel style={{marginTop:40}}>
        <Carousel.Item > */}
        <Row style={{textAlign:'center'}}>
            {
                events.map(post => (
                    <Col  lg={4} sm={6} key={post.id} className="eventbox" style={{ width:"fitContent", height:"100%",
                    float:"left" , textAlign:"center"}}>
                      <Card className="boxevent" style={{ width: '100%' }}>
                       <Image src={slide1} width="100%" height="200px"></Image>
                        <Card.Body>
                      <Card.Title><p style={{fontSize:17,color:red[400],textTransform:"uppercase"}}>{post.startDate} - {post.endDate}</p></Card.Title>
                        <Card.Text><h2 style={{textTransform:"uppercase",textAlign:"justify" ,fontSize:"medium" ,fontWeight:"bold"}}>{post.name}</h2><br></br>
                        <p style={{textAlign:"justify"}}>{post.desc}</p>
                        <p style={{marginBottom:0, float:"left" ,lineHeight:1}}><RoomIcon style={{marginRight:20}} />{post.location}</p><br>
                        </br>
                        <p style={{marginBottom:0 ,float:"left" ,lineHeight:1}}><AccessTimeIcon style={{marginRight:20}}/>{post.time}</p>                        </Card.Text>
                          </Card.Body>
                      </Card>
                           </Col>
       
                ))
            }
            </Row>
            {/* </Carousel.Item>   

</Carousel> */}
</Container>
<Container fluid className="footer">

</Container>
           
        </div>
     
  );
}


/*import React,{ useState , useEffect, Fragment} from 'react';
import axios from 'axios';
import './Display.css';
import {BaseUrl} from '../FetchServices';


export default function Event() {
  
  const [events , setEvents ] = React.useState([]);

  useEffect (() => {
    axios.get('https://aakashrivastava.pythonanywhere.com/api/events?format=json')
    .then(res =>{
      console.log(res)
      setEvents(res.data.result)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])



  return (<Fragment>
   
       <div className='hello'>          
            {
                events.map(post => (
                  <div className='ello'>
                    <ul key={post.id}>
                   <a classname='im' href="#"> <img className='imeg' src={`${BaseUrl}/images${post.pic}`}></img> </a> 
                     <div className='llo'>
  
                     </div>
                           <li className='qe'>User Name</li>
                      <li className='gmh'>{post.name}</li>
                      <div className='mhgg'>
                                              <li className='mhg'>{post.desc}</li>
                      </div>
                      <button className='gmg'>View Details</button>
</ul></div>
                ))
            }
                      </div>

 
     </Fragment>
  );
}
*/