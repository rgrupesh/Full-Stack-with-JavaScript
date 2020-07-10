import * as actiontypes from "./actiontypes";


export const Comments = (state={
    errMess: null, 
    comments:[]}, 
    action) =>{
    switch(action.type){
        case actiontypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
      
          case actiontypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
      
          case actiontypes.ADD_COMMENT:
              var comment = action.payload;
              comment.id = state.comments.length;
              comment.date = new Date().toISOString();
              return { ...state, comments: state.comments.concat(comment)};
      
          default:
            return state;
        }
      };