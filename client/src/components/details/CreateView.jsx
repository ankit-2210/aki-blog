import React, { useState, useEffect, useContext } from 'react'
import { Box, FormControl, Grid, makeStyles, Typography, InputBase, Button, TextareaAutosize } from "@material-ui/core";
import { Add, AddCircle } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { createPost, uploadFile } from '../../service/api';

import { UserContext } from '../../App';
import { LoginContext } from "../context/ContextProvider"

const useStyle = makeStyles((theme) => ({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20
    },
    textField: {
        flex: 1,
        fontSize: 25,
        margin: '0 45px'
    },
    textarea: {
        width: '100%',
        marginTop: 50,
        fontSize: 18,
        border: 'none',
        '&:focus-visible': {
            outline: 'none'
        }
    },
    custom: {
        marginTop: 50,
        padding: 7,
        marginLeft: 10
    }
}))

const initialState = {
    title: "",
    description: "",
    picture: "",
    username: "",
    category: "",
    createDate: new Date()
}

const CreateView = () => {
    const classes = useStyle();
    // const url = post'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    const history = useHistory();

    const { state, dispatch } = useContext(UserContext);
    const { account, setAccount } = useContext(LoginContext);

    const [post, setpost] = useState(initialState);
    const [file, setFile] = useState("");
    const [ImageUrl, setImageUrl] = useState("");

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'


    useEffect(() => {
        const Image = async () => {
            if (file) {
                let data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const image = await uploadFile(data);
                post.picture = image.data;

                setImageUrl(image.data);

            }
        }
        Image();

        post.username = account;
    }, [file])


    const handleUsers = (e) => {
        setpost({ ...post, [e.target.name]: e.target.value })
    }

    const Post = async () => {
        await createPost(post);
        history.push("/");
    }

    return (
        <Box className={classes.container}>
            <img src={url} className={classes.image} alt="banner" />


            <select className={classes.custom} id="inputGroupSelect01" onChange={(e) => handleUsers(e)} name="category">
                <option defaultValue>Choose...</option>
                <option value="Music"> Music </option>
                <option value="Movies"> Movies </option>
                <option value="Sports"> Sports </option>
                <option value="Tech"> Tech </option>
                <option value="Fashion"> Fashion</option>
            </select>


            <FormControl className={classes.form}>

                <label htmlFor="file">
                    <AddCircle fontSize="large" color="action" />
                </label>
                <input type="file" id="file" hidden onChange={(e) => setFile(e.target.files[0])} />

                <InputBase placeholder="Title" className={classes.textField} onChange={(e) => handleUsers(e)} name="title" />

                <Button variant="contained" color="primary" onClick={() => Post()}>Publish</Button>
            </FormControl>


            <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                onChange={(e) => handleUsers(e)}
                name="description"
            >
            </TextareaAutosize>

        </Box>
    )
}

export default CreateView
