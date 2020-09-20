import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let posts = [{
        id: 1,
        name: "Александр Котовсков",
        countLike: 333,
        countLook: 222,
        datePublick: "13 августа",
    },
    {
        id: 2,
        name: "Лул Кекович",
        countLike: 11,
        countLook: 22,
        datePublick: "12 сентября",
    },
];

let dialogs = [
    { id: 1, name: "Александр" },
    { id: 2, name: "Марти" },
    { id: 3, name: "Сергей" },
    { id: 4, name: "Кекыч" },
    { id: 5, name: "Валик" },
];

ReactDOM.render( <
    React.StrictMode >
    <
    App posts = { posts }
    dialogs = { dialogs }
    />  <
    /React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();