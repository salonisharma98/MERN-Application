import {useState, useEffect, } from 'react';
import {useHistory} from 'react-router-dom';
import laptop from '../Images/laptop.jpg';
import {Grid,Paper} from '@material-ui/core'
const Home = () => {
const history=useHistory();
const token=localStorage.getItem('jwt')
// const [acess,setAcees]=useState(token);
const LoggedData = async (e) => {
	const res = await fetch(`http://localhost:5000/Home`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			'Accept': 'application/json',
			"Authorization":"Bearer "+localStorage.getItem('jwt')
		},		
	});
	const data = await res.json();
	console.log(data);
}
useEffect(() => {
	if(token===null)
{
	window.alert("you must be signed in")
	history.push('/')
}
else{
	LoggedData();
}
  }, []);
  const imagess={
	  width:"100%",
	  height:"88vh"
  }

  const paperstyle={height:'88vh',}
	return (
		<div>
			<Grid container align="center">
			<Grid xs={6}>
			<img src={laptop} style={imagess}/>
			</Grid>
			<Grid xs={6}>
			<h1>Home Page</h1>
			
			</Grid>
			</Grid>
		</div>

	)
}
export default Home;