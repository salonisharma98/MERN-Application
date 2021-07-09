import { Grid, Paper, Avatar, TextField, Button, FormControl } from '@material-ui/core';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

const Signup = ({fName,lName,mobile,email,password,cpassword,onclickName,onclicklast,onclickmobile,onclickemail,onclickpassword,onclickcpassword,PostData}) => {

	const paperstyle = { padding: 44, height: '70vh', width: 320, margin: '40px auto' }
	const avtarstyle = { backgroundColor: '#31316e' }
	const btnstyle = { margin: '8px auto' }
	const tfield = { marginBottom: '25px' }
	const backgroundImg = { backgroundColor: 'blue' }


	return (

		<Grid>
			<Paper elevation={10} style={paperstyle}>
				<Grid align='center'>
					<Avatar style={avtarstyle}>
						<GroupRoundedIcon />
					</Avatar>	
				</Grid>

				<form method="POST">
				<TextField value={fName} onChange={onclickName} label="First Name" placeholder="Enter your first name" style={tfield} fullWidth required></TextField>

				<TextField value={lName} onChange={onclicklast} label="Last Name" placeholder="Enter your last name" style={tfield} fullWidth required></TextField>

				<TextField value={mobile} onChange={onclickmobile} label="Contact No." placeholder="Enter your Mobile no." style={tfield} fullWidth required></TextField>

				<TextField value={email} onChange={onclickemail} label="Email" placeholder="Enter Email" style={tfield} fullWidth required></TextField>

				<TextField value={password} onChange={onclickpassword} label="Password" placeholder="Enter password" style={tfield} type='password' fullWidth required></TextField>

				<TextField value={cpassword} onChange={onclickcpassword} label=" Coinfirm Password" placeholder="Re-enter password" style={tfield} type='password' fullWidth required></TextField>

				<Button value="register" onClick={PostData} type="submit" color="primary" style={btnstyle} variant="contained" fullWidth>Sign Up</Button>
				</form>
			</Paper>
		</Grid>
	)
}
export default Signup;