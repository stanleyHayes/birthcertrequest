import {Box, Button, Card, CardContent, Divider, Grid, Stack, TextField, Typography} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {REQUEST_ACTION_CREATORS} from "../../redux/request/request-action-creators";
import {useDispatch, useSelector} from "react-redux";
import {selectRequest} from "../../redux/request/request-reducer";
import {useState} from "react";

const Client = () => {

    const {page, client: c} = useSelector(selectRequest);
    const dispatch = useDispatch();

    const [client, setClient] = useState({...c});
    const [error, setError] = useState({name: null, phone: null, email: null});

    const {name, phone, email} = client;

    const handleChange = event => {
        setClient({...client, [event.target.name]: event.target.value});
    }
    const handleButtonClick = () => {


        dispatch(REQUEST_ACTION_CREATORS.nextPage());
    }

    return (
        <Box>
            <Card elevation={1} variant="elevation">
                <CardContent>
                    <Typography gutterBottom={true} variant="h4" align="center">Client</Typography>

                    <Stack direction="column" spacing={2}>
                        <Box>
                            <TextField
                                fullWidth={true}
                                label="Name"
                                required={true}
                                size="medium"
                                error={Boolean(error.name)}
                                margin="dense"
                                helperText={error.name}
                                variant="outlined"
                                name="name"
                                onChange={handleChange}
                                value={name}
                                placeholder="Enter name"
                            />
                        </Box>

                        <Box>
                            <TextField
                                fullWidth={true}
                                label="Email"
                                required={true}
                                size="medium"
                                error={Boolean(error.email)}
                                helperText={error.email}
                                variant="outlined"
                                name="email"
                                onChange={handleChange}
                                value={email}
                                type="email"
                                placeholder="Enter email"
                            />
                        </Box>


                        <Box>
                            <TextField
                                fullWidth={true}
                                label="Phone"
                                required={true}
                                size="medium"
                                error={Boolean(error.phone)}
                                helperText={error.phone}
                                variant="outlined"
                                name="phone"
                                onChange={handleChange}
                                value={phone}
                                placeholder="Enter phone number"
                            />
                        </Box>

                    </Stack>

                    <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                    <Grid container={true} justifyContent="space-between" spacing={2}>
                        <Grid item={true} xs={12} md="auto">
                            <Button
                                variant="outlined"
                                startIcon={<ChevronLeft/>}
                                fullWidth={true}
                                size="large"
                                color="secondary"
                                disabled={page === 0}>
                                Previous
                            </Button>
                        </Grid>

                        <Grid item={true} xs={12} md="auto">
                            <Button
                                onClick={handleButtonClick}
                                size="large"
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

export default Client;
