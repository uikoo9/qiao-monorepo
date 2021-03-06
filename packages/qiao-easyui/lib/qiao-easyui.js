'use strict';

/**
 * $el.qser
 * 	将表单转为js对象
 */
$.fn.qser = function(){
	var obj = {};
	
	var objs = $(this).serializeArray();
	if(objs.length != 0){
		for(var i=0; i<objs.length; i++){
			obj[objs[i].name] = objs[i].value;
		}
	}

	return obj;
};

/**
 * qiao.ajax
 * 	对$.ajax的封装
 */
exports.ajax = function(options, success, fail){
	if(!options) return;
	
	var opt = $.extend({}, exports.ajax.options);
	if(typeof options == 'string'){
		opt.url = options;
	}else{
		$.extend(opt, options);
	}
	
	$.ajax(opt).done(function(obj){
		if(success) success(obj);
	}).fail(function(e){
		if(fail){
			fail(e);
		}else{
			console.log('网络传输失败，请稍候重试！');
		}
	});
};
exports.ajax.options = {
	url 		: '',
	data 		: {},
	type 		: 'post',
	dataType	: 'json',
	async 		: true,
	crossDomain	: false
};

/**
 * easyui.alert
 * 	options, msg
 * 	fn, callback
 * 
 * 	or
 * 
 * 	options.msg
 * 	options.title
 * 	options.icon: error,question,info,warning.
 * 	options.fn
 */
exports.alert = function(options, fn){
	if(!options) return;
	
	var opt = $.extend({}, exports.alert.options);
	if(typeof options == 'string'){
		opt.msg = options;
		
		if(fn) opt.fn = fn;
	}else{
		$.extend(opt, options);
	}
	
	$.messager.alert(opt);
};
exports.alert.options = {
	title 	: '提示',
	msg		: 'msg',
	icon	: ''
};

/**
 * easyui.confirm
 * 	options, msg
 * 	fn, callback
 * 
 * 	or
 * 
 * 	options.msg
 * 	options.title
 * 	options.icon: error,question,info,warning.
 * 	options.fn
 */
exports.confirm = function(options, fn){
	if(!options) return;
	
	// opt
	var opt = $.extend({}, exports.alert.options);
	if(typeof options == 'string'){
		opt.msg = options;
	}else{
		$.extend(opt, options);
	}
	
	// fn
	opt.fn = function(r){
		if(!r) return;
		
		if(typeof options == 'string' && fn) fn();
		if(typeof options != 'string' && options.fn) options.fn();
	};
	
	$.messager.confirm(opt);
};

/**
 * easyui.addTab
 * 	url
 * 	title
 */
exports.addTab = function(url, title){
	// check
	var $tabs = $('#tabs');
	if(!$tabs || !$tabs.length){
		console.log('error:not found tabs by #tabs');
		return;
	}
	
	// add
	$tabs.tabs('add',{
	    href	: url,
	    title	: title,
	    closable: true,
	    tools	: [{
	        iconCls:'icon-mini-refresh',
	        handler:function(){
	            var tab = $tabs.tabs('getSelected');
	            tab.panel('refresh', url);
	        }
	    }]
	});
};

/**
 * easyui.crud
 */
exports.crud = {};

/**
 * easyui.crud.init
 * 	options.url
 * 	options.cols
 * 	options.width
 * 	options.height
 * 	options.data
 */
exports.crud.init = function(options){
	// vars
	var url 		= options.url;
	var cols 		= options.cols;
	var width 		= options.width || 400;
	var height 		= options.height || 200;
	var data 		= options.data || {};
	var pageList	= options.pageList || [10, 50, 100];
	var toolbars	= options.toolbars;
	var callbacks 	= options.callbacks;
	
	// check
	if(!url || !cols){
		console.log('error: qiao.easyui.curd.init need url and cols');
		return;
	}
	
	// dg
	var $dg = $('#datagrid'); 
	if(!$dg || !$dg.length){
		console.log('error:not found datagrid by #datagrid');
		return;
	}
	
	// default toolbar
	var defaultToolbar = [{
    	text	: '添加',
		iconCls	: 'icon-add',
		handler	: function(){
			if(callbacks && callbacks.clickAdd) callbacks.clickAdd();
			
			exports.crud.save({
				title		: '添加',
				editUrl		: url + '/edit',
				saveUrl		: url + '/save',
				width		: width,
				height		: height,
				callbacks	: callbacks
			});
		}
    },{
    	text	: '修改',
    	iconCls	: 'icon-edit',
    	handler	: function(){
    		if(callbacks && callbacks.clickEdit) callbacks.clickEdit();
    		
    		exports.crud.edit({
				title		: '修改',
				editUrl		: url + '/edit',
				saveUrl		: url + '/save',
				width		: width,
				height		: height,
				callbacks	: callbacks
			});
		}
	},{
		text	: '删除',
		iconCls	: 'icon-no',
		handler	: function(){
			exports.crud.del(url + '/del');
		}
	},{
		text	: '搜索',
		iconCls	: 'icon-search',
		handler	: function(){
			if(callbacks && callbacks.clickSearch) callbacks.clickSearch();

			exports.crud.search({
				title		: '搜索',
				editUrl		: url + '/edit',
				searchUrl	: url + '/save',
				width		: width,
				height		: height,
				callbacks	: callbacks
			});
		}
	}, '-', {
		text	: '重置',
		iconCls	: 'icon-reload',
		handler	: function(){
			exports.crud.reset();
		}
	}];
	
	// datagrid
	$dg.datagrid({
	    url			: url + '/list',
	    queryParams	: data,
	    idField		: 'id',
	    loadMsg		: '加载中，请稍候...',
	    emptyMsg	: '暂无数据',
	    fitColumns	: true,
	    pagination	: true,
	    rownumbers	: true,
	    pageNumber	: 1,
	    pageSize	: pageList[0],
	    pageList	: pageList,
	    columns 	: cols,
	    toolbar		: initToolbar(toolbars, defaultToolbar),
	    loadFilter	: function(data){
	    	return data.obj;
	    },
		onLoadSuccess : function(){
			$dg.datagrid('clearChecked');
		}
	});
};

// init toolbar
function initToolbar(customToolbar, defaultToolbar){
	if(customToolbar){
		// add
		if(customToolbar.add === false) defaultToolbar[0] = null;
		if(customToolbar.add) defaultToolbar[0] = customToolbar.add;

		// edit
		if(customToolbar.edit === false) defaultToolbar[1] = null;
		if(customToolbar.edit) defaultToolbar[1] = customToolbar.edit;

		// del
		if(customToolbar.del === false) defaultToolbar[2] = null;
		if(customToolbar.del) defaultToolbar[2] = customToolbar.del;

		// search
		if(customToolbar.search === false) defaultToolbar[3] = null;
		if(customToolbar.search) defaultToolbar[3] = customToolbar.search;

		// reset
		if(customToolbar.reset === false){
			defaultToolbar[4] = null;
			defaultToolbar[5] = null;
		} 
		if(customToolbar.reset) defaultToolbar[5] = customToolbar.reset;
		
		// others
		if(customToolbar.others){
			defaultToolbar.push('-');
			defaultToolbar = defaultToolbar.concat(customToolbar.others);
		}
		
		// filter
		for(var i=0; i<defaultToolbar.length; i++){
			if(!defaultToolbar[i]) defaultToolbar.splice(i, 1);
		}
	}
	
	return defaultToolbar;
}

/**
 * crud.edit
 * 	options.id
 * 	options.title
 * 	options.editUrl
 * 	options.saveUrl
 * 	options.width
 * 	options.height
 */
exports.crud.edit = function(options){
	// dg
	var $dg = $('#datagrid'); 
	if(!$dg || !$dg.length){
		console.log('error:not found datagrid by #datagrid');
		return;
	}
	
	// rows
	var rows = $dg.datagrid('getChecked');
	if(!rows || rows.length != 1){
		exports.alert('请选择一条要修改的数据！');
		return;
	}
	
	// save
	options.id = rows[0].id;
	exports.crud.save(options);
};

/**
 * crud.save
 *	options.id
 * 	options.title
 * 	options.editUrl
 * 	options.saveUrl
 * 	options.width
 * 	options.height
 */
exports.crud.save = function(options){
	// check datagrid
	var $dg	= $('#datagrid');
	if(!$dg || !$dg.length){
		console.log('error:not found datagrid by #datagrid');
		return;
	}
	
	// check dialog
	var $dialog = $('#dialog');
	if(!$dialog || !$dialog.length){
		console.log('error:not found dialog by #dialog');
		return;
	}
	
	// options
	var id			= options.id;
	var title		= options.title;
	var editUrl 	= options.editUrl;
	var saveUrl 	= options.saveUrl;
	var width		= options.width;
	var height		= options.height;
	var callbacks	= options.callbacks;
	if(id) editUrl += '?id=' + options.id;
	
	// dialog 
	$dialog.dialog({
		href	: editUrl,
	    title	: title,
	    width	: width,
	    height	: height,
	    closed	: false,
	    cache	: false,
	    modal	: true,
	    buttons	:[{
			text	: '保存',
			handler	: function(){
				var $form = $('#form');
				$form.form('submit', {
					url		: saveUrl,
					onSubmit: function(param){
						return $form.form('validate');
					},
					success:function(data){
						if(!data) return;

						var json = JSON.parse(data);
						if(json && json.type == 'success'){
							$dialog.dialog('close');
							$dg.datagrid('reload');
						}else{
							exports.alert('保存失败！');
						}
						
						if(id){
							if(callbacks && callbacks.afterEdit) callbacks.afterEdit();
						}else{
							if(callbacks && callbacks.afterAdd) callbacks.afterAdd();
						}
					}
				});
			}
		},{
			text:'取消',
			handler:function(){
				$dialog.dialog('close');
			}
		}],
		onLoad	: function(){
			if(id){
				if(callbacks && callbacks.beforeEdit) callbacks.beforeEdit();
			}else{
				if(callbacks && callbacks.beforeAdd) callbacks.beforeAdd();
			}
		}
	});
};

/**
 * crud.del
 */
exports.crud.del = function(url){
	// check url
	if(!url){
		console.log('error:qiao.easyui.crud.del need url parmams');
		return;
	}
	
	// check datagrid
	var $dg = $('#datagrid'); 
	if(!$dg || !$dg.length){
		console.log('error:not found datagrid by #datagrid');
		return;
	}
	
	// check rows
	var rows = $dg.datagrid('getChecked');
	if(!rows || !rows.length){
		exports.alert('请选择要删除的行！');
		return;
	}
	
	// ids
	var ids = [];
	for(var i=0; i<rows.length; i++) ids.push(rows[i].id);
	
	// del
	exports.confirm('确认删除选中的数据吗？', function(){
		exports.ajax({
			url : url,
			data: {
				ids : ids.join(',')
			}
		}, function(s){
			if(s && s.type == 'success'){
				exports.alert('删除数据成功！', function(){
					$dg.datagrid('reload');
				});
			}else{
				exports.alert('请求' + url + '失败！');
			}
		});
	});
};

/**
 * crud.search
 */
exports.crud.search = function(options){
	// check datagrid
	var $dg	= $('#datagrid');
	if(!$dg || !$dg.length){
		console.log('error:not found datagrid by #datagrid');
		return;
	}
	
	// check dialog
	var $dialog = $('#dialog');
	if(!$dialog || !$dialog.length){
		console.log('error:not found dialog by #dialog');
		return;
	}
	
	// options
	var title		= options.title;
	var editUrl 	= options.editUrl;
	var searchUrl	= options.searchUrl;
	var width		= options.width;
	var height		= options.height;
	var callbacks 	= options.callbacks;
	
	// search
	$dialog.dialog({
		href	: editUrl,
	    title	: title,
	    width	: width,
	    height	: height,
	    closed	: false,
	    cache	: false,
	    modal	: true,
	    buttons	:[{
			text	: '搜索',
			handler	: function(){
				$dialog.dialog('close');
				$dg.datagrid('load', $('#form').qser());
				
				if(callbacks && callbacks.afterSearch) callbacks.afterSearch();
			}
		},{
			text:'取消',
			handler:function(){
				$dialog.dialog('close');
			}
		}],
		onLoad	: function(){
			$('#form').form('disableValidation');
			
			if(callbacks && callbacks.beforeSearch) callbacks.beforeSearch();
		}
	});
};

/**
 * crud.reset
 */
exports.crud.reset = function(){
	// check datagrid
	var $dg	= $('#datagrid');
	if(!$dg || !$dg.length){
		console.log('error:not found datagrid by #datagrid');
		return;
	}
	
	// reset
	$dg.datagrid('load', {});
};