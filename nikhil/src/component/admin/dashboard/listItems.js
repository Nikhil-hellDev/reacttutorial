import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BusinessIcon from '@material-ui/icons/Business';
import StayCurrentPortraitOutlinedIcon from '@material-ui/icons/StayCurrentPortraitOutlined';
import Link from '@material-ui/core/Link';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link href="/Intro/register" variant="body2">
      {"Dashboard"}
    </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link href="/DisplayCategory" variant="body2">
      {"Display categories"}
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <Link href="/Intro/register" variant="body2">
      {"Display Company detail"}
    </Link>
      </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StayCurrentPortraitOutlinedIcon />
      </ListItemIcon>
      <Link href="/DisplayMobileBrands" variant="body2">
      {"Display mobile brands"}
    </Link>
   
    </ListItem>
   <ListItem button>
    <ListItemIcon>
      <LayersIcon />
    </ListItemIcon>
    <Link href="/DisplayClothBrands" variant="body2">
      {"Display cloth brands"}
    </Link>
  </ListItem>
  <ListItem button>
  <ListItemIcon>
    <LayersIcon />
  </ListItemIcon>
  <Link href="/DisplayAllDresses" variant="body2">
  {"Display All Dresses"}
</Link>
  
</ListItem>
<ListItem button>
  <ListItemIcon>
    <PeopleIcon />
  </ListItemIcon>
  <Link href="/DisplayUserList" variant="body2">
  {"Display User List"}
</Link>
  
</ListItem>
  
</div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Add Things</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <Link href="/AddCategory" variant="body2">
  {"Add categories"}
</Link>
      
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <Link href="/AddCompanyDetails" variant="body2">
      {"Add Company Detail"}
    </Link>
      
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <Link href="/AddMobileBrands" variant="body2">
      {"Add Mobile brands"}
    </Link>
      
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <Link href="/AddMobileSection" variant="body2">
      {"Add Mobile section"}
    </Link>
         </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <Link href="/AddClothesBrand" variant="body2">
      {"Add clothes brands"}
    </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <Link href="/AddClothSubCategory" variant="body2">
      {"Add clothes categories"}
    </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <Link href="/AddDressingStyle" variant="body2">
      {"Add dressing style"}
    </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <Link href="/Display" variant="body2">
      {"Add Dresses"}
    </Link>
    
    </ListItem>
  </div>
);