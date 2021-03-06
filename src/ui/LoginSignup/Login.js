import {Grid,Paper,Avatar,TextField,Button, Typography} from '@material-ui/core';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import {useState,useContext} from 'react'; 
import {useHistory,Link,useParams} from 'react-router-dom';
import Signup from './Signup';
import Nav from './Navbar'

const Login=()=>{
	
	const[email,setEmail]=useState([]);

	const[password,setPassword]=useState([]);

	const history=useHistory();

	const paperstyle={padding:44,height:'55vh',width:320,margin:'40px auto'}
	
	const avtarstyle={backgroundColor:'#31316e', }

	const btnstyle={margin:'8px auto'}
	const tfield={marginBottom:'45px'}

	const onLogin=(e)=>
	{
		setEmail(e.target.value)
	}
	const onEntering=(e)=>
	{
		setPassword(e.target.value);
	}	
	const id=useParams()
	const LoggedData = async (e) => {
		 e.preventDefault();
		const res = await fetch(`http://localhost:5000/signin`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				'Accept': 'application/json'
			},
			body: JSON.stringify({
			 email,password
			})
			
		});
		const data = await res.json();
		console.log(data);
		
		if(res.status===400||!data)
		{
			window.alert('invalid credentials');
		}	 
		else{
			console.log(data.userLogin,'i am logged in')
			localStorage.setItem("jwt",data.token)
			localStorage.setItem("user",JSON.stringify(data.user))
			window.alert('Login succesfully');
			history.push(`/Home`);
		}
	}
	return(
		<div>
			<Nav/>
		<Grid align="center">
		<Paper elevation={10} style={paperstyle}>
				<Grid align='center'>
				<Avatar style={avtarstyle}>
					<GroupRoundedIcon/>
				</Avatar>			
				</Grid>
				<form method="POST">
				<TextField value={email} onChange={onLogin} label="Username/Email" placeholder="Enter username/email" style={tfield} fullWidth required></TextField>

				<TextField value={password} onChange={onEntering} label="Password" placeholder="Enter password" style={tfield} type='password' fullWidth required></TextField>

				<Button onClick={LoggedData} type="submit" color="primary" style={btnstyle} variant="contained" fullWidth>Log In</Button>
				<Typography>
					<Link to="/Signup">
					Create new account
					</Link>
					</Typography>	
				</form>
			</Paper>
		</Grid>
		</div>
	)
}
export default Login;