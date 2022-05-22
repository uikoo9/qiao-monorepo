'use strict';

// react
import React from 'react';

// css
import './index-footer.scss';

// constant
import Constant from '@components/index/_constant.js';

/**
 * index footer
 */
export default class IndexFooter extends React.Component {
  render() {
    return (
      <div className="footer">
        <a target="_blank" href={Constant.insistimeUrl}>{Constant.insistime}</a>&nbsp;&nbsp;&nbsp;
				<a target="_blank" href={Constant.beianUrl}>{Constant.beian}</a>
      </div>
    );
  }
}