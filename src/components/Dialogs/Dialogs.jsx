import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text)
    }



    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />);
    let newDialogElement = React.createRef();

    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.head}></div>
                {messagesElements}
                <div className={s.footer}>
                    <input ref={newDialogElement} className={s.textArea} placeholder="напишите свое сообщение..."/>
                    <button  className={s.btn}>
                        <img src="https://icon-icons.com/icons2/510/PNG/32/android-send_icon-icons.com_50500.png"></img>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;