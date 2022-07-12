// react
import React from 'react';

// css
import './input.scss';

/**
 * input
 */
export class Input extends React.Component {
    render() {
        console.log('qiao-ui/pc/input: render');

        const hiddenInput = <input
            type={this.props.type}
            value={this.props.value}
        />;

        const normalInput = <div className="input">
            <input
                type={this.props.type}
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
                value={this.props.value}
            />
        </div>;

        return this.props.type == 'hidden' ? hiddenInput : normalInput;
    }
}