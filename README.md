# template-string-loader
Webpack ES6 Template String Loader

## Installation

`npm install template-string-loader`

## Usage


``` javascript
var template = require("babel!template-string!./file.html")({data: '123'});
```

``` html
<!-- file.html -->
<div>${scope.data}</div>
```

``` javascript
//returns
module.exports = function(scope){
    return `<div>${scope.data}</div>`;
}
```

``` html
<!-- renders as -->
<div>123</div>
```
