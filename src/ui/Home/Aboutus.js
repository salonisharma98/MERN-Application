import { Grid } from "@material-ui/core";
import banner from "../Images/banner.png";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
	mobile:{
		maxWidth:"35%",
	
	},
	aboutPara:{
		 textAlign:"justify",
		fontSize:"20px",
		marginTop:"20px",
	},
	aboutText:{
		textAlign:"center",
	},
	AboutWrap:{
	
		padding:"25px"
		
	},
	aboutHeading:{
		fontSize:"50px"
	},
	aboutPic:{
		textAlign:"center",
	}
})
const Aboutus = () => {
	const classes=useStyles();
	return (
		<div className={classes.AboutWrap}>
			<Grid container>
				<Grid item md={6} xs={6} className={classes.aboutPic}>
					<img src={banner} className={classes.mobile}/>
				</Grid>
				<Grid item md={6} xs={6} className={classes.aboutText}>
					<p className={classes.aboutHeading}>About Us</p>
					<p className={classes.aboutPara}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				</Grid>
			</Grid>
		</div>
	)
}
export default Aboutus;