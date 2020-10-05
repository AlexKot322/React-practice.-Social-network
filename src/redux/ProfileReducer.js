const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "ADD-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
    profile: null
  };
    
const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
        let newPost = {
            id: 5,
            name: state.newPostText,
            countLike: 0,
            countLook: 0,
            datePublick: "13 августа",
        };
          return {
          ...state,
          posts: [...state.posts, newPost],
          newPostText:" "
        }
      }
        case ADD_NEW_POST_TEXT: {
            return {
              ...state,
              newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
          return {...state, profile: action.profile}
        }
          default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: ADD_NEW_POST_TEXT,
    newText: text,
  });
  export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });


export default profileReducer;