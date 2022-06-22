// react
import React from 'react';

// css
import './footer.scss';

/**
 * footer
 */
export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <a target="_blank" href={this.props.companyUrl}>{this.props.companyName}</a>&nbsp;&nbsp;&nbsp;
        <a target="_blank" href={this.props.beianUrl}>{this.props.beianName}</a>
      </div>
    );
  }
}