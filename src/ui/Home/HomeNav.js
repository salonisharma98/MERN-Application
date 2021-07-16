import {useHistory,useParams,Link} from 'react-router-dom'
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import LoggedHistory from './LoggedHistory';

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
  const history=useHistory()
  const token=localStorage.getItem('jwt');
  const Logout=()=>{
    localStorage.clear();
    // setLoghistory(Date())
    // console.log(loghistory);
    history.push('/')   
  }
 const id=useParams()
  const classes = useStyles();  
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
  const renderlist=()=>{
    if(token){
      return[
        <Button className={classes.navbtn} onClick ={homepage}>Home</Button>,
        <Button onClick={findPeople} className={classes.navbtn}>Find People</Button> ,
        <Button onClick={viewProfile} className={classes.navbtn}>View Profile</Button>  ,
        <Button className={classes.navbtn} onClick={Logout}>Logout</Button>   ,
        <Button className={classes.navbtn} onClick={Logout}>Logout History</Button>   ,   
      ]
    }
  } 
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation=
     {0} position="static">
        <Toolbar className={classes.appbarWrapper}>
        <p className={classes.appbartitle}><b>Demo App</b></p>          
        <Typography>          
          {renderlist()}      
        </Typography>                     
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default HomeNav;