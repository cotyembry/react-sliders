import React from 'react';
import ReactDOM from 'react-dom';

var customState = { hasRan: false };

var Handle = React.createClass({
	customEvent: new Event('increase'),
	mouseMoveId: "",
	adjustSize: function() {
		this.setState({
			overallWidth: document.documentElement.clientWidth
		})
	},
	getInitialState: function() {
		return {
			left: 0,
			mouseDown: false,
			mouseOut: false,
			oldX: 0,
			overallWidth: 0
		}
	},
	componentDidMount: function() {
		var self = this;
		document.addEventListener('resize', this.adjustSize);

		console.log(document.getElementById('div' + this.props._id ).style.width);

		this.setState({
			left: parseFloat(document.getElementById('div' + this.props._id ).style.width) + '%',
			overallWidth: document.documentElement.clientWidth
		})
	},
	checkMovement: function(event) {
		var movement = this.oldX - event.clientX;
		var returnValue = 0;

		//now see if movement is enough to cause an update
		var currentPercent = (this.oldX / this.overallWidth) * 100;
		var newPercent = ( (this.oldX + movement) / this.overallWidth ) * 100;
		//when will it be updated?
			//if it needs to increase or decrease at least 1%

		var diff = currentPercent - newPercent;
		if(diff < 0) diff *= -1;
		if(diff > 1) {
			returnValue = diff;
		}


		return returnValue; //return 1 for increase, return 2 for decrease
	},
	mouseDown: function(event) {
		//this makes it where the div isn't 'draggable'
		event.preventDefault();
		this.mouseMoveId = event.target.id;
		this.setState({ mouseDown: true, oldX: event.clientX });
	},
	mouseUp: function(event) {
		document.getElementById(this.mouseMoveId).dispatchEvent(this.customEvent);

		document.removeEventListener("mousemove", this.mouseMove);
		document.removeEventListener("mouseup", this.mouseUp);
		customState.hasRan = false;
		this.setState({ mouseDown: false, oldX: event.clientX });
	},
	mouseMove: function(event) {
		if(this.state.mouseDown == true) {
			//this if is for safety when the user navigates off of the small 10 by 10 pixel slider div handle and the event that is being generated from there doesnt have the correct id to reference the slider handle rather than something else
			if(this.state.mouseOut == false) {
				this.mouseMoveId = event.target.id;
			}

			
			
			if(this.state.oldX < event.clientX) {
				this.setState({
					left: (parseFloat(this.state.left) + (((event.clientX - this.state.oldX) / this.state.overallWidth) * 100)) + '%'
				})
			}
			else {
				this.setState({
					left: (parseFloat(this.state.left) - (((this.state.oldX - event.clientX) / this.state.overallWidth) * 100)) + '%'
				})
			}

			//add functionality to just increment or decrement in 1% increment/decrements
			// switch(this.checkMovement(event)) {
			// 	case 1:
			// 		//'increase'

			// 		break;

			// 	case 2:
			// 		//'decrease'

			// 		break;

			// 	default: 
			// 		//don't update

			// 		break;
			// }
			


			//for any components that care, I'll emit an event
			// Dispatch the event.
			document.getElementById(this.mouseMoveId).dispatchEvent(this.customEvent);
		}
		this.setState({ oldX: event.clientX });
	},
	mouseOut: function() {
		if(this.state.mouseDown == true) {
			if(customState.hasRan == false) {
				document.addEventListener("mousemove", this.mouseMove);
				document.addEventListener("mouseup", this.mouseUp);
				customState.hasRan = true;
			}
		}
		this.setState({mouseOut: true});
	},
	mouseIn: function() {
		this.setState({mouseOut: false});
	},
	render: function() {
		return <div id={"handle" + this.props._id} ref={(c) => this.handleElement = c} className="handleClass" onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} onMouseMove={this.mouseMove}  onMouseOut={this.mouseOut} onMouseIn={this.mouseIn} style={{ 'width': '10px', 'height': '10px', 'background': 'grey', 'position': 'absolute', 'draggable': 'false', 'borderRadius': '2.5px', 'zIndex': '10', 'left': this.state.left }}></div>
	}
});

export default Handle;