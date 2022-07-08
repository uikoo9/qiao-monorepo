// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// search
import { SearchContainer } from '@components/search/search.jsx';

/**
 * search view
 */
class SearchView extends React.Component {
    render() {
        console.log('insistime-web/search-view: render');
        
        return (
            <SearchContainer />
        );
    }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SearchView />);