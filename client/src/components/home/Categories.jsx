import React, { useContext } from 'react'
import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { categories } from '../../constants/data';
import { Link, useLocation } from 'react-router-dom';

import { UserContext } from '../../App';
import { LoginContext } from "../context/ContextProvider"

const useStyles = makeStyles({
    button: {
        background: '#6495ED',
        color: '#fff',
        margin: 30,
        textDecoration: 'none',
        width: '90%',
    },
    table: {
        border: '1px solid rgba(224, 224, 224, 1)',
        margin: '20px',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
})

const Categories = () => {
    const classes = useStyles();

    const { state, dispatch } = useContext(UserContext);
    const { account, setAccount } = useContext(LoginContext);

    return (
        <>
            {
                state ? <Link to="/create" className={classes.link}><Button variant="contained"
                    className={classes.button}>Create Blog</Button></Link>
                    :
                    <Button variant="contained"
                        className={classes.button}>Login to create Blog</Button>
            }
            <Table className={classes.table}>
                <TableHead>
                    <Link to={"/"} className={classes.link}>
                        <TableCell>All Categories</TableCell>
                    </Link>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell>
                                    <Link to={`/?category=${category}`} className={classes.link}>
                                        {category}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </>
    )
}

export default Categories
