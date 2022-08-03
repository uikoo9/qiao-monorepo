// react
import React from 'react';

// css
import './tips.scss';

/**
 * tips
 */
export const Tips = (props) => {
    console.log('qiao-ui/pc/tips: render');

    return <div className="tips">{props.tips}</div>;
};