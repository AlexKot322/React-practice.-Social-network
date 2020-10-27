import React from "react";
import { Field, reduxForm } from "redux-form";
import { require } from "../../utils/validators/validators";
import { Input } from "../common/preloader/FormControls/FormControls";



const LoginForm = (props) => {
    return (
 
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} validate={[require]} component={Input}/>
            </div>
            <div>
            <Field placeholder={"Password"} name={"password"} validate={[require]}  component={Input} />
            </div>
            <div>
            <Field component={Input} name={"rememberMe"} type={"checkbox"}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
  };

const LoginReduxForm = reduxForm({/* уникальное имя для формы */form: 'login'}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};



export default Login;
