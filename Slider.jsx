import React from 'react';
import ReactDOM from 'react-dom';

import Handle from './Handle.jsx';

var Slider = React.createClass({
	componentDidMount: function() {
		var self = this;

		document.getElementById('handle1').addEventListener('increase', function() {
			self.handle1ElementIncrease();
		});
		document.getElementById('handle2').addEventListener('increase', function() {
			self.handle2ElementIncrease();
		});
		document.getElementById('handle3').addEventListener('increase', function() {
			self.handle3ElementIncrease();
		});
		
	},
	getInitialState: function() {
		return {
			div1width: '10%',
			div2width: '20%',
			div3width: '30%',
			div4width: '40%',
			handle1: 0,
			handle2: 0,
			handle3: 0
		}
	},
	handle1ElementIncrease: function() {

	},
	handle2ElementIncrease: function() {

	},
	handle3ElementIncrease: function() {

	},
	render: function() {
		return (
			<div>
				<div id="div1" style={{ 'height': '10px', 'width': this.state.div1width, 'background': this.props.div1color, 'zIndex': this.props.div1zindex, 'position': 'absolute' }}></div>
				<Handle _id="1"/>
				<div id="div2" style={{ 'height': '10px', 'width': this.state.div2width, 'background': this.props.div2color, 'zIndex': this.props.div2zindex, 'position': 'absolute' }}></div>
				<Handle _id="2"/>
				<div id="div3" style={{ 'height': '10px', 'width': this.state.div3width, 'background': this.props.div3color, 'zIndex': this.props.div3zindex, 'position': 'absolute' }}></div>
				<Handle _id="3"/>
				<div id="div4" style={{ 'height': '10px', 'width': this.state.div4width, 'background': this.props.div4color, 'zIndex': this.props.div4zindex, 'position': 'absolute' }}></div>
			</div>
		)
	}
})

var styles = {
	'height': '10px'
}

// ReactDOM.render(
// 	<Slider div1color="blue" div2color="green" div3color="yellow" div4color="red" div1zindex='4' div2zindex='3' div3zindex='2' div4zindex='1' />,
// 	document.getElementById('Slider')
// );

export default Slider;