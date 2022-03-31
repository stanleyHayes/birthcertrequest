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
import moment from "moment";
import validator from "validator";

const Certificate = () => {

    const {page, certificate: c} = useSelector(selectRequest);
    const dispatch = useDispatch();

    const [certificate, setCertificate] = useState({...c});
    const [sex, setSex] = useState(c.sex);
    const [motherLevelOfEducation, setMotherLevelOfEducation] = useState(c.motherLevelOfEducation);
    const [fatherLevelOfEducation, setFatherLevelOfEducation] = useState(c.fatherLevelOfEducation);

    const [error, setError] = useState({});

    const {
        firstName,
        middleName,
        lastName,
        dateOfBirth,
        placeOfBirth,
        motherMaidenName,
        ageOfMother,
        motherOccupation,
        motherNationality,
        nameOfFather,
        ageOfFather,
        telephoneNumber,
        houseNumber,
        religion,
        fullNameOfInformant
    } = certificate;

    const handleChange = event => {
        setCertificate({...certificate, [event.target.name]: event.target.value});
    }
    const handleButtonClick = () => {

        if(!firstName){
            setError({error, firstName: 'Field required'});
            return;
        }else {
            setError({error, firstName: null});
        }

        if(!lastName){
            setError({error, lastName: 'Field required'});
            return;
        }else {
            setError({error, lastName: null});
        }

        if(!dateOfBirth || moment(dateOfBirth).isAfter(Date.now())){
            setError({error, dateOfBirth: 'Invalid date'});
            return;
        }else {
            setError({error, dateOfBirth: null});
        }

        if(!sex){
            setError({error, sex: 'Field required'});
            return;
        }else {
            setError({error, sex: null});
        }

        if(!placeOfBirth){
            setError({error, placeOfBirth: 'Field required'});
            return;
        }else {
            setError({error, placeOfBirth: null});
        }

        if(!motherMaidenName){
            setError({error, motherMaidenName: 'Field required'});
            return;
        }else {
            setError({error, motherMaidenName: null});
        }

        if(!ageOfMother || Number(ageOfMother) < 0){
            setError({error, ageOfMother: 'Invalid age'});
            return;
        }else {
            setError({error, ageOfMother: null});
        }

        if(!motherLevelOfEducation){
            setError({error, motherLevelOfEducation: 'Field required'});
            return;
        }else {
            setError({error, motherLevelOfEducation: null});
        }

        if(!motherOccupation){
            setError({error, motherOccupation: 'Field required'});
            return;
        }else {
            setError({error, motherOccupation: null});
        }

        if(!motherNationality){
            setError({error, motherNationality: 'Field required'});
            return;
        }else {
            setError({error, motherNationality: null});
        }

        if(!nameOfFather){
            setError({error, nameOfFather: 'Field required'});
            return;
        }else {
            setError({error, nameOfFather: null});
        }

        if(!ageOfFather){
            setError({error, ageOfFather: 'Field required'});
            return;
        }else {
            setError({error, ageOfFather: null});
        }

        if(!fatherLevelOfEducation){
            setError({error, fatherLevelOfEducation: 'Field required'});
            return;
        }else {
            setError({error, fatherLevelOfEducation: null});
        }

        if(!telephoneNumber || !validator.isMobilePhone(telephoneNumber)){
            setError({error, telephoneNumber: 'Invalid phone'});
            return;
        }else {
            setError({error, telephoneNumber: null});
        }
        if(!houseNumber){
            setError({error, houseNumber: 'Field required'});
            return;
        }else {
            setError({error, houseNumber: null});
        }

        if(!religion){
            setError({error, religion: 'Field required'});
            return;
        }else {
            setError({error, religion: null});
        }
        if(!fullNameOfInformant){
            setError({error, fullNameOfInformant: 'Field required'});
            return;
        }else {
            setError({error, fullNameOfInformant: null});
        }

        dispatch(REQUEST_ACTION_CREATORS.saveCertificate({
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
        }));
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
                                        defaultValue=""
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
                                        defaultValue=""
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
                                        defaultValue=""
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
                                        defaultValue=""
                                        onChange={handleChange}
                                        value={placeOfBirth}
                                    />
                                </Box>

                                <FormControl>
                                    <InputLabel>Sex</InputLabel>
                                    <Select
                                        fullWidth={true}
                                        label="Sex"
                                        required={true}
                                        size="medium"
                                        error={Boolean(error.sex)}
                                        helperText={error.sex}
                                        variant="outlined"
                                        name="sex"
                                        defaultValue=""
                                        onChange={event => setSex(event.target.value)}
                                        value={sex}>
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
                                        defaultValue=""
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
                                        defaultValue=""
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
                                        defaultValue=""
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
                                        defaultValue=""
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
                                        defaultValue=""
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
                                        defaultValue=""
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
                                        onChange={event => setMotherLevelOfEducation(event.target.value)}
                                        defaultValue=""
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
                                        defaultValue=""
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
                                        defaultValue=""
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
                                        defaultValue=""
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
                                        defaultValue=""
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
                                        defaultValue=""
                                        name="fatherLevelOfEducation"
                                        onChange={event => setFatherLevelOfEducation(event.target.value)}
                                        value={fatherLevelOfEducation}>
                                        <MenuItem value="High School">High School</MenuItem>
                                        <MenuItem value="Bachelor">Bachelor</MenuItem>
                                    </Select>
                                </FormControl>
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
