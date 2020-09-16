import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
    
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Александр" id="1"/>
                <DialogItem name="Марти" id="2"/>
                <DialogItem name="Сергей" id="3"/>
                <DialogItem name="Кекыч" id="4"/>
                <DialogItem name="Валик" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Даров"/>
                <Message message="Ну ты даешь"/>
                <Message message="Бяк"/>
            </div>
        </div>
    )
}
export default Dialogs;