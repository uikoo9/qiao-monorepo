'use strict';

// react
import React from 'react';

// css
import './info.scss';

/**
 * index info
 */
export default class IndexInfo extends React.Component {
  render() {
    const infos = this.props.infos && this.props.infos.map((info, index) => {
      if (!info.title) return;

      return <div className="col" key={index}>
        <div className="main">{info.title}</div>
        <div className="other">{info.desc}</div>
      </div>
    });

    return (
      <div className="info">{infos}</div>
    );
  }
}