import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, FormControl, Grid, makeStyles, Typography, InputBase, Button, TextareaAutosize } from "@material-ui/core";
import signin from "../../images/signin-image.jpg"

import { createLogin } from '../../service/api';

import { UserContext } from '../../App';
import { LoginContext } from "../context/ContextProvider";


const useStyle = makeStyles({
    loginbtn: {
        background: '#FB6418',
        color: '#fff',
        borderRadius: 2,
        textTransform: 'none',
        height: 48,
    },
})


const initialState = {
    username: "",
    password: ""
}



const Login = () => {
    const classes = useStyle();
    const { state, dispatch } = useContext(UserContext);
    const { account, setAccount } = useContext(LoginContext);
    const history = useHistory();

    const [login, setlogin] = useState(initialState);


    const handleLogin = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value })
    }


    const loginButton = async () => {
        let response = await createLogin(login);
        // console.log(response);
        if (!response) {
            window.alert("Type data correctly");
            return;
        }

        setAccount(response.data);

        dispatch({ type: "USER", payload: true });
        // window.alert("Login Successfully");

        history.push("/");
    }


    return (
        <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src={signin} alt="sing up image" /></figure>
                        <a href="#" class="signup-image-link">Create an account</a>
                    </div>
                    <div class="signin-form">
                        <h2 class="form-title">Login Page</h2>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="username"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="username" id="username" placeholder="Your username" onChange={(e) => handleLogin(e)} />
                            </div>
                            <div class="form-group">
                                <label for="password"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" placeholder="Password" onChange={(e) => handleLogin(e)} />
                            </div>
                            <div class="form-group form-button">
                                {/* <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" /> */}
                                <Button className={classes.loginbtn} onClick={() => loginButton()}>Login</Button>
                            </div>
                        </form>
                        <div class="social-login">
                            <span class="social-label">Or login with</span>
                            <ul class="socials">
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Login
