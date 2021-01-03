import React from 'react'
import {makeStyles, Grid} from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SettingsIcon from '@material-ui/icons/Settings';
import {Link, withRouter} from "react-router-dom"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { SettingsInputAntenna } from '@material-ui/icons';

const useStyles= makeStyles({
    mainContainer :{
        margin: "5rem"
    },
    root: {
        minWidth: "12rem",
      },
})

const Home = () => {
    const classes = useStyles()
    return (
       <Card style={{width: "15rem"}}>
        <CardActions style={{display:"block"}}>
     <List component="nav" aria-label="secondary mailbox folders">
       <Link to="/" variant="h3">
       <ListItem button>
        <ListItemIcon>
            <AccountCircleIcon/>
        </ListItemIcon>
          <ListItemText primary="Md Riyaz Ansari" />
        </ListItem>
       </Link>
      </List>
      <Divider />
        <List component="nav" aria-label="main mailbox folders">
        <Link to="/orders" variant="h3">
       <ListItem button>
        <ListItemIcon>
            <LocalShippingIcon/>
        </ListItemIcon>
          <ListItemText primary="My Orders" />
        </ListItem>
       </Link>
       <Link to="/settings" variant="h3">
       <ListItem button>
        <ListItemIcon>
            <SettingsIcon/>
        </ListItemIcon>
          <ListItemText primary="Account Settings" />
        </ListItem>
       </Link>
       <Link to="/profile" variant="h3">
       <ListItem button>
        <ListItemIcon>
            <InboxIcon />
        </ListItemIcon>
          <ListItemText primary="Profle Info" />
        </ListItem>
       </Link>
       <Link to="/address" variant="h3">
       <ListItem button>
        <ListItemIcon>
            <LocationOnIcon />
        </ListItemIcon>
          <ListItemText primary="Manage Address" />
        </ListItem>
       </Link>
      </List>
    </CardActions>
    </Card>
    )
}

export default withRouter(Home)
