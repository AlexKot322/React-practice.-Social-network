import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

let SomeComponent = () => <Dialogs />;

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route
            path="/Dialogs"
            render={() => <DialogsContainer />}
          />
          <Route
            path="/Profile"
            render={() => <ProfileContainer />}
          />
          
          <Route
            path="/Users"
            render={() => <UsersContainer/>}
          />
          <Route path="/News" render={() => <News />} />{" "}
          <Route path="/Music" render={() => <Music />} />{" "}
          <Route path="/Settings" render={() => <Settings />} />{" "}
        </div>{" "}
      </div>{" "}
    </BrowserRouter>
  );
};

export default App;
