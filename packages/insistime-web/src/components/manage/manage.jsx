// react
import React from 'react';
import { HashRouter, Routes, Route} from 'react-router-dom';

// css
import './manage.scss';

// ui
import { Header, Menus } from 'qiao-ui';

// components
import { TodoGroup } from './pages/todo-group.jsx';
import { TodoItem } from './pages/todo-item.jsx';
import { DiaryType } from './pages/diary-type.jsx';
import { UcenterMenu } from './pages/ucenter-menu.jsx';

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
                        <Route path='/todo/group' element={<TodoGroup />}/>
                        <Route path='/todo/item' element={<TodoItem />}/>
                        <Route path='/diary/type' element={<DiaryType />}/>
                        <Route path='/ucenter/menu' element={<UcenterMenu />}/>
                    </Routes>
                </HashRouter>
            </div>
        </div>;
    }
}