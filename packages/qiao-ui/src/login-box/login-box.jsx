'use strict';

// react
import React from 'react';

// css
import './login-box.scss';

/**
 * login box
 */
export class LoginBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loginTips: '',
        };

        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.clickLogin = this.clickLogin.bind(this);
        this.setTips = this.setTips.bind(this);
    }

    usernameChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    passwordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    clickLogin() {
        const username = this.state.username;
        const password = this.state.password;
        const callback = this.setTips;
        const loginSucUrl = this.props.loginSucUrl;

        this.props.loginClick(username, password, callback, loginSucUrl);
    }

    setTips(msg) {
        this.setState({
            loginTips: msg
        });
    }

    render() {
        return (
            <div className="box">
                <div className="input">
                    <input
                        type="text"
                        placeholder={this.props.usernameHolder}
                        onChange={this.usernameChange}
                        value={this.state.username}
                    />
                </div>
                <div className="input">
                    <input
                        type="password"
                        placeholder={this.props.passwordHolder}
                        onChange={this.passwordChange}
                        value={this.state.password}
                    />
                </div>
                <div className="btn">
                    <div className="ctx" onClick={this.clickLogin}>{this.props.loginBtn}</div>
                </div>
                <div className="tips">{this.state.loginTips}</div>
            </div>
        );
    }
}