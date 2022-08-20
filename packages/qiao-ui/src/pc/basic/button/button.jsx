// react
import React from 'react';

// css
import './button.scss';

// log
import { logRed } from '../../../util/log.js';

/**
 * button
 */
export const Button = (props) => {
    logRed('qiao-ui/pc/button: render');

    return (
        <div className="btn">
            <div 
                className="ctx" 
                style={{width: props.width}}
                onClick={props.onClick}
            >
                {props.text}
            </div>
        </div>
    );
};