"use strict";

var React = znui.React || require('react');

var ReactDOM = znui.ReactDOM || require('react-dom');

module.exports = React.createClass({
  displayName: 'ZRBorderArrow',
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "arrow-right arrow-box"
    }, /*#__PURE__*/React.createElement("span", {
      "class": "right"
    }, /*#__PURE__*/React.createElement("i", {
      "class": "right-arrow1"
    }), /*#__PURE__*/React.createElement("i", {
      "class": "right-arrow2"
    })));
  }
});