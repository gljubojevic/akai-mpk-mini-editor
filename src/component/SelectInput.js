import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectInput extends Component {
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
		this.setState({value: newValue});
		// Lift state up
		if (this.props.onChange) {
			this.props.onChange(newValue);
		}
	}

	renderOption(opt, index){
		return <option key={index} value={index}>{opt}</option>
	}

	render() {
		const options = this.props.options.map(this.renderOption);
		return (
			<label><span>{this.props.label}</span>
				<select value={this.state.value} onChange={this.handleChange}>{options}</select>
				<div className="cln" />
			</label>
		);
	}
}

SelectInput.defaultProps = {
	value: null,
	options: [],
	label: "Note"
};

SelectInput.propTypes = {
	value: PropTypes.number,
	options: PropTypes.array,
	label: PropTypes.string
};

export default SelectInput;