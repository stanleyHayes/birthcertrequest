import {Box, Button, Card, CardContent, Divider, Grid, Typography} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {selectRequest} from "../../redux/request/request-reducer";
import {REQUEST_ACTION_CREATORS} from "../../redux/request/request-action-creators";

const Welcome = () => {

    const {page} = useSelector(selectRequest);
    const dispatch = useDispatch();


    return (
        <Box>
            <Card elevation={1} variant="elevation">
                <CardContent>
                    <Typography
                        gutterBottom={true}
                        variant="h4"
                        align="center">
                        Welcome
                    </Typography>

                    <Typography color="light" variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>

                    <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                    <Grid container={true} justifyContent="space-between" spacing={2}>
                        <Grid item={true} xs={12} md="auto">
                            <Button
                                onClick={() => dispatch(REQUEST_ACTION_CREATORS.previousPage())}
                                variant="outlined"
                                startIcon={<ChevronLeft/>}
                                fullWidth={true}
                                size="medium"
                                color="secondary"
                                disabled={page === 0}>
                                Previous
                            </Button>
                        </Grid>

                        <Grid item={true} xs={12} md="auto">
                            <Button
                                onClick={() => dispatch(REQUEST_ACTION_CREATORS.nextPage())}
                                size="medium"
                                variant="contained"
                                disableElevation={true}
                                fullWidth={true}
                                endIcon={<ChevronRight/>}
                                disabled={page === 6}>
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Welcome;
