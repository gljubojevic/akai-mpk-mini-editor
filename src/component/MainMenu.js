import React, { Component } from 'react';
//import './MainMenu.css';

class MainMenu extends Component {
	render() {
		return (
			<nav className="mainmenu">
				<ul>
					<li>
						<a href="#">File</a>
						<ul>
							<li><a href="#">Open</a></li>
							<li><a href="#">Save</a></li>
						</ul>
					</li>
					<li><a href="#">Edit</a></li>
					<li>
						<a href="#">Hardvare</a>
						<ul>
							<li><a href="#">Device setup</a></li>
							<li>
								<a href="#">Get</a>
								<ul>
									<li><a href="#">Program 1</a></li>
									<li><a href="#">Program 2</a></li>
									<li><a href="#">Program 3</a></li>
									<li><a href="#">Program 4</a></li>
									<li><a href="#">Ram</a></li>
								</ul>
							</li>
							<li>
								<a href="#">Sent</a>
								<ul>
									<li><a href="#">Program 1</a></li>
									<li><a href="#">Program 2</a></li>
									<li><a href="#">Program 3</a></li>
									<li><a href="#">Program 4</a></li>
									<li><a href="#">Ram</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">Tools</a>
						<ul>
							<li><a href="#">Auto populate</a></li>
							<li><a href="#">Device setup</a></li>
						</ul>
					</li>
				</ul>
				<div className="cln" />
			</nav>
		);
	}
}

export default MainMenu;