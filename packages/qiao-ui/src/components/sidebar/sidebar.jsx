'use strict';

// react
import React from 'react';

// css
import './sidebar.scss';

/**
 * sidebar
 */
export class Sidebar extends React.Component {
    render() {
        // const
        const links = this.props.links && this.props.links.map((link, index) => {
            if (!link || !link.name) return;
      
            return <a href={link.url} className="list-group-item list-group-item-action" key={index}>{link.name}</a>;
        });

        // return
        return (
            <div className="list-group list-group-flush">{links}</div>
        );
    }
}