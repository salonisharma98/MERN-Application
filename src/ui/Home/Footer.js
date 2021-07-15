import {Grid} from "@material-ui/core";
import ECommerce from "../Images/ECommerce.jpg";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    imageFooter:{
        maxHeight:"180px",
        width:"100%"
    },
    footerColor:{
        backgroundColor:"beige",
    },
})
const Footer=()=>{
    const classes=useStyles();
    return(
        <div>
            <Grid container>
                <Grid item xs={6} className={classes.footerColor}></Grid>
                <Grid item xs={6}>
                    <img src={ECommerce} className={classes.imageFooter}/>
                </Grid>
            </Grid>
        </div>
    )
}
export default Footer;