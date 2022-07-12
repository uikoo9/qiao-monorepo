'use strict';

// react
import React from 'react';
import {
    HashRouter,
    Routes,
    Route,
} from 'react-router-dom';

// css
import './manage.scss';

// ui
import {
    Header,
    Menus,
} from 'qiao-ui';

// components
import { ToDo } from './pages/todo.jsx';

/**
 * manage container
 */
export class ManageContainer extends React.Component {
    render() {
        console.log('insistime-web/manage-container: render');

        return <div className="container">
            <Header
                logo={this.props.constant.logo}
                navs={this.props.constant.navs}
            />
            <div className="content">
                <Menus 
                    menus={this.props.constant.menus}
                />
                <HashRouter>
                    <Routes>
                        <Route path='/todo/group' element={<ToDo />}/>
                    </Routes>
                </HashRouter>
            </div>
        </div>;
    }
}