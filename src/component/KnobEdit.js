import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KnobPreset from '../MPKMini/KnobPreset.js'
import NumberInput from './NumberInput.js'
import './KnobEdit.css'

class KnobEdit extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			preset: props.preset
		}
	}

	render() {
		return (
			<div className="knobEdit">
				<div className="lbl">{this.props.label}</div>
				<div className="brd">
					<NumberInput label="CC" max={127} value={this.state.preset.cc} />
					<NumberInput label="Low" max={127} value={this.state.preset.lo} />
					<NumberInput label="Hi" max={127} value={this.state.preset.hi} />
				</div>
			</div>
		);
	}
}

KnobEdit.defaultProps = {
	preset: new KnobPreset(),
	label: "Knob"
};

KnobEdit.propTypes = {
	preset: PropTypes.instanceOf(KnobPreset),
	label: PropTypes.string
};

export default KnobEdit;
