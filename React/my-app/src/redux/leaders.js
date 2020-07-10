import * as actiontypes from "./actiontypes";

export const Leaders = (state = { isLoading: true,
    errMess: null,
    leaders:[]}, action) => {
    switch (action.type) {
        case actiontypes.ADD_LEADERS:
            return {...state, isLoading: false, errMess: null, leaders: action.payload};

        case  actiontypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMess: null, leaders: []}

        case  actiontypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};