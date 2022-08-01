// react
import React from 'react';

// css
import './tips.scss';

/**
 * tips
 */
export class Tips extends React.Component {
    render() {
        console.log('qiao-ui/pc/tips: render');
        
        return <div className="tips">{this.props.tips}</div>;
    }
}