// react
import React from 'react';

// css
import './link.scss';

/**
 * link
 */
export class Link extends React.Component {
    render() {
        console.log('qiao-ui/pc/link: render');

        return (
            this.props.blank ? 
                <a href={this.props.url} className="q-link" target="_blank">{this.props.txt}</a>
                :
                <a href={this.props.url} className="q-link">{this.props.txt}</a>
        );
    }
}