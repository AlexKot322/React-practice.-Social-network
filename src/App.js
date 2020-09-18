import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";

let SomeComponent = () => < Dialogs / >

    const App = () => {

            let posts = [
                { id: 1, name: 'Александр Котовсков', countLike: 333, countLook: 222, datePublick: "13 августа" },
                { id: 2, name: 'Лул Кекович', countLike: 11, countLook: 22, datePublick: "12 сентября" }
            ]

            return ( <
                BrowserRouter >
                <
                div className = "app-wrapper" >
                <
                Header / >
                <
                Nav / >
                <
                div className = "app-wrapper-content" >
                <
                Route path = "/Dialogs"
                render = { SomeComponent }
                /> <
                Route path = "/Profile"
                render = {
                    () => < Profile posts = { posts }
                    /> } / >
                    <
                    Route path = "/News"
                    render = {
                        () => < News / > }
                    /> <
                    Route path = "/Music"
                    render = {
                        () => < Music / > }
                    /> <
                    Route path = "/Settings"
                    render = {
                        () => < Settings / > }
                    /> <
                    /div> <
                    /div> <
                    /BrowserRouter>
                );
            };

            export default App;