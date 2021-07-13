// import { useState, useEffect,useContext } from 'react'
// import { useHistory } from 'react-router-dom'
// import {useParams} from 'react-router-dom';
// import {Grid,Paper, Typography,Divider} from '@material-ui/core'
// import Avatar from '@material-ui/core/Avatar'
// import profilelogo from '../Images/profilelogo.png'
// const LoggedProfile = ({match}) => {
 
//   const history = useHistory();
//   const token = localStorage.getItem('jwt')
  
//   const [userdata, setUserdata] =useState([])
// //   const ids=localStorage.getItem('id')
// //   const fetchUser = async () => {
// //     const response = await fetch(`http://localhost:5000/profile/${ids}`, {
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'Accept': 'application/json',
// //          "Authorization": "Bearer " + localStorage.getItem('jwt')
// //       }
// //     });
// //     setUser(await response.json());
// //   }

// //   useEffect(() => {
// //     if (token === null) {
// //       history.push('/')
// //       window.alert("you must be signed in")
// //     }
// //     else {
// //       fetchUser();
// //     }

// //   }, []);
//   const paperstyle = { padding: 20, height: '55vh', width: 420, margin: '40px auto' ,align:"center" }

//   return (
//     <div>
//       <Grid container align="center">
//         <Grid item xs={6} alignItem="center">
//         <Paper elevation={10} style={paperstyle}>    
//         <img src={profilelogo} width="360px" />    
//         </Paper>
//         </Grid>
//         <Grid item xs={6}>
//         <Paper elevation={10} style={paperstyle}>
//           <Typography>
//           <h3>Name: {userdata.user.fName} {userdata.user.lName}</h3>
//           </Typography>
//           <Divider/>
//           <Typography>
//           <h3>Contact: {userdata.user.mobile}</h3>
//           </Typography>
//           <Divider/>
//           <Typography>
//           <h3>Email: {userdata.user.email}</h3>
//           </Typography>
//           <Divider/>
//           <Typography>update details</Typography>
//         </Paper>
//         </Grid>
//       </Grid>
//     </div>

   
//   )
// }
// export default LoggedProfile;