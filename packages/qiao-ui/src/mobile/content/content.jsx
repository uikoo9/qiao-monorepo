// react
import React from 'react';

// css
import './content.scss';

/**
 * mobile content
 */
export const MobileContent = (props) => {
    console.log('qiao-ui/mobile/content: render');

    return (
        <div className="content">
            <div className="txt-main">{props.contentName}</div>
            <div className="txt-other">{props.contentSolgan}</div>
        </div>
    );
};