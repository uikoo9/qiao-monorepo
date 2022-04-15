'use strict';

// qrcode
var qrcode = require('qrcode');

/**
 * qiao.qrcode
 * 	obj.type
 * 		canvas，img，svg
 * 	obj.id
 * 		父容器，<div id="qrcode"></div>
 * 	obj.text
 * 		二维码内容
 * 	obj.options
 * 		二维码选项，https://www.npmjs.com/package/qrcode#options
 */
exports.qrcode = function(obj){
	if(!obj.type) return;
	
	if(obj.type == 'canvas') qrcodeCanvas(obj);
	if(obj.type == 'img') qrcodeImg(obj);
	if(obj.type == 'svg') qrcodeSvg(obj);
};

// canvas
function qrcodeCanvas(obj){
	// vars
	var id		= obj.id;
	var text 	= obj.text;
	var options	= obj.options || {};
	if(!id || !text) return;
	
	// div
	var $div 	= document.getElementById(id);
	if(!$div) return;
	
	// canvas
	var cid			= id + '-canvas'
	var canvas 		= '<canvas id="' + cid + '"></canvas>';
	$div.innerHTML 	= canvas;
	
	// render
	options.width = options.width || $div.offsetWidth;
	qrcode.toCanvas(document.getElementById(cid), text, options, function(error){
		if(error){
			console.error(error);
			return;
		}
	});
}

// img
function qrcodeImg(obj){
	// vars
	var id		= obj.id;
	var text 	= obj.text;
	var options	= obj.options || {};
	if(!id || !text) return;
	
	// div
	var $div 	= document.getElementById(id);
	if(!$div) return;
	
	// render
	options.width = options.width || $div.offsetWidth;
	qrcode.toDataURL(text, options, function(error, url){
		if(error){
			console.error(error);
			return;
		}

		var img 	= new Image();
		img.src 	= url;
		img.width	= options.width;
		img.height	= options.width;
		
		$div.appendChild(img);
	});
}

// svg
function qrcodeSvg(obj){
	// vars
	var id		= obj.id;
	var text 	= obj.text;
	var options	= obj.options || {};
	if(!id || !text) return;
	
	// div
	var $div 	= document.getElementById(id);
	if(!$div) return;
	
	// render
	options.width = options.width || $div.offsetWidth;
	qrcode.toString(text, options, function(error, svg){
		if(error){
			console.error(error);
			return;
		}

		$div.innerHTML 	= svg;
	});
}