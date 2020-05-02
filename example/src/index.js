require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var arrows = require('../../src/index');

znui.react.createApplication({
    render: <div className="arrow-container">
        <arrows.BorderArrow />
        <arrows.ColorArrow/>
        <arrows.TooltipArrow />
    </div>
});