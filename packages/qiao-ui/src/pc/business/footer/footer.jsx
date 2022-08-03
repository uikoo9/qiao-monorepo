// react
import React from 'react';

// css
import './footer.scss';

// ui
import { Link } from '../../index.js';

/**
 * footer
 */
export const Footer = (props) => {
    console.log('qiao-ui/pc/footer: render');

    return (
        <div className="footer">
            <Link url={props.companyUrl} txt={props.companyName} />&nbsp;&nbsp;&nbsp;
            <Link blank={true} url={props.beianUrl} txt={props.beianName} />
        </div>
    );
}