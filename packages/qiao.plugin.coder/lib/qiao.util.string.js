'use strict';

/**
 * firstLetterUpper
 */
exports.firstLetterUpper = function(str){
	// check empty
	if(!str){
		console.log('need str');
		return null;
	}
	
	// check string
	if(typeof str != 'string'){
		console.log('need string');
		return null;
	}
	
	var firstLetter = str.charAt(0).toUpperCase();
	var strLength	= str.length;
	
	return strLength == 1 ? firstLetter : firstLetter + str.substr(1, strLength);
};

/**
 * tableNameToClassName
 * 	tableName : table name
 */
exports.tableNameToClassName = function(tableName){
	if(!tableName){
		console.log('need table name!');
		return;
	}
	
	var res		= [];
	var strs 	= tableName.split('_');
	for(var i=0; i<strs.length; i++){
		if(i == 0) continue;
		
		var str = strs[i];
		var strLower = str.toLowerCase();
		
		res.push(strLower.charAt(0).toUpperCase() + strLower.substr(1, strLower.length));
	}
	
	return res.join('');
};