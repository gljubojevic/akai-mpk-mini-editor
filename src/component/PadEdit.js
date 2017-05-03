import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PadSettings from '../MPKMini/PadSettings.js'
import NumberInput from './NumberInput.js'
import './PadEdit.css'

class PadEdit extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			settings: props.settings
		}
	}

	render() {
		return (
			<div className="padEdit">
				<div className="lbl">{this.props.label}</div>
				<NumberInput label="Note #" max={127} value={this.state.settings.note} />
				<NumberInput label="PC #" max={127} value={this.state.settings.pc} />
				<NumberInput label="CC #" max={127} value={this.state.settings.cc} />
			</div>
		);
	}
}

PadEdit.defaultProps = {
	settings: new PadSettings(),
	label: "Pad"
};

PadEdit.propTypes = {
	settings: PropTypes.instanceOf(PadSettings),
	label: PropTypes.string
};

export default PadEdit;
