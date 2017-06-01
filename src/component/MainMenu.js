import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainMenu.css';

class MainMenu extends Component {
	constructor(props, context) {
		super(props, context);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.preventDefault();
		const cmd = e.target.dataset.cmd;
		console.log(cmd);
		if (this.props.onCommand) {
			this.props.onCommand(cmd)			
		}
	}

	render() {
		return (
			<nav className="mainmenu">
				<ul onClick={this.handleClick}>
					<li>
						<a href="#">File</a>
						<ul>
							<li><a data-cmd="open" href="#">Open</a></li>
							<li><a data-cmd="save" href="#">Save</a></li>
							<li><a data-cmd="setup" href="#">Device setup</a></li>
						</ul>
					</li>
					<li>
						<a href="#">Edit</a>
						<ul>
							<li><a data-cmd="auto-populate" href="#">Auto populate</a></li>
						</ul>
					</li>
					<li>
						<a href="#">Get</a>
						<ul>
							<li><a data-cmd="get-prg1" href="#">Program 1</a></li>
							<li><a data-cmd="get-prg2" href="#">Program 2</a></li>
							<li><a data-cmd="get-prg3" href="#">Program 3</a></li>
							<li><a data-cmd="get-prg4" href="#">Program 4</a></li>
							<li><a data-cmd="get-ram" href="#">Ram</a></li>
						</ul>
					</li>
					<li>
						<a href="#">Send</a>
						<ul>
							<li><a data-cmd="send-prg1" href="#">Program 1</a></li>
							<li><a data-cmd="send-prg2" href="#">Program 2</a></li>
							<li><a data-cmd="send-prg3" href="#">Program 3</a></li>
							<li><a data-cmd="send-prg4" href="#">Program 4</a></li>
							<li><a data-cmd="send-ram" href="#">Ram</a></li>
						</ul>
					</li>
				</ul>
			</nav>
		);
	}
}

MainMenu.defaultProps = {
	onCommand: null,
};

MainMenu.propTypes = {
	onCommand: PropTypes.func,
};

export default MainMenu;