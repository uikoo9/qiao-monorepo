// react
import React from 'react';

// css
import './button.scss';

/**
 * button
 */
export class Button extends React.Component {
    render() {
        console.log('qiao-ui/pc/button: render');

        return (
            <div className="btn">
                <div className="ctx" onClick={this.props.onClick}>{this.props.text}</div>
            </div>
        );
    }
}