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
    // maxWidth: 650,

  },
});

const Searchuser = () => {
  const token=localStorage.getItem('jwt');
  const history=useHistory();
  const classes = useStyles();
  const [users, setUsersprofile] = useState([]);

  const [searchusers, setSearch] = useState('')

  const HandleClick = (event) => {
    setSearch(event.target.value);
  };
  const paperstyle = { padding: 20, width: 620, margin: '40px auto' }
  const getUsers = async () => {
    const response = await fetch('http://localhost:5000/register', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    setUsersprofile(await response.json());
  }

  useEffect(() => {
    if (token === null) {
      window.alert("you must be signed in")
      history.push('/')
    }
    else {
      getUsers();
    }

  }, []);


  return (
    <div align="center">
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
                  users.filter(val=> {
                    if (searchusers === "") {
                      return val
                    }
                    else if (val.fName.toLowerCase().includes(searchusers.toLowerCase())) {
                      return val
                    }
                  }).map((val) => (
                    <TableRow key={val.id}>
                      <Link to={`/Searchuser/${val.id}`}>
                      <TableCell component="th" scope="row" >
                        {val.fName} {val.lName}
                      </TableCell>
                      </Link>
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