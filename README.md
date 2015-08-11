# template-string-loader
Webpack [ES6 Template String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings) Loader

## Installation

`npm install template-string-loader`

## Usage
You will need to use this with the babel loader or some other ES6 loader that supports template strings.

``` javascript
var template = require("babel!template-string!./file.html")({data: '123'});
```

Example template:

``` html
<!-- file.html -->
<div>${scope.data}</div>
```

The loader returns a function like below. Call the function with the data you want to pass to the template. That data is available on the scope param:

``` javascript
module.exports = function(scope){
    return `<div>${scope.data}</div>`;
}
```

Result:

``` html
<div>123</div>
```
