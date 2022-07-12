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

        return (
            <div className="input">
                <input
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
            </div>
        );
    }
}