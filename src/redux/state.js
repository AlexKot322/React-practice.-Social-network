const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "ADD-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        name: this._state.profilePage.newPostText,
        countLike: 0,
        countLook: 0,
        datePublick: "13 августа",
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = " ";
      this._callSubscriber(this._state);
    } else if (action.type === ADD_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({id: 7, message: body});
      this._callSubscriber(this._state);
    }
  },
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: ADD_NEW_POST_TEXT,
    newText: text,
  });
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  });


export default store;
window.state = store;
