import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Knob from './Knob.js';
import KnobEdit from './KnobEdit.js';
import './KnobBank.css';

class KnobBank extends Component {

	renderKnob(knob, index){
		const label = 'Knob ' + (index+1);
		if (this.props.edit) {
			return (<KnobEdit key={index.toString()} label={label} preset={knob} />);
		}
		return (<Knob key={index.toString()} label={label} preset={knob} />);
	}

	render() {
		const knobs = this.props.knobs.map((knob, index) => {
			return this.renderKnob(knob, index);
		});
		let className = "knobBank";
		if (this.props.className) {
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
	className: null,
	edit: false
};

KnobBank.propTypes = {
	knobs: PropTypes.array,
	label: PropTypes.string,
	className: PropTypes.string,
	edit: PropTypes.bool
};

export default KnobBank;