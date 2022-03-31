import {PAYMENT_ACTION_TYPES} from "./payment-action-types";

const INITIAL_STATE = {
    loading: false,
    error: null,
};

const paymentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case PAYMENT_ACTION_TYPES.CREATE_PAYMENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case PAYMENT_ACTION_TYPES.CREATE_PAYMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            }

        case PAYMENT_ACTION_TYPES.CREATE_PAYMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default paymentReducer;
