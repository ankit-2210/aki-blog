import React from 'react'
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    image: {
        // background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        background: `url(${'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg'}) center/55% repeat-x #000`,
        height: '50vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',

        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',

        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            color: 'black',
            fontSize: 50,
            lineHeight: 1,
            fontWeight: 600,

        },
        '& :last-child': {
            fontSize: 20,
            // background: '#FFFFFF',
            color: 'grey',
            fontWeight: 1000,
        },

    }
})

const Banner = () => {
    const classes = useStyle();
    const url = 'https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg';
    // const url = 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg';
    return (
        <Box className={classes.image}>
            <Typography>BLOG SITE</Typography>
            <Typography>Empowering mothers, Transforming motherhood
            </Typography>
        </Box>
    )
}

export default Banner
