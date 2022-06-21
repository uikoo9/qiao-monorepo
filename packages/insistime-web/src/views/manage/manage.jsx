'use strict';

// react
import React from 'react';
import { createRoot } from 'react-dom/client';

// index
import {
    Header,
    Sidebar,
    Table,
} from 'qiao-ui';

// js
import {
    getCols,
    getRows,
} from './manage.js';

/**
 * index view
 */
class IndexView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headerDark: '',
            headerLogo: '',
            headerNavs: '',
            sidebarLinks: '',
            cols: '',
            rows: '',
        };
    }

    async componentDidMount(){
        // header
        const headerDark = true;
        const headerLogo = 'insistime.com';
        const headerNavs = [{
            url: '/',
            name: '首页'
        },{
            url: '/logout',
            name: '退出'
        }];
    
        // sidebar
        const sidebarLinks = [{
            url: '#',
            name: '用户管理'
        }];
    
        // table
        const cols = getCols();
        const rows = await getRows('108');

        this.setState({
            headerDark: headerDark,
            headerLogo: headerLogo,
            headerNavs: headerNavs,
            sidebarLinks: sidebarLinks,
            cols: cols,
            rows: rows,
        });
    }

    render() {
        return (
            <>
                <Header
                    isDark={this.state.headerDark}
                    logo={this.state.headerLogo}
                    navs={this.state.headerNavs}
                />

                <div className="container-fluid g-0">
                    <div className="row g-0">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5">
                            <Sidebar
                                links={this.state.sidebarLinks}
                            />
                        </div>
                        <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-8 col-7">
                            <Table
                                cols={this.state.cols}
                                rows={this.state.rows}
                            />
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