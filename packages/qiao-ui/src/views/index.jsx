'use strict';

// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// index
import { 
    Header,
    Sidebar,
} from '../components/index.js';

/**
 * index view
 */
class IndexView extends React.Component {
    render() {
        // header
        const headerDark = true;
        const headerLogo = 'insistime.com';
        const headerNavs = [{
            url : '/',
            name : '首页'
        }];

        // sidebar
        const sidebarLinks = [{
            url : '#',
            name : '用户管理'
        }];

        return (
            <>
                <Header 
                    isDark={headerDark}
                    logo={headerLogo}
                    navs={headerNavs}
                />

                <div className="container-fluid g-0">
                    <div className="row g-0">
                        <div className="col-xxl-2">
                            <Sidebar
                                links={sidebarLinks}
                            />
                        </div>
                        <div className="col-xxl-10">
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<IndexView />);