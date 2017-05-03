import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KnobSettings from '../MPKMini/KnobSettings.js'
import NumberInput from './NumberInput.js'
import './KnobEdit.css'

class KnobEdit extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			settings: props.settings
		}
	}

	render() {
		return (
			<div className="knobEdit">
				<div className="lbl">{this.props.label}</div>
				<NumberInput label="CC" max={127} value={this.state.settings.cc} />
				<NumberInput label="Low" max={127} value={this.state.settings.lo} />
				<NumberInput label="Hi" max={127} value={this.state.settings.hi} />
			</div>
		);
	}
}

KnobEdit.defaultProps = {
	settings: new KnobSettings(),
	label: "Knob"
};

KnobEdit.propTypes = {
	settings: PropTypes.instanceOf(KnobSettings),
	label: PropTypes.string
};

export default KnobEdit;
