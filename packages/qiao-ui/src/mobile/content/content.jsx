'use strict';

// react
import React from 'react';

// css
import './content.scss';

/**
 * mobile content
 */
export class MobileContent extends React.Component {
    render() {
        console.log('qiao-ui/mobile/content: render');

        return (
            <div className="content">
                <div className="txt-main">{this.props.contentName}</div>
                <div className="txt-other">{this.props.contentSolgan}</div>
            </div>
        );
    }
}