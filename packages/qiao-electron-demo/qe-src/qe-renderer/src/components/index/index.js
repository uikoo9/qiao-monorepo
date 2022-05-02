'use strict';

// react
import React from 'react';

// index ui
import IndexComponent from './index-ui/index.js';

// index func
import {
} from './index-fn/index.js';

/**
 * index container
 */
export default class IndexContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <IndexComponent
      />
    );
  }
}