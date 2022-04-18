import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {selectRequest} from "../../redux/request/request-reducer";
import Welcome from "../../components/shared/welcome";
import Client from "../../components/shared/client";
import Payment from "../../components/shared/payment";
import Certificate from "../../components/shared/certificate";
import Summary from "../../components/shared/summary";
import Confirmation from "../../components/shared/confirmation";
import Identity from "../../components/shared/identity";

const IndexPage = () => {

    const {page} = useSelector(selectRequest);

    const renderPage = page => {
        switch (page) {
            case 0:
                return <Welcome/>;
            case 1:
                return <Client/>;
            case 2:
                return <Certificate/>;
            case 3:
                return <Payment/>;
            case 4:
                return <Identity/>;
            case 5:
                return <Summary/>;
            case 6:
                return <Confirmation/>;
            default:
                return <Welcome/>;
        }
    }

    return (
        <Grid container={true}>
            <Grid item={true} xs={12}>
                {renderPage(page)}
            </Grid>
        </Grid>
    )
}

export default IndexPage;
