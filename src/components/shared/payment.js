import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    Stack,
    TextField,
    Typography,
    MenuItem,
    FormControl,
    InputLabel,
    Select
} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {REQUEST_ACTION_CREATORS} from "../../redux/request/request-action-creators";
import {useDispatch, useSelector} from "react-redux";
import {selectRequest} from "../../redux/request/request-reducer";
import {useState} from "react";
import validator from "validator";
import Layout from "../layout/layout";

const Payment = () => {
    const {page, payment: p} = useSelector(selectRequest);
    const dispatch = useDispatch();

    const [payment, setPayment] = useState({...p});
    const [provider, setProvider] = useState("");
    const [error, setError] = useState({});

    const {name, phone, transactionID, amount} = payment;

    const handleChange = event => {
        setPayment({...payment, [event.target.name]: event.target.value});
    }
    const handleButtonClick = () => {

        if (!name) {
            setError({error, name: 'Field required'});
            return;
        } else {
            setError({error, name: null});
        }

        if (!phone) {
            setError({error, phone: 'Field required'});
            return;
        } else {
            setError({error, phone: null});
        }

        if (!validator.isMobilePhone(phone)) {
            setError({error, phone: 'Invalid phone'});
            return;
        } else {
            setError({error, phone: null});
        }

        if (!transactionID) {
            setError({error, transactionID: 'Field required'});
            return;
        } else {
            setError({error, transactionID: null});
        }

        if (!amount || Number(amount) < 0) {
            setError({error, amount: 'Invalid amount'});
            return;
        } else {
            setError({error, amount: null});
        }

        if (!provider) {
            setError({error, provider: 'Field required'});
            return;
        } else {
            setError({error, provider: null});
        }

        dispatch(REQUEST_ACTION_CREATORS.savePayment({name, phone, transactionID, amount, provider}));
        dispatch(REQUEST_ACTION_CREATORS.nextPage());
    }

    return (
        <Layout>
            <Card elevation={1} variant="elevation">
                <CardContent>
                    <Typography gutterBottom={true} variant="h4" align="center">Payment</Typography>
                    <Typography gutterBottom={true} variant="body2" align="center">
                        This information should be about your payment
                    </Typography>

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
                                defaultValue=""
                                onChange={handleChange}
                                value={name}
                                placeholder="Enter name"
                            />
                        </Box>

                        <FormControl>
                            <InputLabel>Network Provider</InputLabel>
                            <Select
                                select={true}
                                fullWidth={true}
                                label="Provider"
                                required={true}
                                size="medium"
                                error={Boolean(error.provider)}
                                variant="outlined"
                                name="provider"
                                onChange={event => setProvider(event.target.value)}
                                value={provider}>
                                <MenuItem value="Momo">MTN Momo</MenuItem>
                                <MenuItem value="AirtelTigo">AirtelTigo</MenuItem>
                                <MenuItem value="Vodafone Cash">Vodafone Cash</MenuItem>
                            </Select>
                        </FormControl>

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
                                label="Transaction ID"
                                required={true}
                                size="medium"
                                error={Boolean(error.transactionID)}
                                helperText={error.transactionID}
                                variant="outlined"
                                name="transactionID"
                                defaultValue=""
                                onChange={handleChange}
                                value={transactionID}
                                placeholder="Enter transaction id"
                            />
                        </Box>
                    </Stack>

                    <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                    <Grid container={true} justifyContent="space-between" spacing={2}>
                        <Grid item={true} xs={12} md="auto">
                            <Button
                                onClick={() => dispatch(REQUEST_ACTION_CREATORS.previousPage())}
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
        </Layout>
    )
}

export default Payment;
