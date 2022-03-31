import {combineReducers} from "redux";
import requestReducer from "./request/request-reducer";
import paymentReducer from "./payment/payment-reducer";

const rootReducer = combineReducers({
    request: requestReducer,
    payment: paymentReducer,
});

export default rootReducer;
