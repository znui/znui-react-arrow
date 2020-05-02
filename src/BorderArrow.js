var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');

module.exports = React.createClass({
	displayName:'ZRBorderArrow',
	getDefaultProps: function (){
		return {
			
		};
	},
	render: function(){
		return (
			<div className={"arrow-right arrow-box"}>
				<span class="right">
					<i class="right-arrow1" />
					<i class="right-arrow2" />
				</span>
			</div>
		);
	}
});
