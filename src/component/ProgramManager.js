import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProgramManager.css'

class ProgramManager extends Component {
	constructor(props, context) {
		super(props, context);
		let idx = Array.from(Array(props.presets), (_,x) => x+1); // preset numbers are 1 to n
		if (this.props.hasRamPreset) {
			idx.push(0); // RAM program is 0 index
		}
		this.state = {
			presetIndex: idx
		}
		this.handleGet = this.handleGet.bind(this);
		this.handleSend = this.handleSend.bind(this);
	}

	handleGet(e){
		e.preventDefault();
		if (this.props.onPresetGet) {
			const no = parseInt(e.target.dataset.prgno, 10);
			this.props.onPresetGet(no);
		}
	}

	handleSend(e){
		e.preventDefault();
		if (this.props.onPresetSend) {
			const no = parseInt(e.target.dataset.prgno, 10);
			this.props.onPresetSend(no);
		}
	}

	renderPreset(no){
		if (no === 0) {
			return (
				<li key={no} className="ram">
					<button data-prgno={no} onClick={this.handleSend}>{this.props.labelSendToRam}</button>
				</li>
			);
		}
		const lbl = "Preset " + no;
		return(
			<li key={no}>
				<div><span>{lbl}</span></div>
				<button data-prgno={no} onClick={this.handleSend}>{this.props.labelSend}</button>
				<button data-prgno={no} onClick={this.handleGet}>{this.props.labelGet}</button>
			</li>
		);
	}

	render() {
		const pMap = this.state.presetIndex.map((no) => {
			return this.renderPreset(no);
		});
		return (
			<ul className="programManager">
				{pMap}
			</ul>
		);
	}
}

ProgramManager.defaultProps = {
	hasRamPreset: false,
	presets: 0,
	labelSend: "Send",
	labelGet: "Get",
	labelSendToRam: "Send to ram",
	onPresetGet: null,
	onPresetSend: null
};

ProgramManager.propTypes = {
	hasRamPreset: PropTypes.bool,
	presets: PropTypes.number,
	labelSend: PropTypes.string,
	labelGet: PropTypes.string,
	labelSendToRam: PropTypes.string,
	onPresetGet: PropTypes.func,
	onPresetSend: PropTypes.func
};

export default ProgramManager;