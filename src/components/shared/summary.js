import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Typography,
    Alert,
    AlertTitle
} from "@mui/material";
import {CheckCircle, ChevronLeft} from "@mui/icons-material";
import {REQUEST_ACTION_CREATORS} from "../../redux/request/request-action-creators";
import {useDispatch, useSelector} from "react-redux";
import {selectRequest} from "../../redux/request/request-reducer";
import {PAYMENT_ACTION_CREATORS} from "../../redux/payment/payment-action-creators";
import Layout from "../layout/layout";

const Summary = () => {

    const dispatch = useDispatch();

    const {client, certificate, payment, loading, error, identity} = useSelector(selectRequest);

    const handleSubmit = () => {
        dispatch(PAYMENT_ACTION_CREATORS.submitPayment({
            transaction_id: payment.transactionID,
            phone: payment.phone,
            amount: payment.amount,
            name: payment.name,
            status: certificate?.isUnderOneYear ? 'Waived': 'Pending',
            provider: payment.provider
        }));

        dispatch(REQUEST_ACTION_CREATORS.submitRequest({
            first_name: certificate.firstName,
            middle_name: certificate.middleName,
            last_name: certificate.lastName,
            date_of_birth: certificate.dateOfBirth,
            sex: certificate.sex,
            place_of_birth: certificate.placeOfBirth,
            mother_maiden_name: certificate.motherMaidenName,
            age_of_mother: certificate.ageOfMother,
            mother_level_of_education: certificate.motherLevelOfEducation,
            mother_occupation: certificate.motherOccupation,
            mother_nationality: certificate.motherNationality,
            name_of_father: certificate.nameOfFather,
            age_of_father: certificate.ageOfFather,
            father_occupation: certificate.fatherOccupation,
            father_nationality: certificate.fatherNationality,
            father_level_of_education: certificate.fatherLevelOfEducation,
            telephone_number: certificate.telephoneNumber,
            house_number: certificate.houseNumber,
            religion: certificate.religion,
            full_name_of_informant: certificate.fullNameOfInformant,
            contact_name: client.name,
            contact_email: client.email,
            contact_phone: client.phone,
            provider: payment.provider,
            id_card_type: certificate.idCardType,
            id_card_number: certificate.idCardNumber,
            date_of_baptism: identity.dateOfBaptism,
            place_of_baptism: identity.placeOfBaptism,
            baptiser: identity.baptiser,
            district: identity.district,
            serial_number: identity.serialNumber,
            registration_number: identity.registrationNumber,
            nhis_number: identity.NHISNumber,
            sickle_cell_status: identity.sickleCellStatus,
            birth_weight: identity.birthWeight,
            birth_length: identity.birthLength,
            head_circumference: identity.headCircumference,
            birth_registration: identity.birthRegistration,
            g6pd_status: identity.G6PDStatus,
            gestation_age: identity.gestationalAge,
            variant: identity.variant
        }));
    }

    return (
        <Layout>
            {loading && <LinearProgress variant="query" color="primary"/>}
            <Container>
                <Typography variant="h4" align="center">Summary</Typography>

                <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                <Grid container={true} justifyContent="space-between" spacing={2}>
                    <Grid item={true} xs={12} md="auto">
                        <Button
                            sx={{color: 'white'}}
                            onClick={() => dispatch(REQUEST_ACTION_CREATORS.previousPage())}
                            variant="contained"
                            startIcon={<ChevronLeft sx={{color: 'white'}}/>}
                            fullWidth={true}
                            disableElevation={true}
                            size="medium"
                            color="secondary"
                            disabled={loading}>
                            Previous
                        </Button>
                    </Grid>

                    <Grid item={true} xs={12} md="auto">
                        <Button
                            onClick={handleSubmit}
                            size="medium"
                            variant="contained"
                            disableElevation={true}
                            fullWidth={true}
                            endIcon={<CheckCircle/>}
                            disabled={loading}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>

                <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                {
                    error &&
                    (
                        <Alert severity="error" variant="standard">
                            <AlertTitle>Error</AlertTitle>
                            <Typography variant="h6" align="center">
                                {error}
                            </Typography>
                        </Alert>
                    )
                }

                <Grid sx={{mb: 2}} container={true} spacing={2}>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1} variant="elevation">
                            {loading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>
                                <Box>

                                    <Typography
                                        gutterBottom={true}
                                        variant="h5">
                                        Personal Information
                                    </Typography>

                                    <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            First Name
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {certificate.firstName}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Middle Name
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {certificate.middleName ? certificate.middleName : 'No middle name'}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Last Name
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {certificate.lastName}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Date of Birth
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {new Date(certificate.dateOfBirth).toDateString()}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1} variant="elevation">
                            {loading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>
                                <Box>
                                    <Typography
                                        gutterBottom={true}
                                        variant="h5">
                                        Other Information
                                    </Typography>

                                    <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Sex
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {certificate.sex}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Place of Birth
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {certificate.placeOfBirth}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            ID Card Type
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {certificate.idCardType}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            ID Card Number
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {certificate.idCardNumber}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid sx={{mb: 2}} container={true} spacing={2}>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1} variant="elevation">
                            {loading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>
                                <Typography
                                    gutterBottom={true}
                                    variant="h5">
                                    Mother's Information
                                </Typography>

                                <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Mother's Maiden Name
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {certificate.motherMaidenName}
                                    </Typography>
                                </Box>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Mother's Age
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {certificate.ageOfMother}
                                    </Typography>
                                </Box>


                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Mother's Level of Education
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {certificate.motherLevelOfEducation}
                                    </Typography>
                                </Box>


                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Mother's Occupation
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {certificate.motherOccupation}
                                    </Typography>
                                </Box>


                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Mother's Nationality
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {certificate.motherNationality}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1} variant="elevation">
                            {loading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>
                                <Box>
                                    <Typography
                                        gutterBottom={true}
                                        variant="h5">
                                        Father's Information
                                    </Typography>

                                    <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Father's Name
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {certificate.nameOfFather}
                                        </Typography>
                                    </Box>


                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Father's Age
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {certificate.ageOfFather}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Father's Level of Education
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {certificate.fatherLevelOfEducation}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Father's Occupation
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {certificate.fatherOccupation}
                                        </Typography>
                                    </Box>


                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Father's Nationality
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {certificate.fatherNationality}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid sx={{mb: 2}} container={true} spacing={2}>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1} variant="elevation">
                            {loading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>

                                <Typography
                                    gutterBottom={true}
                                    variant="h5">
                                    Contact
                                </Typography>

                                <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Name
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {client.name}
                                    </Typography>
                                </Box>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Email
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {client.email}
                                    </Typography>
                                </Box>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Phone
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {client.phone}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1} variant="elevation">
                            {loading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>
                                <Box>
                                    <Typography
                                        gutterBottom={true}
                                        variant="h5">
                                        Payment
                                    </Typography>

                                    <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Name
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {payment.name}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Transaction ID
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {payment.transactionID}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Amount
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {payment.amount} GHS
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Network Provider
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {payment.provider}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Phone
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {payment.phone}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>

                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12} md={6}>
                        <Card elevation={1} variant="elevation">
                            {loading && <LinearProgress variant="query" color="primary"/>}
                            <CardContent>
                                <Typography
                                    gutterBottom={true}
                                    variant="h5">
                                    Contact
                                </Typography>

                                <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Telephone Number
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {certificate.telephoneNumber}
                                    </Typography>
                                </Box>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        House Number
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {certificate.houseNumber}
                                    </Typography>
                                </Box>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Religion
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {certificate.religion}
                                    </Typography>
                                </Box>

                                <Box mb={2}>
                                    <Typography gutterBottom={true} variant="body2">
                                        Full name of informant
                                    </Typography>
                                    <Typography gutterBottom={true} variant="h6">
                                        {certificate.fullNameOfInformant}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {identity.variant === 'baptism' ? (
                        <Grid item={true} xs={12} md={6}>
                            <Card elevation={1} variant="elevation">
                                {loading && <LinearProgress variant="query" color="primary"/>}
                                <CardContent>
                                    <Box>
                                        <Typography
                                            gutterBottom={true}
                                            variant="h5">
                                            Identity (Baptism)
                                        </Typography>

                                        <Divider sx={{my: 2}} light={true} variant="fullWidth"/>
                                        <Box mb={2}>
                                            <Typography gutterBottom={true} variant="body2">
                                                Baptiser
                                            </Typography>
                                            <Typography gutterBottom={true} variant="h6">
                                                {identity.baptiser}
                                            </Typography>
                                        </Box>

                                        <Box mb={2}>
                                            <Typography gutterBottom={true} variant="body2">
                                                Place of Baptism
                                            </Typography>
                                            <Typography gutterBottom={true} variant="h6">
                                                {identity.placeOfBaptism}
                                            </Typography>
                                        </Box>

                                        <Box mb={2}>
                                            <Typography gutterBottom={true} variant="body2">
                                                Date of Baptism
                                            </Typography>
                                            <Typography gutterBottom={true} variant="h6">
                                                {new Date(identity.dateOfBaptism).toDateString()}
                                            </Typography>
                                        </Box>

                                        <Box mb={2}>
                                            <Typography gutterBottom={true} variant="body2">
                                                District
                                            </Typography>
                                            <Typography gutterBottom={true} variant="h6">
                                                {identity.district}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ) : (
                        <Grid item={true} xs={12} md={6}>
                            <Card elevation={1} variant="elevation">
                                {loading && <LinearProgress variant="query" color="primary"/>}
                                <CardContent>
                                    <Typography
                                        gutterBottom={true}
                                        variant="h5">
                                        Identity (Weighing)
                                    </Typography>

                                    <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Serial Number
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {identity.serialNumber}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Registration Number
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {identity.registrationNumber}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            NHIS Number
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {identity.NHISNumber}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Sickle Cell Status
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {identity.sickleCellStatus}
                                        </Typography>
                                    </Box>


                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Birth Weight
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {identity.birthWeight} KG
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Birth Length
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {identity.birthLength} CM
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Head Circumference
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {identity.headCircumference}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            G6PD Status
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {identity.G6PDStatus}
                                        </Typography>
                                    </Box>

                                    <Box mb={2}>
                                        <Typography gutterBottom={true} variant="body2">
                                            Gestation Age
                                        </Typography>
                                        <Typography gutterBottom={true} variant="h6">
                                            {identity.gestationalAge}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Grid>

            </Container>
        </Layout>
    )
}

export default Summary;
