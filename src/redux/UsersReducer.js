const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
      // { id: 1, photoUrl: "https://i.ytimg.com/vi/X8hYhCN4YCw/maxresdefault.jpg", followed: false, fullname: "Лул Ожигов", status: "darova", location: {city: "Задрыщинск", country: "Россия"}},
      // { id: 2, photoUrl: "https://i.ytimg.com/vi/X8hYhCN4YCw/maxresdefault.jpg", followed: false, fullname: "Вадим Петушкин", status: "Cock", location: {city: "Москва", country: "Россия"}},
      // { id: 3, photoUrl: "https://i.ytimg.com/vi/X8hYhCN4YCw/maxresdefault.jpg", followed: true, fullname: "Гуру Мемов", status: "Запомните твари...Потом напомните", location: {city: "Москва", country: "Россия"}},
      // { id: 4, photoUrl: "https://i.ytimg.com/vi/X8hYhCN4YCw/maxresdefault.jpg", followed: true, fullname: "Orlun", status: "Hello", location: {city: "Oslo", country: "Norway"}},
    ]
  };
    
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
           return {
            ...state, 
            users: state.users.map(u => {
              if(u.id === action.userId) {
                return {...u,followed:true}
              }
                return u;
            })
          }

        case UNFOLLOW:
          return {
            ...state, 
            users: state.users.map(u => {
              if(u.id === action.userId) {
                return {...u,followed: false}
              }
                return u;
            })
          }
        case SET_USERS: {
          return {...state, users: [...state.users, ...action.users]}
        }
          default:
            return state;
    }
    
    return state;
}

export const followAC = (userId) => ({ type: FOLLOW, userId});
export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
  });
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;