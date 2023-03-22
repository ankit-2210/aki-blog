import React, { useState, useEffect, useContext } from 'react'
import Post from './Post';
import { Grid, makeStyles, Button } from "@material-ui/core";
import { Link, useLocation } from 'react-router-dom';

import { getAllPosts } from '../../../service/api';

import { UserContext } from '../../../App';
import { LoginContext } from "../../context/ContextProvider"

const useStyles = makeStyles({
    details: {
        textDecoration: 'none',
        color: 'inherit'
    }
})


const Posts = () => {
    const classes = useStyles();

    const [posts, setposts] = useState([]);
    const { search } = useLocation();

    const { state, dispatch } = useContext(UserContext);
    const { account, setAccount } = useContext(LoginContext);

    // let posts = [1, 2, 3, 4, 5, 6];

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllPosts(search);  // param in url 
            setposts(data);
            // console.log(data);
        }
        fetchData();
    }, [search])


    return (
        <>
            {
                posts.map(post => (
                    <Grid item lg={4} sm={6} xs={12}>
                        <Link to={`/details/${post._id}`} className={classes.details}>
                            <Post post={post} />

                        </Link>
                    </Grid>
                ))
            }
        </>
    )
}

export default Posts

