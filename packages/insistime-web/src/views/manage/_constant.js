export default {
    logo: 'insistime.com',
    navs: [{
        name: 'logout',
        url: '/logout',
    }],
    menus: [{
        name: '待办管理',
        main: true,
    },{
        name: '待办组管理',
        url: '#/todo/group'
    },{
        name: '待办项管理',
        url: '#/todo/item'
    },{
        name: '日记管理',
        main: true,
    },{
        name: '日记类型管理',
        url: '#/diary/type'
    },{
        name: '用户管理',
        main: true,
    },{
        name: '菜单管理',
        url: '#/ucenter/menu'
    }],
};