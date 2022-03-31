import {PAYMENT_ACTION_TYPES} from "./payment-action-types";
import axios from "axios";
import {CONSTANTS} from "../../constants/constants";

const createPaymentRequest = () => {
    return {
        type: PAYMENT_ACTION_TYPES.CREATE_PAYMENT_REQUEST
    }
}


const createPaymentSuccess = payment => {
    return {
        type: PAYMENT_ACTION_TYPES.CREATE_PAYMENT_SUCCESS,
        payload: payment
    }
}


const creatPaymentFailure = message => {
    return {
        type: PAYMENT_ACTION_TYPES.CREATE_PAYMENT_FAILURE,
        payload: message
    }
}


const submitPayment = (payment) => {
    return async dispatch => {
        try {
            dispatch(createPaymentRequest());
            const response = await axios({
                method: 'POST',
                url: `${CONSTANTS.SERVER_BASE_URL}/payments`,
                data: payment
            });
            const {data, message} = response.data;
            dispatch(createPaymentSuccess(data));
            console.log(message);
        }catch (e) {
            const {message} = e.response.data;
            dispatch(creatPaymentFailure(message));
        }
    }
}


export const PAYMENT_ACTION_CREATORS = {
    submitPayment
};
