import React from "react";
import message from './../Message.module.css';


const Message = (props) => {
    return (
        <div className={message.dialogCard}>
            <div className={message.wrapper}>
                <div className={message.kuk}>
                    <img src="https://i.ucrazy.ru/files/i/2013.3.31/1364704553_z26.jpg"></img>
                    <div className={message.message}>{props.message}</div>
                </div>
            </div>
        </div>
    )
}


export default Message;