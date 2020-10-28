import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login, logout } from "../../redux/AuthReducer";
import { require } from "../../utils/validators/validators";
import { Input } from "../common/preloader/FormControls/FormControls";
import style from "./../common/preloader/FormControls/FormControls.module.css"



const LoginForm = (props) => {
    return (
 
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} validate={[require]} component={Input}/>
            </div>
            <div>
            <Field placeholder={"Password"} name={"password"} validate={[require]} type={"password"}  component={Input} />
            </div>
            <div>
            <Field component={Input} name={"rememberMe"} type={"checkbox"}/>Remember me
            </div>
            { props.error && <div className={style.formSummaryError}>
            {props.error}
            </div>
            } 
            <div>
                <button>Login</button>
            </div>
        </form>
    );
  };

const LoginReduxForm = reduxForm({/* уникальное имя для формы */form: 'login'}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
      return <Redirect to={"/profile"}/>
    }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
