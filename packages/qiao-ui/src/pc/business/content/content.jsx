// react
import React from 'react';

// css
import './content.scss';

/**
 * content
 */
export const Content = (props) => {
    console.log('qiao-ui/pc/content: render');

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