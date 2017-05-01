import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pad.css';

class Pad extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			value: props.value,
			valueRange: props.max - props.min
		}
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
	}

	handleMouseDown(e) {
		e.preventDefault();
		this.changeValue(this.props.max);
	}

	handleMouseUp(e) {
		e.preventDefault();
		this.changeValue(this.props.min);
	}

	clip (v, min, max){
		return v < min ? min : v > max ? max : v;
	}

	changeValue(val){
		this.setState((prevState, props) => {
			return { value: this.clip(val, props.min, props.max) }
		});
	}

	render() {
		let className = this.state.value > this.props.min ? "btn bactive" : "btn";
		return (
			<div className="pad">
				<div className="lbl">{this.props.label}</div>
				<div className={className} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} />
			</div>
		);
	}
}

Pad.defaultProps = {
	value: 0,
	min: 0,
	max: 255,
	label: "Pad"
};

Pad.propTypes = {
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	label: PropTypes.string
};

export default Pad;