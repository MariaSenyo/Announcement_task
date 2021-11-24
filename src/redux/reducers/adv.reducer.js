// const [initialState, advReducer] = useState ({});

import {GET_ADV_ERROR, GET_ADV_START, GET_ADV_SUCCESS} from "../actions/adv.action";

const initialState = {
    loading: false,
    adv: null,
    getAdvError: null,
};

export default function advReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ADV_START:
            return {
                ...state,
                loading: true,
            };
        case GET_ADV_SUCCESS:
            return {
                ...state,
                loading: false,
                adv: action.payload,
            };
        case GET_ADV_ERROR:
            return {
                ...state,
                loading: false,
                getAdvError: action.payload,
            };

        default:
            return state;
    }
}