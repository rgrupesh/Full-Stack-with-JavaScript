import * as actiontypes from "./actiontypes";


export const Promotions = (state  = { isLoading: true,
    errMess: null,
    promotions:[]}, action) => {
    switch (action.type) {
    case actiontypes.ADD_PROMOS:
    return {...state, isLoading: false, errMess: null, promotions: action.payload};

    case actiontypes.PROMOS_LOADING:
    return {...state, isLoading: true, errMess: null, promotions: []}

    case actiontypes.PROMOS_FAILED:
    return {...state, isLoading: false, errMess: action.payload};

    default:
    return state;
    }
};