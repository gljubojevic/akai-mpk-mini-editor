import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Knob.css';

class Knob extends Component {

	constructor(props, context) {
		super(props, context);
		let angleRange = props.ticksAngleEnd - props.ticksAngleStart;
		let valueRange = props.max - props.min;
		this.state = {
			value: props.value,
			angleRange: angleRange,
			valueRange: valueRange,
			tickAngles: this.tickAngles(angleRange, props.ticksAngleStart, props.ticks)
		}
		this.handleWheel = this.handleWheel.bind(this);
	}

	tickAngles(range, angleStart, ticks){
		let angles = [];
		let inc = range / (ticks-1);
		for (var i = 0; i < ticks; i++) {
			angles.push(angleStart + (i*inc));
		}
		return angles;		
	}
	
	clip (v, min, max){
		return v < min ? min : v > max ? max : v;
	}

	valueToAngle() {
		let step = this.state.angleRange / this.state.valueRange;
		return this.state.value * step + this.props.ticksAngleStart;
	}

	handleWheel(e) {
		e.preventDefault();
		this.changeValue(e.deltaY, this.props.eventScale);
	}

	changeValue(delta, scale){
		this.setState((prevState, props) => {
			let val = prevState.value + (delta / scale);
			return { value: this.clip(val, props.min, props.max) }
		});
	}

	renderTick(angle, current) {
		let className = angle <= current ? "tick tactive" : "tick";
		const style = {
			transform: 'rotate(' + angle.toFixed(1) + 'deg)'
		};
		return <div key={angle} className={className} style={style} />
	}

	render() {
		let valueAngle = this.valueToAngle();
		var ticks = this.state.tickAngles.map((angle) => {
			return this.renderTick(angle, valueAngle);
		});
		const handleStyle = {
			transform: 'rotate(' + valueAngle.toFixed(1) + 'deg)'
		}
		return (
			<div className="knob" onWheel={this.handleWheel}>
				<div className="ticks">{ticks}</div>
				<div className="lbl">{this.props.label}</div>
				<div className="min">{this.props.minLabel}</div>
				<div className="max">{this.props.maxLabel}</div>
				<div className="base">
					<div className="handle" style={handleStyle} />
				</div>
			</div>
		);
	}
}

Knob.defaultProps = {
	value: 0,
	min: 0,
	max: 255,
	label: "Knob",
	minLabel: "Min",
	maxLabel: "Max",
	ticks: 11,
	ticksAngleStart: -150,
	ticksAngleEnd: 150,
	eventScale: 10
}

Knob.propTypes = {
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	label: PropTypes.string,
	minLabel: PropTypes.string,
	maxLabel: PropTypes.string,
	ticks: PropTypes.number,
	ticksAngleStart: PropTypes.number,
	ticksAngleEnd: PropTypes.number,
	eventScale: PropTypes.number
}

export default Knob;
