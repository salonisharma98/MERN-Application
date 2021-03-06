import { useState, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import {useParams} from 'react-router-dom';
import {Grid,Paper, Typography,Divider, Button} from '@material-ui/core'
import Profile from '../Images/profile.jpg'
import { makeStyles } from '@material-ui/core/styles';
import HomeNav from './HomeNav';

const useStyles = makeStyles((theme) => ({
  profileHeading:{
    padding:"8px",
    textAlign:"center",
    fontSize:"26px",
    color:"white"
  },
  detail:{
    fontSize:"20px",
    color:"white",
   
    textAlign:"center",
  },
  userData:{
    padding:"10px"  ,
    textAlign:"center",
  },
  profileImg:{
    textAlign:"center",
  },
  updateInfo:{
    backgroundColor:"white",
    padding:"10px",
    fontSize:"18px",
    '&:hover':{
      backgroundColor:"white"
    }
  },
}))

const LoggedProfile = () => {
  const [users,setUser]=useState([])
  const token=localStorage.getItem('jwt');
  const history=useHistory();

    useEffect(() => {
      if(token===null)
    {  
	   history.push('/');
     
      // window.alert("you must be signed in")
    }
    else{
      fetch(`http://localhost:5000/current_user`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
          "Authorization":"Bearer "+localStorage.getItem('jwt')
        },	
      }).then(res=>res.json()).then(result=>{
         console.log(result);
       setUser(result)
      })}
      },[])

  const paperstyle = { padding: 20, height: '55vh', width: 420,align:"center",margin:'40px auto' ,backgroundColor:"#004279"}
      const classes=useStyles();
  return (
    <div>
      <HomeNav/>
      <Grid container className={classes.userData}>
        <Grid item xs={6} className={classes.profileImg}>
          <img src={Profile}/>
        </Grid>
        <Grid item xs={6}>
        <Paper elevation={10} style={paperstyle}>
          <Grid item xs={12}className={classes.profileHeading}>
          <p><b>User Details</b></p>
          </Grid>
          <Grid container className={classes.userData}>
            <Grid className={classes.detail} item xs={6}>
              <p><b>Name</b></p>
            </Grid>
            <Grid className={classes.detail} item xs={6}>
              <p>{users.fName} {users.lName}</p>
            </Grid>
          </Grid>
          
          <Grid container className={classes.userData}>
            <Grid className={classes.detail} item xs={6}>
              <p><b>Contact</b></p>
            </Grid>
            <Grid className={classes.detail} item xs={6}>
              <p> {users.mobile}</p>
            </Grid>
            </Grid>
            <Grid container>
            <Grid className={classes.detail} item xs={6}>
              <p><b>Email</b></p>
            </Grid>
            <Grid className={classes.detail} item xs={6}>
              <p>{users.email} </p>
            </Grid>
          </Grid>        
        </Paper>
        </Grid>
      </Grid>
    </div>   
  )
}
export default LoggedProfile;