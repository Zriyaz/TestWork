import React from "react"
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import {Grid, makeStyles, AppBar,Toolbar} from "@material-ui/core"
import theme from './components/Theme';
import Home from "./components/Home";
import Orders from "./components/Orders"
import ProfileInfo from "./components/ProfileInfo"
import Address from "./components/Address"
import Profile from "./components/Profile"
import Settings from "./components/Settings"

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  mainContainer:{
    marginTop: "5rem",
    marginLeft: "5rem",
  }
}));

function App() {
  const classes = useStyles()
  return (
    <BrowserRouter>
       <ThemeProvider theme={theme}>
       <AppBar>
      <Toolbar position='fixed'>
        <h3>Welcome</h3>
      </Toolbar>
    </AppBar>
    <Grid container direction="col" className={classes.mainContainer} >
      <Grid item lg={4}>
        <Home />
      </Grid>
      <Grid item lg={8}>
        <Route path="/" exact component={Profile}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/profile" component={ProfileInfo}/>
        <Route path="/address" component={Address}/>
    </Grid> 
    </Grid>
       </ThemeProvider>   
    </BrowserRouter>
  );
}

export default App;
