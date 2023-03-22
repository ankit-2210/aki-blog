import React, { useEffect, useState, useContext } from 'react'
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";

import { getPost, deletePost } from '../../service/api';
import Comments from './comments/Comments';

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
    icons: {
        float: 'right'
    },
    icon: {
        border: '1px solid #878787',
        margin: 5,
        padding: 5,
        borderRadius: 10,
        fontSize: 40
    },
    heading: {
        fontSize: 35,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    subHeading: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    detail: {
        width: '100%',
        marginTop: 50,
        fontSize: 18,
        border: 'none',
        '&:focus-visible': {
            outline: 'none'
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}))

const DetailView = ({ match }) => {
    const classes = useStyle();
    // const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    const history = useHistory();

    const [post, setpost] = useState([]);

    const { state, dispatch } = useContext(UserContext);
    const { account, setAccount } = useContext(LoginContext);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPost(match.params.id);
            setpost(data);
            // console.log(data);
        }
        fetchData();
    }, [])

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';


    const deleteBlog = async () => {
        await deletePost(post._id);
        history.push("/");
    }


    return (
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} />
            <Box className={classes.icons}>
                {
                    account === post.username &&
                    <>
                        <Link to={`/update/${post._id}`}><Edit color="primary" className={classes.icon} /></Link>
                        <Delete color="error" className={classes.icon} onClick={() => deleteBlog()} />
                    </>
                }
            </Box>

            <Typography className={classes.heading}>{post.title}</Typography>

            <Box className={classes.subHeading}>
                <Link to={`/?username=${post.username}`} className={classes.link}>
                    <Typography>Author: <span style={{ fontWeight: 600 }}> {post.username} </span></Typography>
                </Link>
                <Typography style={{ marginLeft: 'auto' }}>{new Date(post.createDate).toDateString()}</Typography>
            </Box>

            <Typography className={classes.detail}>{post.description}</Typography>

            <Comments post={post} />
        </Box>
    )

}

export default DetailView
