'use strict';

// react
import React from 'react';

// css
import './footer.scss';

/**
 * mobile footer
 */
export class MobileFooter extends React.Component {
    render() {
        console.log('qiao-ui/mobile/footer: render');

        return (
            <div className="footer">
                <a target="_blank" href={this.props.companyUrl} rel="noreferrer">{this.props.companyName}</a>&nbsp;&nbsp;&nbsp;
                <a target="_blank" href={this.props.beianUrl} rel="noreferrer">{this.props.beianName}</a>
            </div>
        );
    }
}