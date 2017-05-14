import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToggleSelectInput extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			value: props.value
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		e.preventDefault();
		const newValue = e.target.value === "true";
		this.setState({value: newValue });
		// Lift state up
		if (this.props.onChange) {
			this.props.onChange(newValue);
		}
	}

	render() {
		return (
			<select value={this.state.value} onChange={this.handleChange}>
				<option key="True" value={true}>{this.props.labelTrue}</option>
				<option key="False" value={false}>{this.props.labelFalse}</option>
			</select>
		);
	}
}

ToggleSelectInput.defaultProps = {
	value: true,
	labelTrue: "True",
	labelFalse: "False"
};

ToggleSelectInput.propTypes = {
	value: PropTypes.bool,
	labelTrue: PropTypes.string,
	labelFalse: PropTypes.string
};

export default ToggleSelectInput;