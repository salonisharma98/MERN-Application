import {Grid,Paper,Avatar,TextField,Button,Link} from '@material-ui/core';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import Signup from './Signup'
const Login=()=>{
	const paperstyle={padding:44,height:'70vh',width:320,margin:'40px auto'}
	const avtarstyle={backgroundColor:'#31316e', }

	const btnstyle={margin:'8px auto'}
	const tfield={marginBottom:'45px'}

	const backgroundImg={backgroundColor:'blue'}
	return(
		
		<Grid container>
	 <Grid item md={6}>
	 <Signup></Signup>
	 </Grid>

		<Grid item md={6}>
		<Paper elevation={10} style={paperstyle}>
		
				<Grid align='center'>
				<Avatar style={avtarstyle}>
					<GroupRoundedIcon/>
				</Avatar>
				
				</Grid>

				<TextField label="Username/Email" placeholder="Enter username/email" style={tfield} fullWidth required></TextField>

				<TextField label="Password" placeholder="Enter password" style={tfield} type='password' fullWidth required></TextField>

				<Button type="submit" color="primary" style={btnstyle} variant="contained" fullWidth>Log In</Button>
			
			</Paper>
		</Grid>
		</Grid>
	)
}
export default Login;