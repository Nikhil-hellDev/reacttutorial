import React,{ useState , useEffect} from 'react';
import Container from '@material-ui/core/Container';

import {Navbar,Nav ,Form ,FormControl ,Button} from 'react-bootstrap'
import { grey,green, blue, orange } from '@material-ui/core/colors'
import axios from 'axios';



export default function Kri() {
  return   (
    <div>
<Navbar bg="light" variant="white">
<Navbar.Brand href="#home">N</Navbar.Brand>
<Nav className="mr-auto">
<Nav.Link href="#home">Home</Nav.Link>
<Nav.Link href="#features">Features</Nav.Link>
<Nav.Link href="#pricing">Pricing</Nav.Link>
</Nav>
<Form inline>
<FormControl type="text" placeholder="Search" className="mr-sm-2" />
<Button variant="outline-info">Search</Button>
</Form>
</Navbar>
 </div>
     
  );
}