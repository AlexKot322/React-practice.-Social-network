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
                <Person ava="https://pbs.twimg.com/profile_images/378800000619398984/7bd4096c5e612dea658f2686d1bee6df.jpeg" name="Александр"/>
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