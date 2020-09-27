const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "ADD-NEW-POST-TEXT";

let initialState = {
    posts: [
      {
        id: 1,
        name: "Александр Котовсков",
        countLike: 333,
        countLook: 222,
        datePublick: "13 августа",
      },
      {
        id: 2,
        name: "Лул Кекович",
        countLike: 11,
        countLook: 22,
        datePublick: "12 сентября",
      },
    ],
    newPostText: "keklul",
  };
    
const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
        let newPost = {
            id: 5,
            name: state.newPostText,
            countLike: 0,
            countLook: 0,
            datePublick: "13 августа",
        };
        state.posts.push(newPost);
        state.newPostText = " ";
        return state;
        case ADD_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
    
    return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: ADD_NEW_POST_TEXT,
    newText: text,
  });


export default profileReducer;