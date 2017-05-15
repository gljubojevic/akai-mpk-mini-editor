import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToggleButtonInput extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			value: props.value
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		const newValue = !this.state.value;
		this.setState({value: newValue});
		// Lift state up
		if (this.props.onChange) {
			this.props.onChange(newValue);
		}
	}

	render() {
		const className = this.state.value ? this.props.classActive : this.props.className;
		return (
			<label><button className={className} onClick={this.handleClick}>{this.props.label}</button><div className="cln"/></label>
		);
	}
}

ToggleButtonInput.defaultProps = {
	value: false,
	label: "Button",
	className: null,
	classActive: null
};

ToggleButtonInput.propTypes = {
	value: PropTypes.bool,
	label: PropTypes.string,
	className: PropTypes.string,
	classActive: PropTypes.string
};

export default ToggleButtonInput;