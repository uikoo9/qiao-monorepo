// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// manage
import { ManageContainer } from '@components/manage/manage.jsx';

/**
 * manage view
 */
class ManageView extends React.Component {
  render() {
    return (
      <ManageContainer
      />
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ManageView />);