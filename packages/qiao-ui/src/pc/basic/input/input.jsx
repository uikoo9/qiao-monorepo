// react
import React from 'react';

// css
import './input.scss';

/**
 * input
 */
export const Input = (props) => {
    console.log('qiao-ui/pc/input: render');

    const hiddenInput = <input
        type={props.type}
        value={props.value}
    />;

    const normalInput = <div className="input">
        <input
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
        />
    </div>;

    return props.type == 'hidden' ? hiddenInput : normalInput;
};