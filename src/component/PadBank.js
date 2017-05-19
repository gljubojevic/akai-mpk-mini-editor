import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pad from './Pad.js';
import PadEdit from './PadEdit.js';
import './PadBank.css';

class PadBank extends Component {

	renderPad(pad, index){
		const label = 'Pad ' + (index+1);
		if (this.props.edit) {
			return (<PadEdit key={index.toString()} label={label} preset={pad} />);
		}
		return (<Pad key={index.toString()} label={label} preset={pad} />);
	}

	render() {
		const groupLength = this.props.pads.length >> 1;
		const padsTop = this.props.pads.map((pad, index) => {
			if (index >= groupLength) {
				return this.renderPad(pad, index)
			}
			return null;
		});
		const padsBottom = this.props.pads.map((pad, index) => {
			if (index < groupLength) {
				return this.renderPad(pad, index)
			}
			return null;
		});
		let className = "padBank";
		if (this.props.className) {
			className += " " + this.props.className;
		}
		return (
			<fieldset className={className}>
				<legend>{this.props.label}</legend>
				{padsTop}
				{padsBottom}
			</fieldset>
		);
	}
}

PadBank.defaultProps = {
	pads: [],
	label: "Bank",
	className: null,
	edit: false
};

PadBank.propTypes = {
	pads: PropTypes.array,
	label: PropTypes.string,
	className: PropTypes.string,
	edit: PropTypes.bool
};

export default PadBank;