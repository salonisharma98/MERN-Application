import React, { useEffect, useState } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  appbar: {
    backgroundColor: "transparent",
    boxShadow: "4px 4px 4px 4px gainsboro",
    padding: "8px"
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto"
  },
  appbartitle: {
    flexGrow: "1",
    fontSize: "34px",
    color: "#004279"
  },
  // navbtn: {
  //   marginLeft: "8px",
  //   marginRight: "8px",
  //   fontSize: "16px"
  // }
}));

const Nav = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation=
        {0} position="static">
        <Toolbar className={classes.appbarWrapper}>
          <div>
            <h1 className={classes.appbartitle}><b>Demo App</b></h1>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );

}
export default Nav;