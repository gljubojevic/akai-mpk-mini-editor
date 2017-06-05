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
		switch (cmd) {
			case "get":
				const prgGet = e.target.dataset.prgno;
				if (this.props.onProgramGet) {
					this.props.onProgramGet(prgGet);
				}
				break;
			case "send":
				const prgSend = e.target.dataset.prgno;
				if (this.props.onProgramSend) {
					this.props.onProgramSend(prgSend);
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
							<li><a data-cmd="get" data-prgno="1" href="#">Program 1</a></li>
							<li><a data-cmd="get" data-prgno="2" href="#">Program 2</a></li>
							<li><a data-cmd="get" data-prgno="3" href="#">Program 3</a></li>
							<li><a data-cmd="get" data-prgno="4" href="#">Program 4</a></li>
							<li><a data-cmd="get" data-prgno="0" href="#">Ram</a></li>
						</ul>
					</li>
					<li>
						<a href="#">Send</a>
						<ul>
							<li><a data-cmd="send" data-prgno="1" href="#">Program 1</a></li>
							<li><a data-cmd="send" data-prgno="2" href="#">Program 2</a></li>
							<li><a data-cmd="send" data-prgno="3" href="#">Program 3</a></li>
							<li><a data-cmd="send" data-prgno="4" href="#">Program 4</a></li>
							<li><a data-cmd="send" data-prgno="0" href="#">Ram</a></li>
						</ul>
					</li>
				</ul>
			</nav>
		);
	}
}

MainMenu.defaultProps = {
	onCommand: null,
	onProgramGet: null,
	onProgramSend: null
};

MainMenu.propTypes = {
	onCommand: PropTypes.func,
	onProgramGet: PropTypes.func,
	onProgramSend: PropTypes.func
};

export default MainMenu;