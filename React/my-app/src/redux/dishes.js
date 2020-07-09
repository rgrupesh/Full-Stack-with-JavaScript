import * as actiontypes from "./actiontypes";


export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
    switch (action.type) {
        case actiontypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case  actiontypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case  actiontypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};

