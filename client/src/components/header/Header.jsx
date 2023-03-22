import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

import { UserContext } from '../../App';
import { LoginContext } from "../context/ContextProvider"


const useStyles = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '& > *': {
            padding: 20
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    user: {
        color: "red"
    }
})


const Header = () => {
    // console.log(account);

    const classes = useStyles();
    const { state, dispatch } = useContext(UserContext);
    const { account, setAccount } = useContext(LoginContext);

    // console.log(account);

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <Link className={classes.link} to="/"><Typography>Home</Typography></Link>
                    <Link className={classes.link} to="/about">About</Link>
                    <Link className={classes.link} to="/contact">Contact</Link>
                    {/* <Typography>Login</Typography> */}
                    <Typography className={classes.user}>{account}</Typography>
                    <Link className={classes.link} to="/logout">Logout</Link>
                    {/* <NavLink className="nav-link mx-2" to="/signup">Sign Up</NavLink> */}
                    {/* <Typography>Sign Up</Typography> */}
                </>
            )
        }
        else {
            return (
                <>
                    <Link className={classes.link} to="/"><Typography>Home</Typography></Link>
                    <Link className={classes.link} to="/about">About</Link>
                    <Link className={classes.link} to="/contact">Contact</Link>
                    {/* <Typography>Login</Typography> */}
                    <Link className={classes.link} to="/login">Login</Link>
                    <Link className={classes.link} to="/signup">Sign Up</Link>
                    {/* <Typography>Sign Up</Typography> */}
                </>
            )
        }
    }


    return (

        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <RenderMenu />
            </Toolbar>
        </AppBar>
    )
}

export default Header
