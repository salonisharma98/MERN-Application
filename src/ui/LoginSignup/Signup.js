import {Grid,Paper,Avatar,TextField,Button } from '@material-ui/core';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import { useState } from 'react';

const Signup = () => {
	const paperstyle = { padding: 34, height: '78vh', width: 320, margin: '20px auto' }
	const avtarstyle = { backgroundColor: '#31316e' }
	const btnstyle = { margin: '8px auto' }
	const tfield = { marginBottom: '25px' }

	const [fName, setfName] = useState([])
	const [lName, setlName] = useState([])
	const [mobile, setMobile] = useState([])
	const [email, setEmail] = useState([])
	const [password, setPassword] = useState([])
	const [cpassword, setCpassword] = useState([])

	const onclickName = (e) => {
		setfName(e.target.value)
	}
	const onclicklast = (e) => {
		setlName(e.target.value)
	}
	const onclickmobile = (e) => {
		setMobile(e.target.value)
	}
	const onclickemail = (e) => {
		setEmail(e.target.value)
	}
	const onclickpassword = (e) => {
		setPassword(e.target.value)
	}
	const onclickcpassword = (e) => {
		setCpassword(e.target.value)
	}
	const Submithandler = (event) => {
		event.preventDefault();
		const Data = { fName,lName,mobile,email,password,cpassword }
		console.log(Data);
		setfName('');
		setlName('');
		setMobile('');
		setEmail('');
		setPassword('');
		setCpassword('');
	};
	const PostData = async (e) => {
		e.preventDefault();
		const res = await fetch("http://localhost:5000/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				fName, lName, mobile, email, password, cpassword
			})
		});
		const data = await res.json();
		console.log(data);
		if(res.status===400||!data)
		{
			window.alert('invalid credential')
		}
		else if(password!==cpassword)
		{
			window.alert('Password and confirm password should be same');
		}
		else if(res.status===422)
		{
			window.alert('user already exist');
		}
		else{
			window.alert('Registered Succesfully')
		}
	}
	return (
		<div className="container">
			<Paper elevation={10} style={paperstyle}>
				<Grid align='center'>
					<Avatar style={avtarstyle}>
						<GroupRoundedIcon />
					</Avatar>			
				</Grid>
				<form method="POST" onSubmit={Submithandler}>
					<TextField value={fName} onChange={onclickName} label="First Name" placeholder="Enter your first name" style={tfield} fullWidth required></TextField>

					<TextField value={lName} onChange={onclicklast} label="Last Name" placeholder="Enter your last name" style={tfield} fullWidth required></TextField>

					<TextField value={mobile} onChange={onclickmobile} label="Contact No." placeholder="Enter your Mobile no." style={tfield} fullWidth required></TextField>

					<TextField value={email} onChange={onclickemail} label="Email" placeholder="Enter Email" style={tfield} fullWidth required></TextField>

					<TextField value={password} onChange={onclickpassword} label="Password" placeholder="Enter password" style={tfield} type='password' fullWidth required></TextField>

					<TextField value={cpassword} onChange={onclickcpassword} label=" Coinfirm Password" placeholder="Re-enter password" style={tfield} type='password' fullWidth required></TextField>

					<Button value="register" onClick={PostData} type="submit" color="primary" style={btnstyle} variant="contained" fullWidth>Sign Up</Button>
				</form>
			</Paper>
			</div>
	)
}
export default Signup;