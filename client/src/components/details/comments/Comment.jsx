import React from 'react'
import { Box, makeStyles, TextareaAutosize, Button, Typography } from "@material-ui/core";

import { Delete } from '@material-ui/icons';
import { deleteComment } from '../../../service/api';

const useStyle = makeStyles({
    component: {
        marginTop: 30,
        background: '#F5F5F5',
        padding: 10,
        marginBottom: 30
    },
    container: {
        display: 'flex',
        marginBottom: 5
    },
    delete: {
        marginLeft: 'auto'
    }
})

const Comment = ({ comment, post, account, setToggle }) => {
    const classes = useStyle();

    const removeComment = async () => {
        await deleteComment(comment._id);
        setToggle(prev => !prev);
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <Typography>{comment.name}</Typography>
                <Typography>{new Date(comment.date).toDateString()}</Typography>
                {
                    account === post.username &&
                    <Delete color="error" className={classes.delete} onClick={() => removeComment()} />
                }
            </Box>
            <Typography>{comment.comments}</Typography>
        </Box>
    )
}

export default Comment
