import React from "react";
import PropTypes from "prop-types";

class LoginInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

        this.props.login({
            email: this.state.email,
            password: this.state.password,
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="register-form">
                <input type="email" placeholder='Email' value={this.state.email} onChange={this.onEmailChange}></input>
                <input type='password' placeholder='Password' value={this.state.password} autoComplete='current-password' onChange={this.onPasswordChange}></input>
                <button>Login</button>
            </form>
        )
    }
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;