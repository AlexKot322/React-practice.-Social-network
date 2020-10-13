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
  };

const dialogsReducer = (state = initailState, action) => {

  
    
    switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = action.newMessageBody;   
      return {
        ...state,
        messages: [...state.messages, {id: 7, message: body}],
        
      };
        
        default:
            return state;
    }
}   

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });


export default dialogsReducer;