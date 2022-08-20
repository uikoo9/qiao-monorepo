// react
import React from 'react';

// css
import './content.scss';

// log
import { logRed } from '../../../util/log.js';

/**
 * content
 */
export const Content = (props) => {
    logRed('qiao-ui/pc/content: render');

    return (
        <div className="content">
            <div className="txt">
                <div className="txt-main">{props.contentName}</div>
                <div className="txt-other">{props.contentSolgan}</div>
            </div>
            <div className="pic"></div>
        </div>
    );
};