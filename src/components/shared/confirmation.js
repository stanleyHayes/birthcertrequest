import {Avatar, Box, Button, Card, CardContent, Divider, Grid, Typography} from "@mui/material";
import {REQUEST_ACTION_CREATORS} from "../../redux/request/request-action-creators";
import {useDispatch, useSelector} from "react-redux";
import {selectRequest} from "../../redux/request/request-reducer";

const Confirmation = () => {

    const {page} = useSelector(selectRequest);
    const dispatch = useDispatch();

    return (
        <Box>
            <Card elevation={1} variant="elevation">
                <CardContent>
                    <Typography variant="h4" align="center">Confirmation</Typography>

                    <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                    <Box mb={4}>
                        <Grid container={true} mb={4} justifyContent="center">
                            <Grid item={true}>
                                <Avatar src="/assets/images/success.png" sx={{width: 40, height: 40}}/>
                            </Grid>
                        </Grid>

                        <Typography gutterBottom={true} variant="h6" align="center">
                            Your request has been submitted successfully.
                        </Typography>

                        <Typography variant="body1" align="center">
                            Monitor your email and text message to know when your birth certificate is ready
                        </Typography>
                    </Box>

                    <Grid container={true} justifyContent="center">
                        <Grid item={true} xs={12} md="auto">
                            <Button
                                onClick={() => dispatch(REQUEST_ACTION_CREATORS.gotoPage(0))}
                                size="medium"
                                variant="contained"
                                disableElevation={true}
                                fullWidth={true}>
                                Submit another request
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Confirmation;
