import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberInput from './NumberInput.js'
import Preset from '../MPKMini/Preset.js'
import './ChannelEdit.css'

class ChannelEdit extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			preset: props.preset
		}
		this.hanndlePadCh = this.hanndlePadCh.bind(this);
		this.hanndleKeyKnobCh = this.hanndleKeyKnobCh.bind(this);
	}

	changePreset(change){
		const newPreset = Object.assign(this.state.preset,change)
		this.setState({preset:newPreset});
		// Lift state up
		if (this.props.onChange) {
			this.props.onChange(newPreset);
		}
	}

	hanndlePadCh(value){
		this.changePreset({padCh: value});
	}

	hanndleKeyKnobCh(value){
		this.changePreset({keyKnobCh: value});
	}

	render() {
		return (
			<div className="ChannelEdit">
				<NumberInput className="padCh" label="Pad MIDI Channel " min={0} max={15} value={this.state.preset.padCh} onChange={this.hanndlePadCh} />
				<NumberInput className="keyKnobCh" label="Keybed / Controls MIDI Channel " min={0} max={15} value={this.state.preset.keyKnobCh} onChange={this.hanndleKeyKnobCh} />
                <div className="cln" />
			</div>
		);
	}
}

ChannelEdit.defaultProps = {
	preset: new Preset(),
};

ChannelEdit.propTypes = {
	preset: PropTypes.instanceOf(Preset),
};

export default ChannelEdit;
