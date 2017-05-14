import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PadPreset from '../MPKMini/PadPreset.js'
import NumberInput from './NumberInput.js'
import NoteInput from './NoteInput.js'
import ToggleSelectInput from './ToggleSelectInput.js'
import './PadEdit.css'

class PadEdit extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			preset: props.preset
		}
		this.hanndleNote = this.hanndleNote.bind(this);
		this.hanndlePC = this.hanndlePC.bind(this);
		this.hanndleCC = this.hanndleCC.bind(this);
		this.hanndleIsToggle = this.hanndleIsToggle.bind(this);
	}

	changePreset(change){
		const newPreset = Object.assign(this.state.preset,change)
		this.setState({preset:newPreset});
	}

	hanndleNote(value){
		this.changePreset({note: value});
	}

	hanndlePC(value){
		this.changePreset({pc: value});
	}

	hanndleCC(value){
		this.changePreset({cc: value});
	}

	hanndleIsToggle(value){
		this.changePreset({isToggle: value});
	}

	render() {
		return (
			<div className="padEdit">
				<div className="lbl">{this.props.label}</div>
				<div className="brd">
					<NoteInput label="Note" max={127} value={this.state.preset.note} onChange={this.hanndleNote} />
					<NumberInput label="PC #" max={127} value={this.state.preset.pc} onChange={this.hanndlePC} />
					<NumberInput label="CC #" max={127} value={this.state.preset.cc} onChange={this.hanndleCC} />
					<ToggleSelectInput labelTrue="Toggle" labelFalse="Momentary" value={this.state.preset.isToggle} onChange={this.hanndleIsToggle} />
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
