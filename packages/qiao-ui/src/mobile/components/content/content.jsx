// react
import React from 'react';

// css
import './content.scss';

// log
import { colorLog } from '../../../util/log.js';

/**
 * mobile content
 */
export const MobileContent = (props) => {
    colorLog('qiao-ui/mobile/content: render');

    return (
        <div className="content">
            <div className="txt-main">{props.contentName}</div>
            <div className="txt-other">{props.contentSolgan}</div>
        </div>
    );
};