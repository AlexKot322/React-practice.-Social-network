import React from "react";
import s from './Dialogs.module.css'
import Person from "./Person";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/* <div className={s.dialog + ' ' + s.active}>

                </div>
                <div className={s.dialog}>
                    Сергей
                </div>
                <div className={s.dialog}>
                    Марти
                </div>
                <div className={s.dialog}>
                    Виктор
                </div>
                <div className={s.dialog}>
                    Кекыч
                </div> */}
                <Person  name="Александр"/>
                <Person  name="Марти"/>
                <Person  name="Сергей"/>
                <Person  name="Бибыч"/>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Даров</div>
                <div className={s.message}>Как оно?</div>
                <div className={s.message}>Чувак</div>
            </div>
        </div>
    )
}
export default Dialogs;