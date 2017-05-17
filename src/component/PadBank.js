import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pad from './Pad.js'
import './PadBank.css';

class PadBank extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			pads: props.pads,
		}
	}

	renderPad(pad, index){
		const label = 'Pad ' + (index+1);
		return <Pad key={index.toString()} label={label} />
	}

	render() {
		const groupLength = this.state.pads.length >> 1;
		const padsTop = this.state.pads.map((pad, index) => {
			if (index >= groupLength) {
				return this.renderPad(pad, index)
			}
			return null;
		});
		const padsBottom = this.state.pads.map((pad, index) => {
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
	className: null
};

PadBank.propTypes = {
	pads: PropTypes.array,
	label: PropTypes.string,
	className: PropTypes.string
};

export default PadBank;