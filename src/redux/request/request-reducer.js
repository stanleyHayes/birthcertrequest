import {REQUEST_ACTION_TYPES} from "./request-action-types";

const INITIAL_STATE = {
    client: {},
    loading: false,
    error: null,
    certificate: {},
    payment: {},
    page: 0
};

const requestReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_ACTION_TYPES.NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }

        case REQUEST_ACTION_TYPES.PREVIOUS_PAGE:
            return {
                ...state,
                page: state.page - 1
            }

        case REQUEST_ACTION_TYPES.GOTO_PAGE:
            return {
                ...state,
                page: action.payload
            }

        case REQUEST_ACTION_TYPES.SAVE_CLIENT:
            return {
                ...state,
                client: action.payload
            }

        case REQUEST_ACTION_TYPES.SAVE_PAYMENT:
            return {
                ...state,
                payment: action.payload
            }

        case REQUEST_ACTION_TYPES.SAVE_CERTIFICATE:
            return {
                ...state,
                certificate: action.payload
            }

        case REQUEST_ACTION_TYPES.CREATE_REQUEST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }

        case REQUEST_ACTION_TYPES.CREATE_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            }

        case REQUEST_ACTION_TYPES.CREATE_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                certificate: {},
                client: {},
                payment: {}
            }
        default:
            return state;
    }
}

export const selectRequest = state => state.request;

export default requestReducer;
