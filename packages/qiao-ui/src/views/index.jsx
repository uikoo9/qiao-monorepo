'use strict';

// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// index
import {
    Header,
    Sidebar,
    Table,
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
            url: '/',
            name: '首页'
        }];

        // sidebar
        const sidebarLinks = [{
            url: '#',
            name: '用户管理'
        }];

        // table
        const cols = [
            'id',
            'name',
            'age',
        ];
        const rows = [
            {id:1,name:'11',age:'111'},
            {id:2,name:'22',age:'222'},
            {id:3,name:'33',age:'333'},
            {id:4,name:'44',age:'444'},
        ];

        return (
            <>
                <Header
                    isDark={headerDark}
                    logo={headerLogo}
                    navs={headerNavs}
                />

                <div className="container-fluid g-0">
                    <div className="row g-0">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5">
                            <Sidebar
                                links={sidebarLinks}
                            />
                        </div>
                        <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-8 col-7">
                            {/* <Table
                                cols={cols}
                                rows={rows}
                            /> */}
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