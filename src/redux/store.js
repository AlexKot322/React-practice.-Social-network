import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";


let store = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Даров" },
        { id: 2, message: "Ну ты даешь" },
        { id: 3, message: "Бяк" },
        { id: 4, message: "Как ты" },
        { id: 5, message: "Привет" },
        { id: 6, message: "Подожди" },
      ],
      dialogs: [
        { id: 1, name: "Александр" },
        { id: 2, name: "Марти" },
        { id: 3, name: "Сергей" },
        { id: 4, name: "Кекыч" },
        { id: 5, name: "Валик" },
      ],
      newMessageBody: " ",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state was changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.profilePage, action);

    
      this._callSubscriber(this._state);
    }
  };


export default store;
window.state = store;
