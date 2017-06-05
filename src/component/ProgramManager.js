import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProgramManager.css'

class ProgramManager extends Component {
	constructor(props, context) {
		super(props, context);
		let idx = Array.from(Array(props.programs), (_,x) => x+1); // program numbers are 1 to n
		if (this.props.hasRamProgram) {
			idx.push(0); // RAM program is 0 index
		}
		this.state = {
			programIndex: idx
		}
		this.handleGet = this.handleGet.bind(this);
		this.handleSend = this.handleSend.bind(this);
	}

	handleGet(e){
		e.preventDefault();
		const prg = e.target.dataset.prgno;
		if (this.props.onProgramGet) {
			this.props.onProgramGet(prg);
		}
	}

	handleSend(e){
		e.preventDefault();
		const prg = e.target.dataset.prgno;
		if (this.props.onProgramSend) {
			this.props.onProgramSend(prg);
		}
	}

	renderProgram(no){
		if (no === 0) {
			return (
				<li key={no} className="ram">
					<button data-prgno={no} onClick={this.handleSend}>{this.props.labelSendToRam}</button>
				</li>
			);
		}
		const lbl = "Program " + no;
		return(
			<li key={no}>
				<div><span>{lbl}</span></div>
				<button data-prgno={no} onClick={this.handleSend}>{this.props.labelSend}</button>
				<button data-prgno={no} onClick={this.handleGet}>{this.props.labelGet}</button>
			</li>
		);
	}

	render() {
		const prgMap = this.state.programIndex.map((no) => {
			return this.renderProgram(no);
		});
		return (
			<ul className="programManager">
				{prgMap}
			</ul>
		);
	}
}

ProgramManager.defaultProps = {
	hasRamProgram: false,
	programs: 4,
	labelSend: "Send",
	labelGet: "Get",
	labelSendToRam: "Send to ram",
	onProgramGet: null,
	onProgramSend: null
};

ProgramManager.propTypes = {
	hasRamProgram: PropTypes.bool,
	programs: PropTypes.number,
	labelSend: PropTypes.string,
	labelGet: PropTypes.string,
	labelSendToRam: PropTypes.string,
	onProgramGet: PropTypes.func,
	onProgramSend: PropTypes.func
};

export default ProgramManager;