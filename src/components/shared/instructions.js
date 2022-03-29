import {Box, Button, Card, CardContent, Divider, Grid, Typography} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {REQUEST_ACTION_CREATORS} from "../../redux/request/request-action-creators";
import {useDispatch, useSelector} from "react-redux";
import {selectRequest} from "../../redux/request/request-reducer";

const Instructions = () => {

    const {page} = useSelector(selectRequest);
    const dispatch = useDispatch();

    return (
        <Box>
            <Card elevation={1} variant="elevation">
                <CardContent>
                    <Typography variant="h4" align="center">Instructions</Typography>

                    <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                    <Grid container={true} justifyContent="space-between" spacing={2}>
                        <Grid item={true} xs={12} md="auto">
                            <Button
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

export default Instructions;
