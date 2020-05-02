"use strict";

var React = znui.React || require('react');

module.exports = React.createClass({
  displayName: 'ZRTooltipArrow',
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-tooltip-arrow", this.props.direction, this.props.className)
    });
  }
});