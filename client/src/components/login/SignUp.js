import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, FormControl, Grid, makeStyles, Typography, InputBase, Button, TextareaAutosize } from "@material-ui/core";
import signup from "../../images/signup-image.jpg";

import { createSingin } from '../../service/api';


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
    name: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
    createDate: new Date()
}

const SignUp = () => {
    const classes = useStyle();
    const history = useHistory();

    const [signIn, setsignIn] = useState(initialState);


    const handleSighIn = (e) => {
        setsignIn({ ...signIn, [e.target.name]: e.target.value })
    }


    const SighIn = async () => {
        await createSingin(signIn);
        history.push("/login");
    }


    return (
        <>
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" id="name" placeholder="Enter Your Name"
                                        onChange={(e) => handleSighIn(e)} />
                                </div>
                                <div className="form-group">
                                    <label for="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Enter Your Email"
                                        onChange={(e) => handleSighIn(e)} />
                                </div>
                                <div className="form-group">
                                    <label for="username"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="username" id="username" placeholder="Enter Your Username"
                                        onChange={(e) => handleSighIn(e)} />
                                </div>
                                <div className="form-group">
                                    <label for="password"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="password" id="password" placeholder="Password"
                                        onChange={(e) => handleSighIn(e)} />
                                </div>
                                <div className="form-group">
                                    <label for="cpassword"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Your password"
                                        onChange={(e) => handleSighIn(e)} />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all
                                        statements in <a href="#" class="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group form-button">
                                    {/* <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={() => SighIn()} /> */}
                                    <Button className={classes.loginbtn} onClick={() => SighIn()}>Sign Up</Button>
                                </div>
                            </form>
                        </div>
                        <div class="signup-image">
                            <figure><img src={signup} alt="sing up image" /></figure>
                            {/* <a href="#" class="signup-image-link">I am already member</a> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp
