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
import OtherUser from './OtherUser';
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

const Searchuser = () => {
  const token=localStorage.getItem('jwt');

  const history=useHistory();

  const classes = useStyles();

  const [users, setUsersprofile] = useState([]);
  
  const [searchusers, setSearch] = useState([])

  const HandleClick = (event) => {
    setSearch(event.target.value);
  };
  const paperstyle = { padding: 20, width: 620, margin: '40px auto' }
  
  useEffect(() => {
    if (token === null) {
     
      history.push('/')
    }
    else {
    fetch('http://localhost:5000/search_user',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem('jwt')
      }
    }).then(res=>res.json()).then(result=>{
       console.log(result);
       setUsersprofile(result);
    })
    }

  }, []);
  return (
    <div align="center">
      <HomeNav/>
      <Paper elevation={10} style={paperstyle}>
        <Card className={classes.root}>
          <form>
            <TextField id="standard-basic" placeholder="Search here" value={searchusers} onChange={HandleClick} fullWidth />
          </form>
          <CardContent>
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableBody>
                  {
                  users.map((vals) => (
                    <TableRow > 
                                        
                      <TableCell >
                      <Link to={`/Searchuser/${vals._id}`}>                      
                        {vals.email}
                        </Link>                      
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
export default Searchuser;