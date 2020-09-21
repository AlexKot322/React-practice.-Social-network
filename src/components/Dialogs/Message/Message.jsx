import React from "react";
import message from './../Message.module.css';


const Message = (props) => {
    return (
            <div className={message.dialogCard}>
                <div className={message.head}></div>
                <div className={message.wrapper}>
                    <img src="https://i.ucrazy.ru/files/i/2013.3.31/1364704553_z26.jpg"></img>
                    <div className={message.message}>{props.message}</div>
                </div>
            </div>
    )
}


export default Message;