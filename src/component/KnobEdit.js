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
		this.hanndleCC = this.hanndleCC.bind(this);
		this.hanndleLo = this.hanndleLo.bind(this);
		this.hanndleHi = this.hanndleHi.bind(this);
	}

	changePreset(change){
		const newPreset = Object.assign(this.state.preset,change)
		this.setState({preset:newPreset});
	}

	hanndleCC(value){
		this.changePreset({cc: value});
	}

	hanndleLo(value){
		this.changePreset({lo: value});
	}

	hanndleHi(value){
		this.changePreset({hi: value});
	}

	render() {
		return (
			<div className="knobEdit">
				<div className="lbl">{this.props.label}</div>
				<div className="brd">
					<NumberInput label="CC" max={127} value={this.state.preset.cc} onChange={this.hanndleCC} />
					<NumberInput label="Low" max={127} value={this.state.preset.lo} onChange={this.hanndleLo} />
					<NumberInput label="Hi" max={127} value={this.state.preset.hi} onChange={this.hanndleHi} />
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
