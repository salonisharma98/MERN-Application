import { AppBar, Button, CssBaseline, IconButton, Toolbar, Typography } from "@material-ui/core";
import {alpha,makeStyles} from "@material-ui/core/styles"


const useStyles=makeStyles((theme)=>({
root:{
    display:'flex',
    justifyContent: "center",
    alignItems:"center",
    
},
appbar:{
    // background:'none'
},
appbarWrapper:{
    width:"80%",
    margin:"0 auto"
},

appbartitle:{
flexGrow:"1"
}

}))
const Headers=()=>
{
    const classes=useStyles();
 return(
     <div className={classes.root}>
     <AppBar className={classes.appbar} elevation=
     {0}><Toolbar className={classes.appbarWrapper}>
         <h1 className={classes.appbartitle}>Demo App</h1>
        
        <Typography >
            <Button  color="inherit">Home</Button>
        </Typography>
        <Typography>
            <Button  color="inherit">Find people</Button>
        </Typography>
        <Typography>
            <Button  color="inherit">Logout</Button>
        </Typography>
         </Toolbar>
     </AppBar>
     </div>
 )
}
export default Headers;