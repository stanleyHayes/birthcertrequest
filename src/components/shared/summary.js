import {Box, Button, Card, CardContent, Divider, Grid, Stack, Typography} from "@mui/material";
import {CheckCircle, ChevronLeft, ChevronRight} from "@mui/icons-material";
import {REQUEST_ACTION_CREATORS} from "../../redux/request/request-action-creators";
import {useDispatch, useSelector} from "react-redux";
import {selectRequest} from "../../redux/request/request-reducer";

const Summary = () => {

    const {page} = useSelector(selectRequest);
    const dispatch = useDispatch();

    const {client, certificate, payment} = useSelector(selectRequest);

    return (
        <Box>
            <Card elevation={1} variant="elevation">
                <CardContent>
                    <Typography variant="h4" align="center">Summary</Typography>

                    <Divider sx={{my: 2}} light={true} variant="fullWidth"/>

                    <Stack
                        divider={<Divider light={true} variant="fullWidth"/>}
                        direction="column"
                        spacing={4}>
                        <Box>
                            <Grid container={true} justifyContent="space-between">
                                <Grid item={true}>
                                    <Typography
                                        gutterBottom={true}
                                        variant="h5">
                                        Client
                                    </Typography>
                                </Grid>
                                <Grid item={true}>
                                    <Button
                                        size="small"
                                        color="primary"
                                        onClick={() => dispatch(REQUEST_ACTION_CREATORS.gotoPage(2))}
                                        variant="outlined">Edit</Button>
                                </Grid>
                            </Grid>


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
                        </Box>

                        <Box>
                            <Grid container={true} justifyContent="space-between">
                                <Grid item={true}>
                                    <Typography
                                        gutterBottom={true}
                                        variant="h5"
                                        align="center">
                                        Payment
                                    </Typography>
                                </Grid>
                                <Grid item={true}>
                                    <Button
                                        size="small"
                                        color="primary"
                                        onClick={() => dispatch(REQUEST_ACTION_CREATORS.gotoPage(3))}
                                        variant="outlined">Edit</Button>
                                </Grid>
                            </Grid>

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
                                    Reference
                                </Typography>
                                <Typography gutterBottom={true} variant="h6">
                                    {payment.reference}
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
                                    Phone
                                </Typography>
                                <Typography gutterBottom={true} variant="h6">
                                    {payment.phone}
                                </Typography>
                            </Box>
                        </Box>

                        <Box>
                            <Grid container={true} justifyContent="space-between">
                                <Grid item={true}>
                                    <Typography
                                        gutterBottom={true}
                                        variant="h5"
                                        align="center">
                                        Certificate
                                    </Typography>
                                </Grid>
                                <Grid item={true}>
                                    <Button
                                        size="small"
                                        color="primary"
                                        onClick={() => dispatch(REQUEST_ACTION_CREATORS.gotoPage(4))}
                                        variant="outlined">Edit</Button>
                                </Grid>
                            </Grid>

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
                                    {certificate.middleName}
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
                                    {certificate.dateOfBirth}
                                </Typography>
                            </Box>

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
                                endIcon={<CheckCircle/>}
                                disabled={page === 6}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Summary;
