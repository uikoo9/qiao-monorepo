// react
import React from 'react';

// css
import './footer.scss';

// ui
import { Link } from '../../index.js';

/**
 * footer
 */
export class Footer extends React.Component {
    render() {
        console.log('qiao-ui/pc/footer: render');

        return (
            <div className="footer">
                <Link url={this.props.companyUrl} txt={this.props.companyName}/>&nbsp;&nbsp;&nbsp;
                <Link blank={true} url={this.props.beianUrl} txt={this.props.beianName}/>
            </div>
        );
    }
}