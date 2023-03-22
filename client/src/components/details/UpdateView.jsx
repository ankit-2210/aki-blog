import React, { useState, useEffect } from 'react'
import { Box, FormControl, Grid, makeStyles, Typography, InputBase, Button, TextareaAutosize } from "@material-ui/core";
import { Add, AddCircle } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { getPost, updatePost, uploadFile } from '../../service/api';

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

    }
}))


const UpdateView = ({ match }) => {
    const classes = useStyle();
    // const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    const history = useHistory();

    const [post, setpost] = useState([]);
    const [file, setFile] = useState("");
    const [ImageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPost(match.params.id);
            setpost(data);
            console.log(data);
        }
        fetchData();
    }, [])

    useEffect(() => {
        const Image = async () => {
            if (file) {
                let data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                // console.log(data);
                // console.log(FormData);

                const image = await uploadFile(data);
                post.picture = image.data;
                // console.log(post.picture);
                setImageUrl(image.data);
            }
        }
        Image();
    }, [file])


    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

    const handleUsers = (e) => {
        setpost({ ...post, [e.target.name]: e.target.value })
    }

    const updateBlog = async () => {
        await updatePost(match.params.id, post);
        history.push(`/details/${match.params.id}`);
    }


    return (
        <Box className={classes.container}>
            <img src={url} className={classes.image} alt="banner" />

            <FormControl className={classes.form}>
                <label htmlFor="file">
                    <AddCircle fontSize="large" color="action" />
                </label>
                <input type="file" id="file" hidden onChange={(e) => setFile(e.target.files[0])} />

                <InputBase placeholder="Title" value={post.title} className={classes.textField} onChange={(e) => handleUsers(e)} name="title" />

                <Button variant="contained" color="secondary" onClick={() => updateBlog()}>Update</Button>
            </FormControl>


            <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                value={post.description}
                onChange={(e) => handleUsers(e)}
                name="description"
            >
            </TextareaAutosize>

        </Box>
    )
}

export default UpdateView
