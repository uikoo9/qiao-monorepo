// react
import React from 'react';

// css
import './footer.scss';

// log
import { colorLog } from '../../util/log.js';

/**
 * mobile footer
 */
export const MobileFooter = (props) => {
    colorLog('qiao-ui/mobile/footer: render');

    return (
        <div className="footer">
            <a target="_blank" href={props.companyUrl} rel="noreferrer">{props.companyName}</a>&nbsp;&nbsp;&nbsp;
            <a target="_blank" href={props.beianUrl} rel="noreferrer">{props.beianName}</a>
        </div>
    );
};