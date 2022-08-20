// react
import React from 'react';

// css
import './info.scss';

// ui
import { Link } from '../../index.js';

// log
import { logRed } from '../../../util/log.js';

/**
 * info
 */
export const Info = (props) => {
    logRed('qiao-ui/pc/info: render');

    return <div className="info">
        <div className="item-title">
            <Link blank={props.blank} url={props.url} txt={props.title} />
        </div>
        <div className="item-desc">{props.desc}</div>
        <div className="item-other">{props.other}</div>
    </div>;
};