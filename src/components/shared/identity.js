import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {REQUEST_ACTION_CREATORS} from "../../redux/request/request-action-creators";
import {useDispatch, useSelector} from "react-redux";
import {selectRequest} from "../../redux/request/request-reducer";
import {useState} from "react";
import Layout from "../layout/layout";
import {DatePicker} from "@mui/lab";

const Identity = () => {
    const {page, certificate, identity} = useSelector(selectRequest);
    const dispatch = useDispatch();

    const [error, setError] = useState({});

    const [baptismalIdentity, setBaptismalIdentity] = useState({...identity});
    const [weighingIdentity, setWeighingIdentity] = useState({...identity});

    const {dateOfBaptism, placeOfBaptism, baptiser, district} = baptismalIdentity;

    const {
        serialNumber,
        registrationNumber,
        NHISNumber,
        sickleCellStatus = "",
        birthWeight,
        birthLength,
        headCircumference,
        birthRegistration,
        G6PDStatus = "",
        gestationalAge
    } = weighingIdentity;


    const handleBaptismalIdentityChange = event => {
        setBaptismalIdentity({...baptismalIdentity, [event.target.name]: event.target.value});
    }

    const handleWeightingIdentityChange = event => {
        setWeighingIdentity({...weighingIdentity, [event.target.name]: event.target.value});
    }

    const handleBaptismButtonClick = () => {

        if (!baptiser) {
            setError({error, baptiser: 'Field required'});
            return;
        } else {
            setError({error, baptiser: null});
        }

        if (!district) {
            setError({error, district: 'Field required'});
            return;
        } else {
            setError({error, district: null});
        }

        if (!dateOfBaptism) {
            setError({error, dateOfBaptism: 'Field required'});
            return;
        } else {
            setError({error, dateOfBaptism: null});
        }

        if (!placeOfBaptism) {
            setError({error, placeOfBaptism: 'Field required'});
            return;
        } else {
            setError({error, placeOfBaptism: null});
        }

        dispatch(REQUEST_ACTION_CREATORS.saveIdentity(
            {dateOfBaptism, placeOfBaptism, baptiser, district, variant: 'baptism'}
        ));
        dispatch(REQUEST_ACTION_CREATORS.nextPage());
    }

    const handleWeightButtonClick = () => {
        if (!serialNumber) {
            setError({error, serialNumber: 'Field required'});
            return;
        } else {
            setError({error, serialNumber: null});
        }

        if (!registrationNumber) {
            setError({error, registrationNumber: 'Field required'});
            return;
        } else {
            setError({error, registrationNumber: null});
        }

        if (!NHISNumber) {
            setError({error, NHISNumber: 'Field required'});
            return;
        } else {
            setError({error, NHISNumber: null});
        }

        if (!sickleCellStatus) {
            setError({error, sickleCellStatus: 'Field required'});
            return;
        } else {
            setError({error, sickleCellStatus: null});
        }


        if (!birthWeight) {
            setError({error, birthWeight: 'Field required'});
            return;
        } else {
            setError({error, birthWeight: null});
        }

        if (!birthLength) {
            setError({error, birthLength: 'Field required'});
            return;
        } else {
            setError({error, birthLength: null});
        }

        if (!headCircumference) {
            setError({error, headCircumference: 'Field required'});
            return;
        } else {
            setError({error, headCircumference: null});
        }

        if (!birthRegistration) {
            setError({error, birthRegistration: 'Field required'});
            return;
        } else {
            setError({error, birthRegistration: null});
        }

        if (!G6PDStatus) {
            setError({error, G6PDStatus: 'Field required'});
            return;
        } else {
            setError({error, G6PDStatus: null});
        }

        if (!gestationalAge) {
            setError({error, gestationalAge: 'Field required'});
            return;
        } else {
            setError({error, gestationalAge: null});
        }

        dispatch(REQUEST_ACTION_CREATORS.saveIdentity(
            {
                serialNumber,
                registrationNumber,
                NHISNumber,
                sickleCellStatus,
                birthWeight,
                birthLength,
                headCircumference,
                birthRegistration,
                G6PDStatus,
                gestationalAge,
                variant: 'weighing'
            }));
        dispatch(REQUEST_ACTION_CREATORS.nextPage());
    }

    return (
        <Layout>
            <Card elevation={1} variant="elevation">
                <CardContent>
                    <Typography gutterBottom={true} variant="h4" align="center">Identity</Typography>

                    {
                        certificate.isUnderOneYear ? (
                            <Stack direction="column" spacing={2}>
                                <Typography variant="h6">Weighing Information </Typography>
                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Serial Number"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.serialNumber)}
                                        margin="dense"
                                        helperText={error.serialNumber}
                                        variant="outlined"
                                        name="serialNumber"
                                        onChange={handleWeightingIdentityChange}
                                        value={serialNumber}
                                        placeholder="Enter serial number"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Birth Registration"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.birthRegistration)}
                                        margin="dense"
                                        helperText={error.birthRegistration}
                                        variant="outlined"
                                        name="birthRegistration"
                                        onChange={handleWeightingIdentityChange}
                                        value={birthRegistration}
                                        placeholder="Enter birth registration"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Gestation Age"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.gestationalAge)}
                                        margin="dense"
                                        helperText={error.gestationalAge}
                                        variant="outlined"
                                        name="gestationalAge"
                                        onChange={handleWeightingIdentityChange}
                                        value={gestationalAge}
                                        placeholder="Enter gestation age"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Registration Number"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.registrationNumber)}
                                        margin="dense"
                                        helperText={error.registrationNumber}
                                        variant="outlined"
                                        name="registrationNumber"
                                        onChange={handleWeightingIdentityChange}
                                        value={registrationNumber}
                                        placeholder="Enter registration number"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="NHIS Number"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.NHISNumber)}
                                        margin="dense"
                                        helperText={error.NHISNumber}
                                        variant="outlined"
                                        name="NHISNumber"
                                        onChange={handleWeightingIdentityChange}
                                        value={NHISNumber}
                                        placeholder="Enter NHIS Number"
                                    />
                                </Box>

                                <FormControl>
                                    <InputLabel>Sickle Cell Status</InputLabel>
                                    <Select
                                        select={true}
                                        fullWidth={true}
                                        label="Sickle Cell Status"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.sickelCellStatus)}
                                        variant="outlined"
                                        name="sickleCellStatus"
                                        onChange={handleWeightingIdentityChange}
                                        value={sickleCellStatus}>
                                        <MenuItem value=""></MenuItem>
                                        <MenuItem value="">Select Status</MenuItem>
                                        <MenuItem value="Negative">Negative</MenuItem>
                                        <MenuItem value="Positive">Positive</MenuItem>
                                    </Select>
                                </FormControl>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Birth Weight (KG)"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.birthWeight)}
                                        margin="dense"
                                        helperText={error.birthWeight}
                                        variant="outlined"
                                        name="birthWeight"
                                        onChange={handleWeightingIdentityChange}
                                        value={birthWeight}
                                        placeholder="Enter birth weight"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Birth Length (CM)"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.birthLength)}
                                        margin="dense"
                                        helperText={error.birthLength}
                                        variant="outlined"
                                        name="birthLength"
                                        onChange={handleWeightingIdentityChange}
                                        value={birthLength}
                                        placeholder="Enter birth length"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Head circumference (CM)"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.headCircumference)}
                                        margin="dense"
                                        helperText={error.headCircumference}
                                        variant="outlined"
                                        name="headCircumference"
                                        onChange={handleWeightingIdentityChange}
                                        value={headCircumference}
                                        placeholder="Enter head circumference"
                                    />
                                </Box>

                                <FormControl>
                                    <InputLabel>G6PDStatus Status</InputLabel>
                                    <Select
                                        select={true}
                                        fullWidth={true}
                                        label="G6PDStatus Status"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.sickelCellStatus)}
                                        variant="outlined"
                                        name="G6PDStatus"
                                        onChange={handleWeightingIdentityChange}
                                        value={G6PDStatus}>
                                        <MenuItem value="">Select Status</MenuItem>
                                        <MenuItem value="Negative">Negative</MenuItem>
                                        <MenuItem value="Positive">Positive</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        ) : (
                            <Stack direction="column" spacing={2}>
                                <Typography variant="h6">Baptismal Information </Typography>
                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Baptiser"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.baptiser)}
                                        margin="dense"
                                        helperText={error.baptiser}
                                        variant="outlined"
                                        name="baptiser"
                                        onChange={handleBaptismalIdentityChange}
                                        value={baptiser}
                                        placeholder="Enter baptiser"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="District"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.district)}
                                        margin="dense"
                                        helperText={error.district}
                                        variant="outlined"
                                        name="district"
                                        onChange={handleBaptismalIdentityChange}
                                        value={district}
                                        placeholder="Enter district"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Place of Baptism"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.placeOfBaptism)}
                                        margin="dense"
                                        helperText={error.placeOfBaptism}
                                        variant="outlined"
                                        name="placeOfBaptism"
                                        onChange={handleBaptismalIdentityChange}
                                        value={placeOfBaptism}
                                        placeholder="Enter place of baptism"
                                    />
                                </Box>

                                <Box>
                                    <DatePicker
                                        rawValue={dateOfBaptism}
                                        label="Date of baptism"
                                        value={dateOfBaptism}
                                        onChange={(date) => {
                                            setBaptismalIdentity({...baptismalIdentity, 'dateOfBaptism': date})
                                        }}
                                        renderInput={
                                            (params) =>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth={true}
                                                    placeholder="Date of birth"
                                                    margin="normal"
                                                    label="Date of Baptism" {...params} />}
                                        date={dateOfBaptism}
                                    />
                                </Box>
                            </Stack>
                        )
                    }


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

                        {
                            certificate.isUnderOneYear ? (
                                <Grid item={true} xs={12} md="auto">
                                    <Button
                                        onClick={handleWeightButtonClick}
                                        size="large"
                                        variant="contained"
                                        disableElevation={true}
                                        fullWidth={true}
                                        endIcon={<ChevronRight/>}
                                        disabled={page === 6}>
                                        Next
                                    </Button>
                                </Grid>
                            ) : (
                                <Grid item={true} xs={12} md="auto">
                                    <Button
                                        onClick={handleBaptismButtonClick}
                                        size="large"
                                        variant="contained"
                                        disableElevation={true}
                                        fullWidth={true}
                                        endIcon={<ChevronRight/>}
                                        disabled={page === 6}>
                                        Next
                                    </Button>
                                </Grid>
                            )}
                    </Grid>
                </CardContent>
            </Card>
        </Layout>
    )
}

export default Identity;
