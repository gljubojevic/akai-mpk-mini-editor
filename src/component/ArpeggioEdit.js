import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArpeggioPreset from '../MPKMini/ArpeggioPreset.js'
import NumberInput from './NumberInput.js'
import SelectInput from './SelectInput.js'
import ToggleSelectInput from './ToggleSelectInput.js'
import ToggleButtonInput from './ToggleButtonInput.js'
import './ArpeggioEdit.css';

class ArpeggioEdit extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			preset: props.preset
		}
		this.hanndleTempo = this.hanndleTempo.bind(this);
		this.hanndleTempoTaps = this.hanndleTempoTaps.bind(this);
		this.hanndleOctave = this.hanndleOctave.bind(this);
		this.hanndleIsInternalSync = this.hanndleIsInternalSync.bind(this);
		this.hanndleIsLatch = this.hanndleIsLatch.bind(this);
		this.hanndleTimeDivision = this.hanndleTimeDivision.bind(this);
		this.hanndleMode = this.hanndleMode.bind(this);
		this.hanndleSwing = this.hanndleSwing.bind(this);
		this.hanndleIsEnambed = this.hanndleIsEnambed.bind(this);
	}

	changePreset(change){
		const newPreset = Object.assign(this.state.preset,change)
		this.setState({preset:newPreset});
	}

	hanndleTempo(value){
		this.changePreset({tempo: value});
	}

	hanndleTempoTaps(value){
		this.changePreset({tempoTaps: value});
	}

	hanndleOctave(value){
		this.changePreset({octave: value});
	}

	hanndleIsInternalSync(value){
		this.changePreset({isInternalSync: value});
	}

	hanndleIsLatch(value){
		this.changePreset({isLatch: value});
	}

	hanndleTimeDivision(value){
		this.changePreset({timeDivision: value});
	}

	hanndleMode(value){
		this.changePreset({mode: value});
	}

	hanndleSwing(value){
		this.changePreset({swing: value});
	}

	hanndleIsEnambed(value){
		this.changePreset({isEnabled: value});
	}

	render() {
		return (
			<fieldset className="ArpeggioEdit">
				<legend>{this.props.label}</legend>
				<NumberInput label="Tempo" min={30} max={240} value={this.state.preset.tempo} onChange={this.hanndleTempo} />
				<NumberInput label="Octave" min={0} max={3} value={this.state.preset.octave} onChange={this.hanndleOctave} />
				<ToggleButtonInput label="On / Off" classActive="active" value={this.state.preset.isEnabled} onChange={this.hanndleIsEnambed} />

				<SelectInput label="Time division" options={this.state.preset.timeDivisionOptions} value={this.state.preset.timeDivision} onChange={this.hanndleTimeDivision} />
				<SelectInput label="Mode" options={this.state.preset.modeOptions} value={this.state.preset.mode} onChange={this.hanndleMode} />
				<NumberInput label="Tempo taps" min={2} max={4} value={this.state.preset.tempoTaps} onChange={this.hanndleTempoTaps} />

				<SelectInput label="Swing" options={this.state.preset.swingOptions} value={this.state.preset.swing} onChange={this.hanndleSwing} />
				<ToggleSelectInput label="Latch" labelTrue="On" labelFalse="Off" value={this.state.preset.isLatch} onChange={this.hanndleIsLatch} />
				<ToggleSelectInput label="Clock" labelTrue="Internal" labelFalse="External" value={this.state.preset.isInternalSync} onChange={this.hanndleIsInternalSync} />
			</fieldset>
		);
	}
}

ArpeggioEdit.defaultProps = {
	preset: new ArpeggioPreset(),
	label: "Arpeggiator"
};

ArpeggioEdit.propTypes = {
	preset: PropTypes.instanceOf(ArpeggioPreset),
	label: PropTypes.string
};

export default ArpeggioEdit;
