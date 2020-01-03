import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, FormControl, TextField, Toolbar, Typography } from '@material-ui/core';

// import IconButton from '@material-ui/core/IconButton';
import { NavLink } from "react-router-dom";

import { ContextStore } from "reducer"


const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flex: 1,
    textAlign: 'center',
    borderRadius: '10px'

  },
  active: {
    background: 'rgba(0, 0, 0, 0.5)',
    padding: "5px",
    borderRadius: "10px"
  },
  amount: {
    flex: 2,
    marginLeft: "10px",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { state } = useContext(ContextStore);
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
           <FormControl className={classes.amount}>
            <TextField margin="normal" label="零用金總額" defaultValue="15000" />
          </FormControl>
          <FormControl className={classes.amount}>
            <TextField margin="normal" label="現金餘額" defaultValue="28" />
          </FormControl>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <NavLink className="announcement-data-name" exact={true} activeClassName={classes.active} to="/add">
              新增
            </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink className="announcement-data-name" exact={true} activeClassName={classes.active} to="/list">
              列表
            </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink className="announcement-data-name" exact={true} activeClassName={classes.active} to="/setting">
              設定
            </NavLink>
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}