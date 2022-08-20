// react
import React from 'react';

// css
import './tips.scss';

// log
import { logRed } from '../../../util/log.js';

/**
 * tips
 */
export const Tips = (props) => {
    logRed('qiao-ui/pc/tips: render');

    return <div className="tips">{props.tips}</div>;
};