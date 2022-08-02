// react
import React from 'react';

// css
import './info.scss';

// ui
import { Link } from '../../index.js';

/**
 * info
 */
export class Info extends React.Component {
    render() {
        console.log('qiao-ui/pc/info: render');

        return <div className="info">
            <div className="item-title">
                <Link blank={this.props.blank} url={this.props.url} txt={this.props.title}/>
            </div>
            <div className="item-desc">{this.props.desc}</div>
            <div className="item-other">{this.props.other}</div>
        </div>;
    }
}