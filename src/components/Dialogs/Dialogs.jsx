import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.head}></div>
                <div>{messagesElements}</div>
                <div className={s.footer}>
                    <input 
                    value={newMessageBody}
                    className={s.textArea}
                    onChange={onNewMessageChange} 
                    placeholder="напишите свое сообщение..."/>
                    <button  className={s.btn} onClick={onSendMessageClick}>
                        <img src="https://icon-icons.com/icons2/510/PNG/32/android-send_icon-icons.com_50500.png"></img>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;