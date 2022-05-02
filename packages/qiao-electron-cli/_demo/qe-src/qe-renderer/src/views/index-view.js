'use strict';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// index
import IndexContainer from '@components/index/index.js';

/**
 * index view
 */
class IndexView extends React.Component {
  render() {
    return (
      <IndexContainer />
    );
  }
}

ReactDOM.render(
    <IndexView />,
    document.getElementById('root')
);