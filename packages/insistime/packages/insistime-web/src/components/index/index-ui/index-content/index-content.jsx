'use strict';

// react
import React from 'react';

// css
import './index-content.scss';

// constant
import Constant from '@components/index/_constant.js';

/**
 * index content
 */
export default class IndexContent extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="txt">
          <div className="txt-container">
            <div className="txt-main">{Constant.insistime}</div>  
            <div className="txt-other">{Constant.insistimeSolgan}</div>
          </div>
        </div>
        <div className="pic"></div>
      </div>
    );
  }
}