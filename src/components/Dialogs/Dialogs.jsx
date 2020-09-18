import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {


    let dialogs = [
        { id: 1, name: 'Александр' },
        { id: 2, name: 'Марти' },
        { id: 3, name: 'Сергей' },
        { id: 4, name: 'Кекыч' },
        { id: 5, name: 'Валик' }
    ]

    let messages = [
        { id: 1, message: 'Даров' },
        { id: 2, message: 'Ну ты даешь' },
        { id: 3, message: 'Бяк' },
        { id: 4, message: 'Как ты' },
        { id: 5, message: 'Привет' },
        { id: 6, message: 'Подожди' }
    ]


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = messages.map(m => <Message message={m.message} id={m.id} />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs;