import { useState, useEffect, } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import women from '../Images/women.jpg';
import { Grid, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Features from './Features';
import Aboutus from './Aboutus';
import Footer from './Footer';
import Alert from '@material-ui/lab/Alert';
const useStyles = makeStyles((theme) => ({
	bgcolor: {
		backgroundColor: "#d3d3d3ad",
	},
	features: {
		textAlign: "center",
		marginTop: "4px"
	},
	features1: {
		fontSize: "50px"
	},
	para: {
		fontSize: "50px",
	},
	appcolor: {
		color: "#004279",
	},
	subtext: {
		fontSize: "25px",
	},
	playstore: {
		padding: "14px",
		fontSize: "16px",
		color: "white",
		backgroundColor: "black",
		marginLeft: "10px",
		marginRight: "10px",
		// marginTop:"15px",
		marginBottom:"20px",
		'&:hover': {
			backgroundColor: "black"
		}
	},
	appTitle: {
		textAlign: "center",
		marginTop: "70px",
		marginBottom: "50px",
	},
	btnTitle: {
		textAlign: "center",
		
	}
}));

const Home = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const classes = useStyles();
	const history = useHistory();
	const token = localStorage.getItem('jwt')
	// const LoggedData = async (e) => {
	// 	const res = await fetch(`http://localhost:5000/Home`, {
	// 		method: "GET",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			'Accept': 'application/json',
	// 			"Authorization": "Bearer " + localStorage.getItem('jwt')
	// 		},
	// 	});
	// 	const data = await res.json();
	// 	console.log(data);
	// }
	useEffect(() => {
		if (token === null) {
			history.push('/');
		
		}
	}, []);
	const imagess = {
		width: "100%",
		height: "88vh"
	}

	const paperstyle = { height: '88vh', }
	return (
		<div>
			<Grid container className={classes.bgcolor} >
				<Grid item xs={12} md={6}>
					<img src={women} style={imagess} />
				</Grid>
				<Grid item xs={12} md={6}>
					<Grid container className={classes.appTitle}>
						<Grid item xs={12}>
							<p className={classes.para}>Download the <span className={classes.appcolor}><b>App Now!!!</b></span>
								<br />
								<p className={classes.subtext}>for latest fashion and trends</p>
							</p>
						</Grid>
					</Grid>
					<Grid container className={classes.btnTitle}>
						<Grid item xs={12}>
							<Button color="black" className={classes.playstore} >
								Availaible on google
							</Button>
							<Button color="black" className={classes.playstore} >
								Availaible on app store
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={12} className={classes.features}>
					<p className={classes.features1}>Features</p>
				</Grid>
			</Grid>
			<Features />
			<Aboutus />
			<Footer />
		</div>

	)
}
export default Home;