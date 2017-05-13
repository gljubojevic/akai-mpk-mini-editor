import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as midiutil from "../midi/utility"

class NoteInput extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			notes: this.createNotes(),
			value: props.value
		}
		this.handleChange = this.handleChange.bind(this);
	}

	createNotes(){
		let notes = [];
		for (var i = this.props.min; i <= this.props.max; i++) {
			notes.push(midiutil.noteName(i));
		}
		return notes;
	}

	handleChange(e) {
		e.preventDefault();
		// TODO: Validation
		//if ("" === e.target.value) {
		//	return;
		//}
		this.setState({value: e.target.value});
	}

	renderNoteOption(note, index){
		return <option key={index} value={index}>{note}</option>
	}

	render() {
		const allNotes = this.state.notes.map(this.renderNoteOption);
		return (
			<label>{this.props.label}
				<select value={this.state.value} onChange={this.handleChange}>{allNotes}</select>
				<input type="number" value={this.state.value} min={this.props.min} max={this.props.max} onChange={this.handleChange} />
				<div className="cln" />
			</label>
		);
	}
}

NoteInput.defaultProps = {
	value: 0,
	min: 0,
	max: 127,
	step: 1,
	label: "Note"
};

NoteInput.propTypes = {
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	label: PropTypes.string
};

export default NoteInput;