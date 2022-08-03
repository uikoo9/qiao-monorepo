'use strict';

// react
import React from 'react';

// css
import './footer.scss';

/**
 * mobile footer
 */
export const MobileFooter = (props) => {
    console.log('qiao-ui/mobile/footer: render');

    return (
        <div className="footer">
            <a target="_blank" href={props.companyUrl} rel="noreferrer">{props.companyName}</a>&nbsp;&nbsp;&nbsp;
            <a target="_blank" href={props.beianUrl} rel="noreferrer">{props.beianName}</a>
        </div>
    );
};