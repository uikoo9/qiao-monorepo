// react
import React from 'react';

// css
import './tips.scss';

// log
import { colorLog } from '../../../util/log.js';

/**
 * tips
 */
export const Tips = (props) => {
    colorLog('qiao-ui/pc/tips: render');

    return <div className="tips">{props.tips}</div>;
};