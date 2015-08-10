/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Brad Benvenuti @bradbenvenuti
*/
module.exports = function(content) {
	this.cacheable && this.cacheable();
	this.value = content;
	return 'module.exports=function(scope){ return `' + content + '`};';
};
