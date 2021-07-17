import React,{ useState , useEffect} from 'react';
import {getData,BaseUrl,postData} from './FetchServices';
import {Carousel, Container,Image,Card,Row ,Col, CardDeck ,small } from 'react-bootstrap'
import { grey,green, blue, orange } from '@material-ui/core/colors'

function DisplayBrands() {
 

   const [categoryId , setcategoryId ] = React.useState(1);
   const [result , setresult ] = React.useState([]);

   
    useEffect ( async() => {

        readAllRecords()

    }, [])

    const readAllRecords = async()=>{
        let body={
            'categoryId':categoryId,
        }
        console.log(body);
             const result=await postData('admin/displayMobileBrands',body)
       console.log("data get",result);
        setresult(result.RESULT);
    } 
   
    return (
        <div>
        <Container className="center">
        <h1 style={{color:blue[500] , textAlign:"center"}}>Top Brands</h1></Container>
        <Container >
        <Carousel style={{marginTop:40}}>
        <Carousel.Item>
        <Row>
            {
                result.map(res => (
                    <Col lg={3} sm={6} key={res.mobileBrandId}>
                  <  Card style={{ width: '16rem' }}>
                  <Image src={`${Base Url}/images/${res.mobileBrandPhoto}`}
                  width="75"
    height="65"
                  ></Image>
<Card.Body>
  <Card.Title>{res.mobileBrandName}</Card.Title>
  <Card.Text>
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
    )
}

export default DisplayBrands
