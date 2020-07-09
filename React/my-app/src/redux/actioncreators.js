import * as actiontypes from "./actiontypes";
import { DISHES } from '../shared/dishes';


export const addComment = (dishId, rating, author, comment) => ({
    type: actiontypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: actiontypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: actiontypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: actiontypes.ADD_DISHES,
    payload: dishes
});