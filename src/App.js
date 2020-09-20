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



let SomeComponent = () => < Dialogs / > ;

const App = (props) => {
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
                render = {
                    () => < Dialogs dialogs = { props.dialogs }
                    messages = { props.messages }
                    />} / >
                    <
                    Route path = "/Profile"
                    render = {
                        () => < Profile posts = { props.posts }
                        />} / >
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