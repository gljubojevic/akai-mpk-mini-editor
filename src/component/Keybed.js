import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Preset from '../MPKMini/Preset.js';
import * as midiutil from "../midi/utility"
import './Keybed.css';

class Keybed extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			preset: props.preset
		}
		this.hanndleMouseDown = this.hanndleMouseDown.bind(this);
		this.hanndleMouseUp = this.hanndleMouseUp.bind(this);
	}

	changePreset(change){
		const newPreset = Object.assign(this.state.preset,change)
		this.setState({preset:newPreset});
		// Lift state up
		if (this.props.onChange) {
			this.props.onChange(newPreset);
		}
	}

	note(key){
		return 48 + (this.props.preset.keyOctave * 12) + this.props.preset.keyTranspose + key;
	}

	hanndleMouseDown(e){
		e.preventDefault();
		const key = parseInt(e.target.dataset.key, 10);
		const midiNote = this.note(key);
		if (this.props.onNoteOn) {
			this.props.onNoteOn(midiNote);
		}
		//console.log("NoteOn", midiutil.noteName(midiNote));
	}

	hanndleMouseUp(e){
		e.preventDefault();
		const key = parseInt(e.target.dataset.key, 10);
		const midiNote = this.note(key);
		if (this.props.onNoteOff) {
			this.props.onNoteOff(midiNote);
		}
		//console.log("NoteOff", midiutil.noteName(midiNote));
	}

	render() {
		const firstNote = midiutil.noteName(this.note(0));
		return (
			<ul className="keybed">
				<li data-key={0} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp}><span>{firstNote}</span></li>
				<li data-key={1} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp}  className="black" />
				<li data-key={2} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} />
				<li data-key={3} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} className="black" />
				<li data-key={4} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} />
				<li data-key={5} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} />
				<li data-key={6} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} className="black" />
				<li data-key={7} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} />
				<li data-key={8} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} className="black" />
				<li data-key={9} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} />
				<li data-key={10} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} className="black" />
				<li data-key={11} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} />

				<li data-key={12} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} />
				<li data-key={13} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} className="black" />
				<li data-key={14} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} />
				<li data-key={15} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} className="black" />
				<li data-key={16} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} />
				<li data-key={17} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} />
				<li data-key={18} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} className="black" />
				<li data-key={19} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} />
				<li data-key={20} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} className="black" />
				<li data-key={21} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} />
				<li data-key={22} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} className="black" />
				<li data-key={23} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} />

				<li data-key={24} onMouseDown={this.hanndleMouseDown} onMouseUp={this.hanndleMouseUp} />
			</ul>
		);
	}
}

Keybed.defaultProps = {
	preset: new Preset(),
};

Keybed.propTypes = {
	preset: PropTypes.instanceOf(Preset),
};

export default Keybed;
