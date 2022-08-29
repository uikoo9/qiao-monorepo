// react
import React, { useState } from 'react';

// css
import './login-box.scss';

// components
import { Input, Button, Tips } from '../../index.js';

// log
import { colorLog } from '../../../util/log.js';

/**
 * login box
 */
export const LoginBox = (props) => {
    colorLog('qiao-ui/pc/login-box: render');

    // state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginTips, setLoginTips] = useState('');

    // click login
    const clickLogin = () => {
        colorLog('qiao-ui/pc/login-box: clickLogin');

        props.loginClick(username, password, setTips, props.loginSucUrl);
    };

    // set tips
    const setTips = (msg) => {
        colorLog('qiao-ui/pc/login-box: setTips');

        setLoginTips(msg);
    };

    // return
    return (
        <div className="box">
            <Input
                type="text"
                placeholder={props.usernameHolder}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                type="password"
                placeholder={props.passwordHolder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                onClick={clickLogin}
                text={props.loginBtn}
            />
            <Tips
                tips={loginTips}
            />
        </div>
    );
};