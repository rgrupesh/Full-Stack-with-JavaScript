import * as actiontypes from "./actiontypes";
import { baseUrl } from "../shared/baseUrl";


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

    return fetch(baseUrl + "dishes")
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
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


export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: actiontypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: actiontypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: actiontypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: actiontypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: actiontypes.ADD_PROMOS,
    payload: promos
});