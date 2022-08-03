// react
import React from 'react';

// css
import './button.scss';

/**
 * button
 */
export const Button = (props) => {
    console.log('qiao-ui/pc/button: render');

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