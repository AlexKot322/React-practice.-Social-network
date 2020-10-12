import { profileAPI, usersAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "ADD-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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
    profile: null,
    status: "",
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
        case SET_STATUS: {
          return {...state, status: action.status}
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
export const setStatus = (status) => ({type: SET_STATUS, status})



export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data));
    });
};  //это thunk

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data));
    });
};  //это thunk

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
      }
    });
};  //это thunk

export default profileReducer;