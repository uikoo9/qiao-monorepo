'use strict';

/**
 * qiao.ajax
 * 对$.ajax的封装
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
 * alert
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
	icon	: '',
	fn		: null 
};

/**
 * add tab
 * 	url
 * 	title
 */
exports.addTab = function(url, title){
	var $tabs = $('#tabs');
	
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
 * crud
 */
exports.crud = {};

exports.crud.init = function(url, cols){
	if(!url || !cols){
		console.log('error: qiao.easyui.curd.init need url and cols');
		return;
	}
	
	var $this = $('#datagrid'); 
	if(!$this){
		console.log('error:not found datagrid by #datagrid');
		return;
	}
	
	$this.datagrid({
	    url			: url + '/list',
	    idField		: 'id',
	    loadMsg		: '加载中，请稍候...',
	    emptyMsg	: '暂无数据',
	    fitColumns	: true,
	    pagination	: true,
	    rownumbers	: true,
	    pageNumber	: 1,
	    pageSize	: 10,
	    pageList	: [10,50,100],
	    columns 	: cols,
	    loadFilter	: function(data){
	    	return data.obj;
	    },
	    toolbar: [{
	    	text	: '添加',
			iconCls	: 'icon-add',
			handler	: function(){
				exports.crud.save({
					title	: '添加',
					editUrl	: url + '/edit',
					saveUrl	: url + '/save',
					width	: 400,
					height	: 200
				});
			}
	    },'-',{
	    	text	: '修改',
	    	iconCls	: 'icon-edit',
	    	handler	: function(){
	    		exports.crud.edit({
					title	: '修改',
					editUrl	: url + '/edit',
					saveUrl	: url + '/save',
					width	: 400,
					height	: 200
				});
			}
		},'-',{
			text	: '删除',
			iconCls	: 'icon-no',
			handler	: function(){
				exports.crud.del(url + '/del');
			}
		},'-',{
			text	: '搜索',
			iconCls	: 'icon-search',
			handler	: function(){
				alert(1);
			}
		}]
	});
};

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
	var $this = $('#datagrid'); 
	if(!$this){
		console.log('error:not found datagrid by #datagrid');
		return;
	}
	
	var rows = $this.datagrid('getChecked');
	if(!rows || rows.length != 1){
		exports.alert('请选择一条要修改的数据！');
		return;
	}
	
	options.id = rows[0].id;
	exports.crud.save(options);
};

/**
 * crud.save
 */
exports.crud.save = function(options){
	var id		= options.id;
	var title	= options.title;
	var editUrl = options.editUrl;
	var saveUrl = options.saveUrl;
	var width	= options.width;
	var height	= options.height;
	
	if(id) editUrl += '?id=' + options.id;
	
	var $dialog = $('#dialog');
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
							$('#datagrid').datagrid('reload');
						}else{
							exports.alert('保存失败！');
						}
					}
				});
			}
		},{
			text:'取消',
			handler:function(){
				$dialog.dialog('close');
			}
		}]
	});
};

/**
 * crud.del
 */
exports.crud.del = function(url){
	if(!url){
		console.log('error:qiao.easyui.crud.del need url parmams');
		return;
	}
	
	var $this = $('#datagrid'); 
	if(!$this){
		console.log('error:not found datagrid by #dg');
		return;
	}
	
	var rows = $this.datagrid('getChecked');
	if(!rows || !rows.length){
		exports.alert('请选择要删除的行！');
		return;
	}
	
	var ids = [];
	for(var i=0; i<rows.length; i++) ids.push(rows[i].id);
	
	exports.ajax({
		url : url,
		data: {
			ids : ids.join(',')
		}
	}, function(s){
		if(s && s.type == 'success'){
			exports.alert('删除数据成功！', function(){
				$this.datagrid('reload');
			});
		}else{
			exports.alert('请求' + url + '失败！');
		}
	});
};