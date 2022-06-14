// react
import React from 'react';

/**
 * get links
 * @param {*} that 
 * @returns links
 */
export const getLinks = (that) => {
    const links = that.props.links;
    if (!links) return;

    return links.map((link, index) => {
        if (!link || !link.name || !link.url) return;

        return <a href={link.url} className="list-group-item list-group-item-action" key={index}>{link.name}</a>;
    });
};