'use strict';

// react
import React from 'react';

// css
import './info-list.scss';

/**
 * mobile info
 */
export class MobileInfoList extends React.Component {
  render() {
    const infos = this.props.infos && this.props.infos.map((info, index) => {
      if (!info.title) return;

      return <div className="info" key={index}>
        <div className="title">{info.title}</div>
        <div className="desc">{info.desc}</div>
      </div>
    });

    return (
      <div className="infos">{infos}</div>
    );
  }
}