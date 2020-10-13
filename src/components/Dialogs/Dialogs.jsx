import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";
import send from "../../assets/img/send.svg"




const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.head}></div>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div className={s.footer}>
            <Field component="textarea" name="newMessageBody" placeholder="Введите сообщение" className={s.textArea}/>
            <div>
            <button  className={s.btn}><img src={send}/></button>
            </div>
        </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm ({form: "dialogAddMessageForm"}) (AddMessageForm)
export default Dialogs;
