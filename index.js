/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Brad Benvenuti @bradbenvenuti
*/
module.exports = function(content) {
	this.cacheable && this.cacheable();
	this.value = content;
	var template = content.replace(/"/, 'function(scope){ return `').replace(/"$/, '`};');
	return template;
};
