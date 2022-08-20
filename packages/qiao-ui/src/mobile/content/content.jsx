// react
import React from 'react';

// css
import './content.scss';

// log
import { logRed } from '../../util/log.js';

/**
 * mobile content
 */
export const MobileContent = (props) => {
    logRed('qiao-ui/mobile/content: render');

    return (
        <div className="content">
            <div className="txt-main">{props.contentName}</div>
            <div className="txt-other">{props.contentSolgan}</div>
        </div>
    );
};