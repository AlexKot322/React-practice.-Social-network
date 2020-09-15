import React from "react";
import s from './Person.module.css'


const Person = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <img>{props.ava}</img>
                    <h1>{props.name}</h1>
                </div>
            </div>
        </div>
    )
};
export default Person