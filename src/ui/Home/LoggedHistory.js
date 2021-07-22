import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {useHistory,Link} from 'react-router-dom';
import HomeNav from './HomeNav';

const useStyles = makeStyles({
  root: {
    // maxWidth: 275,
    justifyContent: "center"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  table: {
    padding:"10px",

  },
});

const LoggedHistory = () => {
  const token=localStorage.getItem('jwt');

  const history=useHistory();

  const classes = useStyles();

  const [users, setUsersHistory] = useState([]);
  
  const paperstyle = { padding: 20, width: 620, margin: '40px auto' }
  
  const id=localStorage.getItem('user')
  const JSONfromatedId = JSON.parse(id)
  const LoggedData = async (e) => {	
		const res = await fetch(`http://localhost:5000/search_user/${JSONfromatedId._id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				'Accept': 'application/json'
			},			
		});
		const data = await res.json();
		console.log(data," i am data");
    const result=await data.logoutHistory
    console.log(result,"i am result")
    setUsersHistory(result);
	}
    useEffect(() => {
      if(token===null)
    {			
      console.log('in if')
				history.push('/');		   
    }
    else{
     
      // console.log('in else')
      // fetch(`http://localhost:5000/search_user/${JSONfromatedId._id}`).then(res=>res.json().then(res=>{
      //   console.log(res.logoutHistory,'i am response')
      //   setUser(res.logoutHistory)
      //   console.log(users,"user history")
      // }).catch(error=>{
      //   console.log(error,'i am error')
      // }))
      LoggedData()
    }
  },[])
  
  return (
    <div align="center">
      <HomeNav/>
      <Paper elevation={10} style={paperstyle}>
        <Card className={classes.root}>
          <CardContent>
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableBody>
                  {
                  users.map((vals) => (
                    <TableRow key={vals._id} > 
                                        
                      <TableCell  >                 
                     
                      
                         
                              <p>{vals.date}</p>
                            
                           </TableCell>       
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
}
export default LoggedHistory;