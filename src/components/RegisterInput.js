import React from "react";
import PropTypes from "prop-types";

class RegisterInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onNameChange(event) {
        this.setState(() => {
            return {
                name: event.target.value,
            };
        });
    }

    onEmailChange(event) {
        this.setState(() => {
            return {
                email: event.target.value,
            };
        });
    }

    onPasswordChange(event) {
        this.setState(() => {
            return {
                password: event.target.value,
            };
        });
    }
    
    onSubmit(event) {
        event.preventDefault();

        this.props.register({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="register-form">
                <input type='text' placeholder='Name' value={this.state.name} onChange={this.onNameChange}></input>
                <input type='email' placeholder='Email' value={this.state.email} onChange={this.onEmailChange}></input>
                <input type='password' placeholder='Password' value={this.state.password} autoComplete='current-password' onChange={this.onPasswordChange}></input>
                <button>Register</button>
            </form>
        )
    }
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput;