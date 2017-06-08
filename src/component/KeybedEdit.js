import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberInput from './NumberInput.js'
import Keybed from './Keybed.js'
import Preset from '../MPKMini/Preset';
import './KeybedEdit.css';

class KeybedEdit extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			preset: props.preset
		}
		this.hanndleKeyTranspose = this.hanndleKeyTranspose.bind(this);
		this.hanndleKeyOctave = this.hanndleKeyOctave.bind(this);
	}

	changePreset(change){
		const newPreset = Object.assign(this.state.preset,change)
		this.setState({preset:newPreset});
		// Lift state up
		if (this.props.onChange) {
			this.props.onChange(newPreset);
		}
	}

	hanndleKeyTranspose(value){
		this.changePreset({keyTranspose: value});
	}

	hanndleKeyOctave(value){
		this.changePreset({keyOctave: value});
	}

	render() {
		return (
			<div className="KeybedEdit">
				<Keybed preset={this.state.preset} />
				<NumberInput className="transpose" label="Transpose " min={-12} max={12} value={this.state.preset.keyTranspose} onChange={this.hanndleKeyTranspose} />
				<NumberInput className="octave" label="Octave " min={-4} max={4} value={this.state.preset.keyOctave} onChange={this.hanndleKeyOctave} />
				<div className="cln" />
			</div>
		);
	}
}

KeybedEdit.defaultProps = {
	preset: new Preset(),
};

KeybedEdit.propTypes = {
	preset: PropTypes.instanceOf(Preset),
};

export default KeybedEdit;
