import React, { useState, useEffect, useContext } from 'react'
import { Box, makeStyles, TextareaAutosize, Button, Typography } from "@material-ui/core";

import { getComment, newComment } from '../../../service/api';
import Comment from "../comments/Comment";

import { UserContext } from '../../../App';
import { LoginContext } from '../../context/ContextProvider';

const useStyles = makeStyles({
    container: {
        marginTop: 100,
        display: 'flex'
    },
    textarea: {
        height: 100,
        width: '100%',
        margin: '0 20px'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: '50%'
    },
    button: {
        height: 40
    },
    comment: {
        fontSize: 30,
        fontWeight: 500,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    }
})

const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}


const Comments = ({ post }) => {
    const classes = useStyles();
    const url = 'https://static.thenounproject.com/png/12017-200.png'

    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
    const [data, setData] = useState();
    const [toggle, setToggle] = useState(false);

    const { state, dispatch } = useContext(UserContext);
    const { account, setAccount } = useContext(LoginContext);

    // console.log(comments);

    useEffect(() => {
        const getData = async () => {
            const response = await getComment(post._id);

            setComments(response);
            // console.log(response);
        }
        getData();

    }, [toggle, post]);

    const getValues = (e) => {
        setComment({ ...comment, name: account, postId: post._id, comments: e.target.value });
        setData(e.target.value);
    }

    const addComment = async () => {
        await newComment(comment);
        setData("");
        setToggle(prev => !prev);
    }


    return (
        <Box>
            {
                state ?
                    <Box className={classes.container}>
                        <img src={url} className={classes.image} />
                        <TextareaAutosize rowsMin={5} placeholder="What's on your mind?" className={classes.textarea} value={data} onChange={(e) => getValues(e)} />
                        <Button variant="contained" color="primary" size="medium" className={classes.button} onClick={(e) => addComment(e)}>Post</Button>
                    </Box>
                    :
                    <Box className={classes.container}>
                        <Typography className={classes.comment}>Login In to Comment</Typography>
                    </Box>
            }
            <Box>
                {
                    comments && comments.map(comment => (
                        <Comment comment={comment} post={post} account={account} setToggle={setToggle} />
                    ))
                }
            </Box>

        </Box>

    )
}

export default Comments
