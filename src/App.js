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

const App = () => {
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
        component = { Dialogs }
        /> <
        Route path = "/Profile"
        component = { Profile }
        /> <
        Route path = "/News"
        component = { News }
        /> <
        Route path = "/Music"
        component = { Music }
        /> <
        Route path = "/Settings"
        component = { Settings }
        /> <
        /div> <
        /div> <
        /BrowserRouter>
    )
};

export default App;