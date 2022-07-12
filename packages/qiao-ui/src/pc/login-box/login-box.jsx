// react
import React from 'react';

// css
import './login-box.scss';

// components
import { Input, Button } from '../../index.js'

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

        console.log('qiao-ui/pc/login-box: constructor');
    }

    usernameChange(e){
        this.setState({
            username: e.target.value
        });

        console.log('qiao-ui/pc/login-box: usernameChange');
    }
    passwordChange(e){
        this.setState({
            password: e.target.value
        });

        console.log('qiao-ui/pc/login-box: passwordChange');
    }

    clickLogin() {
        const username = this.state.username;
        const password = this.state.password;
        const callback = this.setTips;
        const loginSucUrl = this.props.loginSucUrl;

        this.props.loginClick(username, password, callback, loginSucUrl);

        console.log('qiao-ui/pc/login-box: clickLogin');
    }

    setTips(msg) {
        this.setState({
            loginTips: msg
        });

        console.log('qiao-ui/pc/login-box: setTips');
    }

    render() {
        console.log('qiao-ui/pc/login-box: render');
        
        return (
            <div className="box">
                <Input 
                    type="text" 
                    placeholder={this.props.usernameHolder}
                    value={this.state.username}
                    onChange={this.usernameChange}
                />
                <Input 
                    type="password" 
                    placeholder={this.props.passwordHolder}
                    value={this.state.password}
                    onChange={this.passwordChange}
                />
                <Button
                    onClick={this.clickLogin}
                    text={this.props.loginBtn}
                />
                <div className="tips">{this.state.loginTips}</div>
            </div>
        );
    }
}