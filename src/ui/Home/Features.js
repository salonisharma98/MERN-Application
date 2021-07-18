import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core"
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    textAlign:"center",
    marginTop:"30px",
    marginBottom:"30px",
    alignItems:'center',
    justify:'center'  ,
    marginLeft:"20px",
    marginRight:"20px"
   
  },
  
  title: {
    // fontSize: "20px",
  },
  
  features:{
      textAlign:"center",     
  },
  wrapcontainer:{
       
        alignItems:'center',
    justify:'center'  ,
       
  },
  box:{
      alignItems:"center",
  },
//   cover:{
//       alignItems:"center",
//   },
  texts:{
      fontSize:"20px",
  }
});

const Features=()=>{
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <Container>
          <Grid container className={classes.wrapcontainer} >
          <Grid item md={4} xs={12} className={classes.features}>
          <Card className={classes.root} elevation={6}>
            <CardContent> 
             <Typography className={classes.title} color="textSecondary" gutterBottom>
               <p className={classes.texts}>Pay easy</p>
             </Typography>               
            </CardContent>
             </Card>
           </Grid>
           <Grid item md={4} xs={12} className={classes.features}>
          <Card className={classes.root} elevation={6}>
            <CardContent> 
             <Typography className={classes.title} color="textSecondary" gutterBottom>
              <p className={classes.texts}> Easy return</p>
             </Typography>               
            </CardContent>
             </Card>
           </Grid>
           <Grid item md={4} xs={12} className={classes.features}>
          <Card className={classes.root} elevation={6}>
            <CardContent> 
             <Typography className={classes.title} color="textSecondary" gutterBottom>
              <p className={classes.texts}>Get latest fashion</p>
             </Typography>               
            </CardContent>
             </Card>
           </Grid> 
           </Grid>
           <Grid container className={classes.wrapcontainer} >
          <Grid item md={4} xs={12} className={classes.features}>
          <Card className={classes.root} elevation={6}>
            <CardContent> 
             <Typography className={classes.title} color="textSecondary" gutterBottom>
               <p className={classes.texts}>Pay easy</p>
             </Typography>               
            </CardContent>
             </Card>
           </Grid>
           <Grid item md={4} xs={12} className={classes.features}>
          <Card className={classes.root} elevation={6}>
            <CardContent> 
             <Typography className={classes.title} color="textSecondary" gutterBottom>
              <p className={classes.texts}> Easy return</p>
             </Typography>               
            </CardContent>
             </Card>
           </Grid>
           <Grid item md={4} xs={12} className={classes.features}>
          <Card className={classes.root} elevation={6}>
            <CardContent> 
             <Typography className={classes.title} color="textSecondary" gutterBottom>
              <p className={classes.texts}>Get latest fashion</p>
             </Typography>               
            </CardContent>
             </Card>
           </Grid> 
           </Grid>       
      </Container>   
  );
}
export default Features;
