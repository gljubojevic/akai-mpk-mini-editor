import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PadPreset from '../MPKMini/PadPreset.js'
import NumberInput from './NumberInput.js'
import NoteInput from './NoteInput.js'
import './PadEdit.css'

class PadEdit extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			preset: props.preset
		}
	}

	render() {
		return (
			<div className="padEdit">
				<div className="lbl">{this.props.label}</div>
				<div className="brd">
					<NoteInput label="Note" max={127} value={this.state.preset.note} />
					<NumberInput label="PC #" max={127} value={this.state.preset.pc} />
					<NumberInput label="CC #" max={127} value={this.state.preset.cc} />
				</div>
			</div>
		);
	}
}

PadEdit.defaultProps = {
	preset: new PadPreset(),
	label: "Pad"
};

PadEdit.propTypes = {
	preset: PropTypes.instanceOf(PadPreset),
	label: PropTypes.string
};

export default PadEdit;
