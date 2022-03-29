import {Box, Button, Card, CardContent, Divider, Grid, Stack, TextField, Typography} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {REQUEST_ACTION_CREATORS} from "../../redux/request/request-action-creators";
import {useDispatch, useSelector} from "react-redux";
import {selectRequest} from "../../redux/request/request-reducer";
import {useState} from "react";

const Payment = () => {
    const {page, payment: p} = useSelector(selectRequest);
    const dispatch = useDispatch();

    const [payment, setPayment] = useState({...p});
    const [error, setError] = useState({name: null, phone: null, reference: null, amount: null});

    const {name, phone, reference, amount} = payment;

    const handleChange = event => {
        setPayment({...payment, [event.target.name]: event.target.value});
    }
    const handleButtonClick = () => {


        dispatch(REQUEST_ACTION_CREATORS.nextPage());
    }

    return (
        <Box>
            <Card elevation={1} variant="elevation">
                <CardContent>
                    <Typography variant="h4" align="center">Payment</Typography>

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

                        <Box>
                            <TextField
                                fullWidth={true}
                                label="Amount"
                                required={true}
                                size="medium"
                                error={Boolean(error.amount)}
                                helperText={error.amount}
                                variant="outlined"
                                name="amount"
                                onChange={handleChange}
                                value={amount}
                                type="number"
                                placeholder="Enter amount paid"
                            />
                        </Box>

                        <Box>
                            <TextField
                                fullWidth={true}
                                label="Reference Code"
                                required={true}
                                size="medium"
                                error={Boolean(error.reference)}
                                helperText={error.reference}
                                variant="outlined"
                                name="email"
                                onChange={handleChange}
                                value={reference}
                                type="reference"
                                placeholder="Enter reference code"
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

export default Payment;
