import React, {Component} from "react";
import "./auth.scss";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/input";

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export default class Auth extends  Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Enter correct email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Enter correct password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault();
    }

    validateControl(value, validation) {
        if (!validation){
            return true;
        }

        let isValid = true;

        if(validation.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(validation.email){
            isValid = validateEmail(value) && isValid;
        }
        if(validation.minLength){
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        this.setState({
            formControls
        })
    }

    renderInputs() {
        return  Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={(event) => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className="auth">
                <div>
                    <h1>Authorization</h1>

                    <form onSubmit={this.submitHandler} className="auth--form">
                        { this.renderInputs() }
                        <div>
                            <Button type="btn-success"
                                    onClick={this.loginHandler}
                            >Log in</Button>
                            <Button type="btn-primary"
                                    onClick={this.registerHandler}
                            >Registration</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
