import Layout from "../../components/layout/layout";
import {Container, Grid, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectRequest} from "../../redux/request/request-reducer";
import Welcome from "../../components/shared/welcome";
import Client from "../../components/shared/client";
import Instructions from "../../components/shared/instructions";
import Payment from "../../components/shared/payment";
import Certificate from "../../components/shared/certificate";
import Summary from "../../components/shared/summary";
import Confirmation from "../../components/shared/confirmation";
import {makeStyles} from "@mui/styles";

const IndexPage = () => {

    const {page} = useSelector(selectRequest);

    const renderPage = page => {
        switch (page) {
            case 0:
                return <Welcome />;
            case 1:
                return <Instructions />;
            case 2:
                return <Client />;
            case 3:
                return <Payment />;
            case 4:
                return <Certificate/>;
            case 5:
                return <Summary />;
            case 6:
                return <Confirmation />;
            default:
                return <Welcome />;
        }
    }

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 32,
                paddingBottom: 32
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Grid container={true} justifyContent="center">
                    <Grid item={true} xs={12} md={8} lg={6}>
                        {renderPage(page)}
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default IndexPage;
