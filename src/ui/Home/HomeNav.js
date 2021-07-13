import React from 'react';
import {useHistory,useParams} from 'react-router-dom'
import {Link} from 'react-router-dom';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
 import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import Searchuser from './Searchuser'
import Home from './HomePage';
import Profile from './Profile';
const useStyles = makeStyles((theme) => ({
  root:{
    display:'flex',
    justifyContent: "center",
    alignItems:"center",
    
},
appbar:{
    // backgroundColor:'grey'
},
appbarWrapper:{
    width:"80%",
    margin:"0 auto"
},

appbartitle:{
flexGrow:"1"
},
btnTitle:
{
  
}

}));

const HomeNav=()=> {
  const id=useParams()
  const classes = useStyles();
  const history=useHistory()
  const logout=()=>{
    localStorage.clear();
    history.push("/")
  }
  const homepage=()=>
  {
    history.push("/Home")
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation=
     {0} position="static">
        <Toolbar className={classes.appbarWrapper}>
        <h2 className={classes.appbartitle}>Demo App</h2>   
          <Typography>          
          <Button onClick ={homepage}>Home</Button>       
            </Typography>
            <Typography >
            <Link to="/Searchuser" className={classes.btnTitle}>
            <Button>Find People</Button>
            </Link>
            </Typography>
          

          <Typography>
           
            <Button onClick={logout}>Logout</Button>
            
          </Typography>        
            <Link  to={`/LoggedProfile/:profileid`}>
            <Typography>
            <AccountCircle />
            </Typography>
            </Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default HomeNav;