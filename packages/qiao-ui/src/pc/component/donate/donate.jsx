// react
import React from 'react';

// css
import './donate.scss';

// log
import { colorLog } from '../../../util/log.js';

/**
 * donate
 */
export const Donate = (props) => {
    colorLog('qiao-ui/pc/donate: render');

    return (
        <div className="donate">
            <div className="donate-img">
                <img src={require('./donate.png')} alt="donate" />
            </div>
            <div className="donate-tip">{props.tip}</div>
        </div>
    );
};