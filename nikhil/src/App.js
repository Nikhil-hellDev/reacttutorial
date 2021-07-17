import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './component/user/SignIn';
import Signup from './component/user/Signup';
import DisplayCategoryUser from './component/user/DisplayCategoryUser';
import Event from './component/user/Event';
import DisplayBrandsUser from './component/user/DisplayBrandsUser';
import Dashboard from './component/admin/dashboard/Dashboard';
import EntryAdmin from './component/admin/dashboard/EntryAdmin';
import AddCategory from './component/admin/dashboard/AddCategory';
import AddLabour from './component/admin/dashboard/AddLabour';
import AddCompanyDetails from './component/admin/dashboard/AddCompanyDetails';
import AddMobileBrands from './component/admin/dashboard/AddMobileBrands';
import AddClothesBrand from './component/admin/dashboard/AddClothesBrand';
import AddMobileSection from './component/admin/dashboard/AddMobileSection';
import AddClothSubCategory from './component/admin/dashboard/AddClothSubCategory';
import AddDressingStyle from './component/admin/dashboard/AddDressingStyle';
import Blog from './component/firstpage/Blog';
import DisplayCategory from './component/admin/dashboard/DisplayCategory';
import DisplayMobileBrands from './component/admin/dashboard/DisplayMobileBrands';
import DisplayClothBrands from './component/admin/dashboard/DisplayClothBrands';
import DisplayAllDresses from './component/admin/dashboard/DisplayAllDresses';
import DisplayUserList from './component/admin/dashboard/DisplayUserList';
import Kri from './component/admin/dashboard/Kri';
import Display from './component/admin/dashboard/Display';
import { BrowserRouter as Router, Route,Switch,Link,Redirect } from 'react-router-dom';

function App() {
  return (
<Router>
<Switch>

<Route exact path="/Intro/user" component={SignIn}/>
<Route  path="/Intro/register" component={Signup}/>
<Route  path="/Intro/user/welcome/admin" component={Dashboard}/>
<Route  path="/Intro/user/welcome" component={EntryAdmin}/>
<Route  path="/AddCategory" component={AddCategory}/>
<Route  path="/AddLabour" component={AddLabour}/>
<Route path="/AddCompanyDetails" component={AddCompanyDetails}/>
<Route path="/AddMobileBrands" component={AddMobileBrands}/>
<Route path="/AddMobileSection" component={AddMobileSection}/>
<Route path="/AddClothesBrand" component={AddClothesBrand}/>
<Route path="/AddClothSubCategory" component={AddClothSubCategory}/>
<Route path="/AddDressingStyle" component={AddDressingStyle}/>
<Route path="/DisplayCategory" component={DisplayCategory}/>
<Route path="/DisplayMobileBrands" component={DisplayMobileBrands}/>
<Route path="/DisplayClothBrands" component={DisplayClothBrands}/>
<Route path="/DisplayAllDresses" component={DisplayAllDresses}/>
<Route path="/DisplayUserList" component={DisplayUserList}/>
<Route path="/DisplayCategoryUser" component={DisplayCategoryUser}/>
<Route path="/DisplayBrandsUser" component={DisplayBrandsUser}/>
<Route path="/Kri" component={Kri}/>
<Route path="/Event" component={Event}/>
<Route path="/Display" component={Display}/>
<Route path="/Blog" component={Blog}/>
</Switch>
</Router>

  
  );
}

export default App;

