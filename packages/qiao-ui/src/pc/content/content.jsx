// react
import React from 'react';

// css
import './content.scss';

/**
 * content
 */
export class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="txt">
          <div className="txt-main">{this.props.contentName}</div>
          <div className="txt-other">{this.props.contentSolgan}</div>
        </div>
        <div className="pic"></div>
      </div>
    );
  }
}