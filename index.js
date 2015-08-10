/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Brad Benvenuti @bradbenvenuti
*/
module.exports = function(content) {
	this.cacheable && this.cacheable();
	this.value = content;
	var template = content.toString();
	template = template.replace('module.exports = "', '');
	template = template.substring(0, template.length - 1);
	return "module.exports = function(scope){ return `" + template + "`};";
}
module.exports.raw = true;
