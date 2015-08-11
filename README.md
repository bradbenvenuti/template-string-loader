# template-string-loader
Webpack [ES6 Template String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings) Loader

## Installation

`npm install template-string-loader`

## Usage

``` html
<!-- file.html -->
<div>${scope.data}</div>
```

Pass your data as param

``` javascript
var template = require("babel!template-string!./file.html")({data: '123'});
```

The template string loader will return the below function. Your data is available on the scope param:

``` javascript
module.exports = function(scope){
    return `<div>${scope.data}</div>`;
}
```

Result:

``` html
<div>123</div>
```
