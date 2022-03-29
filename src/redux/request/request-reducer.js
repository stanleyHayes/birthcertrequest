import {REQUEST_ACTION_TYPES} from "./request-action-types";

const INITIAL_STATE = {
    client: {
        name: 'Stanley Hayford',
        phone: '+233270048319',
        email: 'dev.stanley.hayford@gmail.com'
    },
    loading: false,
    error: null,
    certificate: {
        firstName: 'Persius',
        middleName: '',
        lastName: 'Setepenre',
        dateOfBirth: '29/8/1993',
        sex: 'Male',
        placeOfBirth: 'Baiden Gartey',
        motherMaidenName: 'Nancy Arthur',
        ageOfMother: 58,
        motherLevelOfEducation: 'Bachelor',
        motherOccupation: 'Teaching',
        motherNationality: 'Ghanaian',
        nameOfFather: 'Edwin Hayford',
        ageOfFather: 60,
        fatherLevelOfEducation: 'Bachelor',
        telephoneNumber: '+233270048319',
        houseNumber: 'F96B/3',
        religion: 'Alkebulan',
        fullNameOfInformant: "Usermatere Setepenre"
    },
    payment: {
        reference: 'ARETRT56564',
        amount: 200,
        name: 'Stanley Asoku Hayford',
        phone: '+233555180048'
    },
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
                error: null
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
                error: action.payload
            }
        default:
            return state;
    }
}

export const selectRequest = state => state.request;

export default requestReducer;
