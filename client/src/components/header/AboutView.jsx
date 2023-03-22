import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, Instagram, Email, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const AboutView = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Ankit Agarwal</Typography>
                <Typography variant="h5" className={classes.text}>I want to become Software Engineer based in India.<br />

                    I've built multiple websites based on MERN and PHP language.<br />

                    I love to do coding daily based challenge. If you want to reach my profile, Reach out
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://leetcode.com/ankit_2210/" color="inherit" target="_blank">href</Link>
                    </Box>
                </Typography>
                <Typography variant="h5" className={classes.text}>
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="www.linkedin.com/in/ankit-2210" color="inherit" target="_blank">
                            <LinkedIn />
                        </Link>
                    </Box>
                    or send me an Email
                    <Link href="ankit.agarwal@gmail.com" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Typography>
            </Box >
        </Box >
    )
}

export default AboutView;

