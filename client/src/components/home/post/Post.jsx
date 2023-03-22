import React from 'react'
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import { Link, useLocation } from 'react-router-dom';

const useStyle = makeStyles({
    container: {
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: '30px 20px 10px 40px',
        // marginLeft: 20,
        // margin: '20px 20px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        // height: 400,
        // width: '20%'
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        height: 150,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0'
    },
    textColor: {
        color: '#878787',
        fontSize: 14
    },
    heading: {
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center'
    },
    detail: {
        fontSize: 14,
        fontWeight: 'break-word'
    },
    button: {
        background: '#6495ED',
        color: '#fff',
        margin: 30,
        textDecoration: 'none',
        width: '90%',
        textAlign: 'center',
        marginLeft: 10
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
})

const Post = ({ post }) => {
    const classes = useStyle();
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';

    const Ellipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + "...." : str;
    }


    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />
            <Typography className={classes.textColor}>{post.category}</Typography>
            <Typography className={classes.heading}>{Ellipsis(post.title, 20)}</Typography>
            <Typography className={classes.textColor}>{post.username}</Typography>
            <Typography className={classes.detail}>{Ellipsis(post.description, 160)}</Typography>
            <Link to={`/details/${post._id}`} className={classes.link}><Button variant="contained" className={classes.button}>Read more</Button></Link>
        </Box>
    )
}

export default Post
