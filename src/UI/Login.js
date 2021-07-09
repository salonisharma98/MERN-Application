import {Grid,Paper,Avatar,TextField,Button,Link} from '@material-ui/core';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import {useState} from 'react'; 
import {useHistory} from 'react-router-dom';
import Nav from './Navbar';

const Login=()=>{
	const[loginemail,setLoginemail]=useState('');

	const[loginpassword,setLoginpassword]=useState('');

	const history=useHistory();

	const paperstyle={padding:44,height:'55vh',width:320,margin:'40px auto'}
	const avtarstyle={backgroundColor:'#31316e', }

	const btnstyle={margin:'8px auto'}
	const tfield={marginBottom:'45px'}

	const onLogin=(e)=>
	{
		setLoginemail(e.target.value)
	}
	const onEntering=(e)=>
	{
		setLoginpassword(e.target.value);
	}

	const LoggedData = async (e) => {
		e.preventDefault();
		const res = await fetch("/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
			 loginemail,loginpassword
			})
		});
		const data = await res.json();
		console.log(data);
		if(res.status===400||!data)
		{
			window.alert('invalid credentials');
		}	 
		else{
			window.alert('Login succesfully');
			history.push("/Home");
		}
	}
	return(
		<div className='container'>
			<Nav/>
		<Grid align="center">
		<Paper elevation={10} style={paperstyle}>
				<Grid align='center'>
				<Avatar style={avtarstyle}>
					<GroupRoundedIcon/>
				</Avatar>			
				</Grid>
				<form method="POST">
				<TextField value={loginemail} onChange={onLogin} label="Username/Email" placeholder="Enter username/email" style={tfield} fullWidth required></TextField>

				<TextField value={loginpassword} onChange={onEntering} label="Password" placeholder="Enter password" style={tfield} type='password' fullWidth required></TextField>

				<Button onClick={LoggedData} type="submit" color="primary" style={btnstyle} variant="contained" fullWidth>Log In</Button>		
				</form>
			</Paper>
		</Grid>
		</div>
	)
}
export default Login;