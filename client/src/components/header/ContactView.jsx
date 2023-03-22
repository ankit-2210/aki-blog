import { Typography } from '@material-ui/core';
import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';

import { UserContext } from '../../App';
import { LoginContext } from '../context/ContextProvider';

import { UserContact } from '../../service/api';


const useStyles = makeStyles({
    button: {
        background: '#6495ED',
        color: '#fff',
        margin: 20,
        textDecoration: 'none',
        width: '90%',
        padding: '30px 30px',
        fontSize: 30,
        borderRadius: '20px'
    },
})

const initialState = {
    name: "",
    email: "",
    phone: "",
    messages: ""
}


const ContactView = () => {
    const classes = useStyles();
    const history = useHistory();

    const { state, dispatch } = useContext(UserContext);
    const { account, setAccount } = useContext(LoginContext);

    const [contact, setcontact] = useState(initialState);

    const handleContact = (e) => {
        setcontact({ ...contact, [e.target.name]: e.target.value })
    }


    const ContactButton = async () => {
        let response = await UserContact(contact);

        history.push("/contact");
        console.log(response);
        // if (!response) {
        window.alert("Contact send successfully");
        // return;

        history.push("/");
    }


    return (
        <>
            <section class="sign-in">
                <div class="container">
                    <div class="signin-content">
                        <div class="col-md-5 mr-auto">
                            <h2>Contact Us</h2>
                            <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quaerat autem corrupti asperiores accusantium et fuga! Facere excepturi, quo eos, nobis doloremque dolor labore expedita illum iusto, aut repellat fuga!</p>
                            <ul class="list-unstyled pl-md-5 mb-5">
                                <li class="d-flex text-black mb-2">
                                    <span class="mr-3"><span class="icon-map"><i className="zmdi zmdi-home"></i></span></span> 34 Street Name, City Name Here, <br /> United States
                                </li>
                                <li class="d-flex text-black mb-2"><span className="mr-3"><i className="zmdi zmdi-phone"></i></span> +1 (222) 345 6789</li>
                                <li class="d-flex text-black"><span class="mr-3"><i className="zmdi zmdi-email"></i></span><span>ankit12@gmail.com</span></li>
                            </ul>
                        </div>
                        <div class="signin-form">
                            <h2 class="form-title">Get in Touch</h2>
                            <form method="POST" class="register-form" id="login-form">
                                <div class="form-group">
                                    <input type="text" class="form-control" name="name" id="name" placeholder="Your Name" name="name" onChange={(e) => handleContact(e)} />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" name="email" onChange={(e) => handleContact(e)} />
                                </div>
                                <div class="form-group">
                                    <input type="number" class="form-control" name="phone" id="phone" placeholder="Your Phone No." name="phone" onChange={(e) => handleContact(e)} />
                                </div>
                                <div class="form-group">
                                    <textarea type="text" class="form-control" name="messages" id="messages" cols="30" rows="10" name="messages" placeholder="Message" onChange={(e) => handleContact(e)}></textarea>
                                </div>
                                <div class="form-group form-button">
                                    {
                                        state ?
                                            <Button value="Send" variant="contained" color="secondary" onClick={() => ContactButton()}>Send</Button>
                                            : <Link variant="contained" to="/login"
                                                className={classes.button}>First Login</Link>

                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )


}

export default ContactView
