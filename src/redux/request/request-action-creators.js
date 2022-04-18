import {REQUEST_ACTION_TYPES} from "./request-action-types";
import axios from "axios";
import {CONSTANTS} from "../../constants/constants";

const nextPage = () => {
    return {
        type: REQUEST_ACTION_TYPES.NEXT_PAGE
    }
}


const previousPage = () => {
    return {
        type: REQUEST_ACTION_TYPES.PREVIOUS_PAGE
    }
}


const gotoPage = page => {
    return {
        type: REQUEST_ACTION_TYPES.GOTO_PAGE,
        payload: page
    }
}


const saveCertificate = certificate => {
    return {
        type: REQUEST_ACTION_TYPES.SAVE_CERTIFICATE,
        payload: certificate
    }
}

const saveIdentity = identity => {
    return {
        type: REQUEST_ACTION_TYPES.SAVE_IDENTITY,
        payload: identity
    }
}

const savePayment = payment => {
    return {
        type: REQUEST_ACTION_TYPES.SAVE_PAYMENT,
        payload: payment
    }
}


const saveClient = client => {
    return {
        type: REQUEST_ACTION_TYPES.SAVE_CLIENT,
        payload: client
    }
}


const createRequestRequest = () => {
    return {
        type: REQUEST_ACTION_TYPES.CREATE_REQUEST_REQUEST
    }
}


const createRequestSuccess = request => {
    return {
        type: REQUEST_ACTION_TYPES.CREATE_REQUEST_SUCCESS,
        payload: request
    }
}


const createRequestFailure = message => {
    return {
        type: REQUEST_ACTION_TYPES.CREATE_REQUEST_FAILURE,
        payload: message
    }
}


const submitRequest = (request) => {
    return async dispatch => {
        try {
            dispatch(createRequestRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/requests`,
                data: request
            });
            const {data} = response.data;
            dispatch(createRequestSuccess(data));
            dispatch(REQUEST_ACTION_CREATORS.nextPage());
        }catch (e) {
            const {message} = e.response.data;
            dispatch(createRequestFailure(message));
        }
    }
}


export const REQUEST_ACTION_CREATORS = {
    nextPage,
    previousPage,
    gotoPage,
    saveCertificate,
    savePayment,
    saveClient,
    submitRequest,
    saveIdentity
};
