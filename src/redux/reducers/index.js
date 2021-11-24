import { combineReducers } from "redux";
import advReducer from "./adv.reducer";

export default combineReducers({
    adv: advReducer,
});