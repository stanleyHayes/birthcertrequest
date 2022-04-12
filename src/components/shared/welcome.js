import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {ChevronRight} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {selectRequest} from "../../redux/request/request-reducer";
import {REQUEST_ACTION_CREATORS} from "../../redux/request/request-action-creators";
import {makeStyles} from "@mui/styles";

const Welcome = () => {

    const {page} = useSelector(selectRequest);
    const dispatch = useDispatch();


    const useStyles = makeStyles(theme => {
        return {
            container: {},
            bannerImage: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                objectFit: 'cover',
                objectPosition: 'top'
            },
            bannerRoot: {
                position: 'relative',
                height: '100vh',
                [theme.breakpoints.down('md')]: {
                    height: '100vh'
                },
                [theme.breakpoints.down('sm')]: {
                    height: '100vh'
                },
                width: '100%',
            },
            bannerContent: {
                width: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                zIndex: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                height: '100%'
            },
            icon: {
                width: 50,
                height: 50,
                borderRadius: theme.shape.borderRadius
            },
            whyChooseUsImage: {
                width: '100%',
                height: '100%',
                objectPosition: 'center',
                objectFit: 'cover'
            },
            link: {
                textDecoration: 'none'
            },
            clientContainer: {
                marginLeft: 4,
                marginRight: 4
            }
        }
    });

    const classes = useStyles();

    return (
        <Box className={classes.bannerRoot}>
            <Box className={classes.bannerContent}>
                <Container
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                    }}>
                    <Grid
                        alignItems="center"
                        container={true}>
                        <Grid item={true} xs={12} md={8} lg={6}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bolder'
                                }}
                                mb={2}
                                variant="h2">Welcome</Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                                mb={2}
                                variant="h5">
                                Designed to fast track your birth certificate application.
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontWeight: 500
                                }}
                                mb={8}
                                paragraph={true}>
                                This is an online application process for your birth certificate.
                                Provide the required information void of mistakes and wait for our magic.
                                We dey give you!
                            </Typography>
                        </Grid>
                        <Grid
                            container={true}
                            spacing={2}
                            alignItems="center">
                            <Grid item={true} xs={12} sm={6} md={4}>
                                <Button
                                    sx={{borderWidth: 2, color: 'white', borderColor: 'white'}}
                                    color="primary"
                                    variant="outlined"
                                    size="large"
                                    fullWidth={true}
                                    onClick={() => dispatch(REQUEST_ACTION_CREATORS.nextPage())}
                                    disableElevation={true}
                                    endIcon={<ChevronRight/>}
                                    disabled={page === 6}>
                                    Get Started
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <img className={classes.bannerImage} alt="" src="/assets/images/welcome.jpg"/>
        </Box>
    )
}

export default Welcome;
