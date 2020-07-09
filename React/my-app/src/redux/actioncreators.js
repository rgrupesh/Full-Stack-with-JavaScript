import * as actiontypes from "./actiontypes";

export const addComment = (dishId, rating, author, comment) => ({
    type: actiontypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});