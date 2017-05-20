import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberInput extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			value: props.value
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		e.preventDefault();
		const newValue = parseInt(e.target.value, 10);
		// TODO: Validation
		//if (isNaN(newValue)) {
		//	return;
		//}
		this.setState({value: newValue});
		// Lift state up
		if (this.props.onChange) {
			this.props.onChange(newValue);
		}
	}

	//  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
	render() {
		const lbl = this.props.label.length === 0 ? "&nbsp;" : this.props.label;
		return (
			<label className={this.props.className}><span>{lbl}</span><input type="number" value={this.state.value} min={this.props.min} max={this.props.max} onChange={this.handleChange} /><div className="cln" /></label>
		);
	}
}

NumberInput.defaultProps = {
	value: 0,
	min: 0,
	max: 255,
	step: 1,
	label: "",
	className: null
};

NumberInput.propTypes = {
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	label: PropTypes.string,
	className: PropTypes.string
};

export default NumberInput;