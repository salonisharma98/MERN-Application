import React, { useEffect, useState } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import LoggedHistory from './LoggedHistory';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  appbar: {
    backgroundColor: "transparent",
    boxShadow: "4px 4px 4px 4px gainsboro",
    padding: "8px"
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto"
  },
  appbartitle: {
    flexGrow: "1",
    fontSize: "34px",
    color: "#004279"
  },
  navbtn: {
    marginLeft: "8px",
    marginRight: "8px",
    fontSize: "16px"
  }
}));

const HomeNav = () => {
  const history = useHistory()
  const classes = useStyles();
  const token = localStorage.getItem('jwt');
  const [logoutHistory, setLogoutHistory] = useState(new Date());
  const Logout = () => {
    const id = localStorage.getItem('user')
    const JSONFormattedId = JSON.parse(id)
    fetch(`http://localhost:5000/logouthistory/${JSONFormattedId._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ logoutHistory: logoutHistory })
    }).then(res => res.json().then(res => {
      console.log(res, 'i am response');
      setLogoutHistory(res,"i am res")
    }).catch(error => {
      console.log(error, 'i am error')
    }))
    localStorage.clear();
    history.push('/')
  }
  const homepage = () => {
    history.push("/Home")
  }
  const findPeople = () => {
    history.push("/SearchUser")
  }
  const viewProfile = () => {
    history.push("/LoggedProfile")
  }
  const logshistory = () => {
    history.push("/LoggedHistory")
  }
  

  // const renderlist = () => {
  //   if (token) {
  //     return (
  //       <div>
  //         <Button className={classes.navbtn} onClick={homepage}>Home</Button>
  //         <Button onClick={findPeople} className={classes.navbtn}>Find People</Button>
  //         <Button onClick={viewProfile} className={classes.navbtn}>View Profile</Button>
  //         <Button className={classes.navbtn} onClick={Logout}>Logout</Button>
  //         <Button className={classes.navbtn} onClick={logshistory}>Logout History</Button>
  //       </div>
  //     )
  //   }
  //   else{
  //     <h1 className={classes.appbartitle}><b>Demo App</b></h1>
  //   }
  // }
  //  const[usernav,setNave]=useState(false)
  // useEffect(()=>{
  //  const tokens=localStorage.getItem('jwt')
  //   if(tokens)
  //   {
  //   setNave(true)
  //   }
  //   else{
  //    setNave(false)
  //   }
  // })
  return (

    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation=
        {0} position="static">
        <Toolbar className={classes.appbarWrapper}>
       
        <div>
        <h1 className={classes.appbartitle}><b>Demo App</b></h1>
         <Button className={classes.navbtn} onClick={homepage}>Home</Button>
          <Button onClick={findPeople} className={classes.navbtn}>Find People</Button>
          <Button onClick={viewProfile} className={classes.navbtn}>View Profile</Button>
          <Button className={classes.navbtn} onClick={Logout}>Logout</Button>
          <Button className={classes.navbtn} onClick={logshistory}>Logout History</Button>
          </div>
          </Toolbar>
      </AppBar>
    </div>
  );

}
export default HomeNav;