import { API } from "../../utils/Api";
import { getAdvError, getAdvStart, getAdvSuccess } from "../actions/adv.action";

export const getAdv = () => {
    return (dispatch) => {
        dispatch(getAdvStart());

        API.get("/users")
            .then((response) => {
                dispatch(getAdvSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getAdvError(error));
            });
    };
};