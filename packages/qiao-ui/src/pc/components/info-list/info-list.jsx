// react
import React from 'react';

// css
import './info-list.scss';

// ui
import { Info } from '../info/info.jsx';

// log
import { colorLog } from '../../../util/log.js';

/**
 * info list
 */
export const InfoList = (props) => {
    colorLog('qiao-ui/pc/info-list: render');

    const infoItems = props.infoList && props.infoList.map((item, index) => {
        if (!item) return;

        return <Info
            key={index}
            blank={props.blank}
            url={item.url}
            title={item.title}
            desc={item.desc}
            other={item.other}
        />;
    });

    return (
        <div className='info-container'>
            {infoItems}
        </div>
    );
};