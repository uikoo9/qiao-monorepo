'use strict';

// react
import React from 'react';

// css
import './index-content.scss';

// constant
import Constant from '@components/mobile/_constant.js';

/**
 * index content
 */
export default class IndexContent extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="txt-main">{Constant.insistime}</div>  
        <div className="txt-other">{Constant.insistimeSolgan}</div>
      </div>
    );
  }
}