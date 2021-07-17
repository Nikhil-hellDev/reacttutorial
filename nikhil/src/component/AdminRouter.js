import React from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import DashBoard from './dashboard/Dashboard'
import AdminLogin from './AdminLogin'
import UserMainPage from './users/UserMainPage'
export default function AdminRouter(props) {
 return(
  <Router>
 
<div>
  <Route path='/AdminLogin' exact strict component={AdminLogin}  history={props.history}/>
  <Route path='/DashBoard' exact strict component={DashBoard}  history={props.history}/>
  <Route path='/UserMainPage' exact strict component={UserMainPage}  history={props.history}/>
</div>


  </Router>  

  

 )
}