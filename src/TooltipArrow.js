var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRTooltipArrow',
	getDefaultProps: function (){
		return {
			
		};
	},
	render: function(){
		return (
			<div className={znui.react.classname("zr-tooltip-arrow", this.props.direction, this.props.className)}>
				
			</div>
		);
	}
});