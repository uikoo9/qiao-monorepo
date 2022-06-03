'use strict';

// qiao
var qiao = require('../util/qiao.js');
global.insistime_userinfo = qiao.config.config('userinfo');

// service
var dishiService = require('dishi-service');

// vars
var showNum = 8;
var showLines = 29;
var showSplit1 = '======================== ';
var showSplit2 = '------------------------ ';

/**
 * show
 */
exports.show = async function (num) {
	// default
	num = num || showNum;

	// check
	var n = Number(num);
	if (!n || isNaN(n)) {
		qiao.log.danger('num must be number');
		return;
	}

	// default
	if (n > showNum || n < 1) n = showNum;

	// get group list
	var groups = await dishiService.todoGroupList();
	if (!groups) return;

	// check groups
	if (!groups.obj || !groups.obj.rows || !groups.obj.rows.length) {
		qiao.log.danger('no groups, add group first');
		return;
	}

	// for
	var res = [];
	var finalNum = Math.min(n, groups.obj.rows.length);
	for (var i = 0; i < finalNum; i++) {
		var group = groups.obj.rows[i];
		var items = await dishiService.todoItemList(group.id);
		res.push({
			group: group,
			items: items
		});
	}

	// list
	qiao.console.clear();
	for (var j = 0; j < showLines; j++) {
		writeLineContent(j, res);
	}
};

// write line content
function writeLineContent(i, res) {
	var s = [];
	for (var j = 0; j < res.length; j++) {
		var item = res[j];
		// title
		if (i == 0 || i == 2) s.push(showSplit1);
		if (i == 1) s.push(formatContent(`todo group '${item.group.todo_group_name}[${item.group.id}]'`));
		if (i == 3) s.push('');

		// todo rows
		if (i == 4) s.push(formatContent(`todo items`));
		if (i == 5) s.push(showSplit2);
		if (i > 5 && i < showLines) {
			var items = item.items.obj.todoRows;
			var index = i - 6;
			if (items.length > index) {
				var todo = items[index];
				s.push(formatContent(`${todo.id}-${todo.todo_item_name}`));
			} else {
				s.push(formatContent(''));
			}
		}
		if (i == showLines) s.push('');

		// done rows
		// if(i == 17) s.push(formatContent(`done items`));
		// if(i == 18) s.push(showSplit2);
		// if(i > 18 && i < showLines){
		// 	var items = item.items.obj.doneRows;
		// 	var index = i - 19;
		// 	if(items.length > index){
		// 		var done = items[index];
		// 		s.push(formatContent(`${done.id}-${done.todo_item_name}`));
		// 	}else{
		// 		s.push(formatContent(''));
		// 	}
		// }
	}

	var ss = s.join('');
	// title
	if (i == 0 || i == 1 || i == 2) {
		writeInfo(i, ss);
	}
	if (i == 3) {
		writeLog(i, ss);
	}

	// todo rows
	if (i == 4 || i == 5) {
		writeDanger(i, ss);
	}
	if (i > 5 && i <= showLines) {
		writeLog(i, ss);
	}

	// done rows
	// if(i == 17 || i == 18){
	// 	writeSuc(i, ss);
	// }	
	// if(i > 18 && i < showLines){
	// 	writeLog(i, ss);
	// }
}

// format content
function formatContent(r) {
	var sLength = showSplit1.length;
	var rLength = 0;

	for (var i = 0; i < r.length; i++) {
		r.charCodeAt(i) > 255 ? rLength += 2 : rLength++;

		if (rLength >= sLength) return r.substring(0, i + 1);
	}

	var rr = [r];
	var len = sLength - rLength;
	for (var i = 0; i < len; i++) rr.push(' ');

	return rr.join('');
}

// write info
function writeInfo(i, ss) {
	qiao.console.writeLine(i, qiao.cli.colors.blue(ss));
}

// write danger
function writeDanger(i, ss) {
	qiao.console.writeLine(i, qiao.cli.colors.red(ss));
}

// write suc
function writeSuc(i, ss) {
	qiao.console.writeLine(i, qiao.cli.colors.green(ss));
}

// write log
function writeLog(i, ss) {
	qiao.console.writeLine(i, ss);
}