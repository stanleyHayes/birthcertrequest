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
import {useDispatch, useSelector} from "react-redux";
import {selectRequest} from "../../redux/request/request-reducer";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {REQUEST_ACTION_CREATORS} from "../../redux/request/request-action-creators";
import {useState} from "react";
import {DatePicker} from "@mui/lab";

const Certificate = () => {

    const {page, certificate: c} = useSelector(selectRequest);
    const dispatch = useDispatch();

    const [certificate, setCertificate] = useState({});
    const [error, setError] = useState({name: null, phone: null, reference: null, amount: null});

    const {
        firstName,
        middleName,
        lastName,
        dateOfBirth,
        sex,
        placeOfBirth,
        motherMaidenName,
        ageOfMother,
        motherLevelOfEducation,
        motherOccupation,
        motherNationality,
        nameOfFather,
        ageOfFather,
        fatherLevelOfEducation,
        telephoneNumber,
        houseNumber,
        religion,
        fullNameOfInformant
    } = certificate;

    const handleChange = event => {
        setCertificate({...certificate, [event.target.name]: event.target.value});
    }
    const handleButtonClick = () => {


        dispatch(REQUEST_ACTION_CREATORS.nextPage());
    }

    return (
        <Box>
            <Card elevation={1} variant="elevation">
                <CardContent>

                    <Typography variant="h4" align="center">Certificate</Typography>

                    <Divider sx={{my: 2}} variant="fullWidth" light={true}/>

                    <Stack mb={4} direction="column" spacing={4}>
                        <Box>
                            <Typography variant="h6" align="center">Personal Information</Typography>

                            <Stack direction="column" spacing={2}>
                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Firstname"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.firstName)}
                                        margin="dense"
                                        helperText={error.firstName}
                                        variant="outlined"
                                        name="firstName"
                                        onChange={handleChange}
                                        value={firstName}
                                        placeholder="Enter your first name"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Middle name"
                                        size="medium"
                                        error={Boolean(error.middleName)}
                                        helperText={error.middleName}
                                        variant="outlined"
                                        name="middleName"
                                        onChange={handleChange}
                                        value={middleName}
                                        placeholder="Enter middle name"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Lastname"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.lastName)}
                                        helperText={error.lastName}
                                        variant="outlined"
                                        name="lastName"
                                        onChange={handleChange}
                                        value={lastName}
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Place of birth (Hospital name)"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.placeOfBirth)}
                                        helperText={error.placeOfBirth}
                                        variant="outlined"
                                        name="placeOfBirth"
                                        onChange={handleChange}
                                        value={placeOfBirth}
                                    />
                                </Box>

                                <FormControl>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        fullWidth={true}
                                        label="Sex"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.sex)}
                                        helperText={error.sex}
                                        variant="outlined"
                                        name="sex"
                                        onChange={handleChange}
                                        value={sex}
                                        type="text"
                                        placeholder="Sex">
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                    </Select>
                                </FormControl>

                                <Box>
                                    <DatePicker
                                        rawValue={dateOfBirth}
                                        label="Date of birth"
                                        value={dateOfBirth}
                                        onChange={(date) => {
                                            setCertificate({...certificate, 'dateOfBirth': date})
                                        }}
                                        renderInput={
                                            (params) =>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth={true}
                                                    placeholder="Date of birth"
                                                    margin="normal"
                                                    label="Start Date" {...params} />}
                                        date={dateOfBirth}
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Religion"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.religion)}
                                        helperText={error.religion}
                                        variant="outlined"
                                        name="religion"
                                        onChange={handleChange}
                                        value={religion}
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Enter phone number"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.telephoneNumber)}
                                        helperText={error.telephoneNumber}
                                        variant="outlined"
                                        name="telephoneNumber"
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                        value={telephoneNumber}
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="House number"
                                        placeholder="House number"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.houseNumber)}
                                        helperText={error.houseNumber}
                                        variant="outlined"
                                        name="houseNumber"
                                        onChange={handleChange}
                                        value={houseNumber}
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Informant Name"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.fullNameOfInformant)}
                                        helperText={error.fullNameOfInformant}
                                        variant="outlined"
                                        name="fullNameOfInformant"
                                        onChange={handleChange}
                                        placeholder="Enter informant full name"
                                        value={fullNameOfInformant}
                                    />
                                </Box>
                            </Stack>
                        </Box>

                        <Box>
                            <Typography gutterBottom={true} variant="h6" align="center">Mother's Information</Typography>

                            <Stack direction="column" spacing={2}>
                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Name"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.motherMaidenName)}
                                        margin="dense"
                                        helperText={error.motherMaidenName}
                                        variant="outlined"
                                        name="motherMaidenName"
                                        onChange={handleChange}
                                        value={motherMaidenName}
                                        placeholder="Enter your mother's maiden name"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Age"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.ageOfMother)}
                                        helperText={error.ageOfMother}
                                        variant="outlined"
                                        name="ageOfMother"
                                        onChange={handleChange}
                                        value={ageOfMother}
                                        placeholder="Enter age of mother"
                                    />
                                </Box>

                                <FormControl>
                                    <InputLabel>Level of Education</InputLabel>
                                    <Select
                                        select={true}
                                        fullWidth={true}
                                        label="Level of Education"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.motherLevelOfEducation)}
                                        helperText={error.motherLevelOfEducation}
                                        variant="outlined"
                                        name="motherLevelOfEducation"
                                        onChange={handleChange}
                                        value={motherLevelOfEducation}>
                                        <MenuItem value="High School">High School</MenuItem>
                                        <MenuItem value="Bachelor">Bachelor</MenuItem>
                                    </Select>
                                </FormControl>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Occupation"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.motherOccupation)}
                                        helperText={error.motherOccupation}
                                        variant="outlined"
                                        name="motherOccupation"
                                        onChange={handleChange}
                                        value={motherOccupation}
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Nationality"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.motherNationality)}
                                        helperText={error.motherNationality}
                                        variant="outlined"
                                        name="motherNationality"
                                        onChange={handleChange}
                                        value={motherNationality}
                                        type="text"
                                        placeholder="Enter nationality"
                                    />
                                </Box>


                            </Stack>
                        </Box>

                        <Box>
                            <Typography variant="h6" align="center">Father's Information</Typography>

                            <Stack direction="column" spacing={2}>
                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Name"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.nameOfFather)}
                                        margin="dense"
                                        helperText={error.nameOfFather}
                                        variant="outlined"
                                        name="nameOfFather"
                                        onChange={handleChange}
                                        value={nameOfFather}
                                        placeholder="Enter your father's name"
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Age"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.ageOfFather)}
                                        helperText={error.ageOfFather}
                                        variant="outlined"
                                        name="ageOfFather"
                                        onChange={handleChange}
                                        value={ageOfFather}
                                        placeholder="Enter age of father"
                                    />
                                </Box>

                                <FormControl>
                                    <InputLabel>Level of Education</InputLabel>
                                    <Select
                                        select={true}
                                        fullWidth={true}
                                        label="Level of Education"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.fatherLevelOfEducation)}
                                        helperText={error.fatherLevelOfEducation}
                                        variant="outlined"
                                        name="fatherLevelOfEducation"
                                        onChange={handleChange}
                                        value={fatherLevelOfEducation}>
                                        <MenuItem value="High School">High School</MenuItem>
                                        <MenuItem value="Bachelor">Bachelor</MenuItem>
                                    </Select>
                                </FormControl>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Occupation"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.motherOccupation)}
                                        helperText={error.motherOccupation}
                                        variant="outlined"
                                        name="motherOccupation"
                                        onChange={handleChange}
                                        value={motherOccupation}
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        fullWidth={true}
                                        label="Nationality"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.motherNationality)}
                                        helperText={error.motherNationality}
                                        variant="outlined"
                                        name="motherNationality"
                                        onChange={handleChange}
                                        value={motherNationality}
                                        type="text"
                                        placeholder="Enter nationality"
                                    />
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>

                    <Grid container={true} justifyContent="space-between" spacing={2}>
                        <Grid item={true} xs={12} md="auto">
                            <Button
                                onClick={() => dispatch(REQUEST_ACTION_CREATORS.previousPage())}
                                variant="outlined"
                                startIcon={<ChevronLeft/>}
                                fullWidth={true}
                                color="secondary"
                                size="large"
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

export default Certificate;
