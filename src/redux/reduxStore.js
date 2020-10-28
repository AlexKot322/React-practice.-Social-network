import authReducer from "./AuthReducer";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./AppReducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
    
export default store;

