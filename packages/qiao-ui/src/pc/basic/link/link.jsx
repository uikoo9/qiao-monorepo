// react
import React from 'react';

// css
import './link.scss';

/**
 * link
 */
export function Link(props) {
    console.log('qiao-ui/pc/link: render');

    return (
        props.blank ?
            <a href={props.url} className="q-link" target="_blank">{props.txt}</a>
            :
            <a href={props.url} className="q-link">{props.txt}</a>
    );
}