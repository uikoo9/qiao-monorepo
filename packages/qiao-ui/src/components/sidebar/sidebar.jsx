// react
import React from 'react';

// css
import './sidebar.scss';

// js
import { getLinks } from './sidebar-fn.jsx';

/**
 * sidebar
 */
export class Sidebar extends React.Component {
    render() {
        // const
        const links = getLinks(this);

        // return
        return (
            <div className="list-group list-group-flush">{links}</div>
        );
    }
}