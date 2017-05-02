import React, { Component } from 'react';
import PropTypes from 'prop-types';

//  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
class NumberInput extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			value: props.value
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	render() {
		if (this.props.label.length > 0) {
			return (
				<label>{this.props.label}<input type="number" value={this.state.value} min={this.props.min} max={this.props.max} onChange={this.handleChange} /></label>
			);
		} else {
			return (
				<input type="number" value={this.state.value} min={this.props.min} max={this.props.max} onChange={this.handleChange} />
			);
		}
	}
}

NumberInput.defaultProps = {
	value: 0,
	min: 0,
	max: 255,
	step: 1,
	label: ""
};

NumberInput.propTypes = {
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	label: PropTypes.string
};

export default NumberInput;