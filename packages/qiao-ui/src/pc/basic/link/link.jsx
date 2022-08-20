// react
import React from 'react';

// css
import './link.scss';

// log
import { logRed } from '../../../util/log.js';

/**
 * link
 */
export const Link = (props) => {
    logRed('qiao-ui/pc/link: render');

    return (
        props.blank ?
            <a href={props.url} className="q-link" target="_blank" rel="noreferrer">{props.txt}</a>
            :
            <a href={props.url} className="q-link">{props.txt}</a>
    );
};