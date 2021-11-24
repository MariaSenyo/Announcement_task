export const GET_ADV_START = "GET_ADV_START";
export const GET_ADV_SUCCESS = "GET_ADV_SUCCESS";
export const GET_ADV_ERROR = "GET_ADV_ERROR";

export const getAdvStart = () => {
    return {
        type: GET_ADV_START,
    };
};

export const getAdvSuccess = (adv) => {
    return {
        type: GET_ADV_SUCCESS,
        payload: adv,
    };
};

export const getAdvError = (error) => {
    return {
        type: GET_ADV_ERROR,
        payload: error,
    };
};