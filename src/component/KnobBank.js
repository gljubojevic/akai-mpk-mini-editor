import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Knob from './Knob.js'
import './KnobBank.css';

class KnobBank extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			knobs: props.knobs,
		}
	}

	renderKnob(knob, index){
		const label = 'Knob ' + (index+1);
		return <Knob key={index.toString()} label={label} />
	}

	render() {
		const knobs = this.state.knobs.map(this.renderKnob);
		let className = "knobBank";
		if (this.props.className.length > 0) {
			className += " " + this.props.className;
		}
		return (
			<fieldset className={className}>
				<legend>{this.props.label}</legend>
				{knobs}
			</fieldset>
		);
	}
}

KnobBank.defaultProps = {
	knobs: [],
	label: "Bank",
	className: ""
};

KnobBank.propTypes = {
	knobs: PropTypes.array,
	label: PropTypes.string,
	className: PropTypes.string
};

export default KnobBank;