const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initailState = {
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
  };

const dialogsReducer = (state = initailState, action) => {
    switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body;
        return state;
    case SEND_MESSAGE:
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messages.push({id: 7, message: body});
        return state;
        default:
            return state;
    }
}   

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  });


export default dialogsReducer;