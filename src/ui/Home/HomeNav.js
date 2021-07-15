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
  backgroundColor: "transparent",
  boxShadow: "4px 4px 4px 4px gainsboro",
  padding:"8px"
},
appbarWrapper:{
    width:"80%",
    margin:"0 auto"
},

appbartitle:{
  flexGrow:"1",
  fontSize:"34px",
  color:"#004279"
},
navbtn:{
  marginLeft:"10px",
  marginRight:"10px",
  fontSize:"18px"
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
  const findPeople=()=>
  {
    history.push("/SearchUser")
  }
  const viewProfile=()=>
  {
    history.push("/LoggedProfile")
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation=
     {0} position="static">
        <Toolbar className={classes.appbarWrapper}>
        <p className={classes.appbartitle}><b>Demo App</b></p>   
        <Typography>          
          <Button className={classes.navbtn} onClick ={homepage}>Home</Button>       
            </Typography>
            <Typography >
            <Button onClick={findPeople} className={classes.navbtn}>Find People</Button>
            </Typography>
          <Typography>          
            <Button className={classes.navbtn}onClick={logout}>Logout</Button>           
          </Typography>        
            <Typography>
            <Button onClick={viewProfile} className={classes.navbtn}>View Profile</Button> 
            </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default HomeNav;