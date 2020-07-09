import { COMMENTS } from '../shared/comments';
import * as actiontypes from "./actiontypes";


export const Comments = (state=COMMENTS, action) =>{
    switch(action.type){
        case actiontypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment);
        default:
            return state;
            
    }
}