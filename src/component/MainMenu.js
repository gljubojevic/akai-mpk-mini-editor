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
		if (cmd === undefined) {
			return
		}
		switch (cmd) {
			case "get":
				if (this.props.onPresetGet) {
					const no = parseInt(e.target.dataset.prgno, 10);
					this.props.onPresetGet(no);
				}
				break;
			case "send":
				if (this.props.onPresetSend) {
					const no = parseInt(e.target.dataset.prgno, 10);
					this.props.onPresetSend(no);
				}
				break;
			default:
				if (this.props.onCommand) {
					this.props.onCommand(cmd)
				}
				break;
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
							<li><a data-cmd="restore" href="#">Factory restore</a></li>
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
							<li><a data-cmd="get" data-prgno="0" href="#">Ram</a></li>
							<li><a data-cmd="get" data-prgno="1" href="#">Program 1</a></li>
							<li><a data-cmd="get" data-prgno="2" href="#">Program 2</a></li>
							<li><a data-cmd="get" data-prgno="3" href="#">Program 3</a></li>
							<li><a data-cmd="get" data-prgno="4" href="#">Program 4</a></li>
						</ul>
					</li>
					<li>
						<a href="#">Send</a>
						<ul>
							<li><a data-cmd="send" data-prgno="0" href="#">Ram</a></li>
							<li><a data-cmd="send" data-prgno="1" href="#">Program 1</a></li>
							<li><a data-cmd="send" data-prgno="2" href="#">Program 2</a></li>
							<li><a data-cmd="send" data-prgno="3" href="#">Program 3</a></li>
							<li><a data-cmd="send" data-prgno="4" href="#">Program 4</a></li>
						</ul>
					</li>
				</ul>
			</nav>
		);
	}
}

MainMenu.defaultProps = {
	onCommand: null,
	onPresetGet: null,
	onProgramSend: null
};

MainMenu.propTypes = {
	onCommand: PropTypes.func,
	onPresetGet: PropTypes.func,
	onPresetSend: PropTypes.func
};

export default MainMenu;