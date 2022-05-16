import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from "jwt-decode";
import * as actionType from '../../constants/actionTypes';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
//import berries from '../../images/berries.jpg';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        history.push('/');
    
        setUser(null);
      };

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime())
          logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Recipe Collection</Typography>
                {/* <img className={classes.image} src={berries} alt="icon" height="20" /> */}
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.button} onClick={logout}>Log Out</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" className={classes.button} variant="contained">Sign In</Button>
                )}
            </Toolbar>
      </AppBar>
    //dont forget component={Link}/ <Link> will only work inside a <BrowserRouter>
    );
};

export default Navbar;