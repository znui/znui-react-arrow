# znui-react-arrow
Arrow Component.

[![npm](https://img.shields.io/npm/v/znui-react-arrow.svg)](https://www.npmjs.com/package/znui-react-arrow)
[![npm](https://img.shields.io/npm/dm/znui-react-arrow.svg)](https://www.npmjs.com/package/znui-react-arrow)

## Demo

[Take a look at the demo](https://znui.github.io/znui-react-arrow/example/www/index.html)

## Installation

```bash
npm install znui-react-arrow -s
```

## Usage

```javascript

var ReactDOM = require('react-dom');
var arrow = require('znui-react-arrow');
znui.react.createApplication({
    render: <div className="form-container">
        <arrows.BorderArrow />
        <arrows.ColorArrow/>
        <arrows.TooltipArrow />
    </div>
});
```

## License

MIT