import React, { Component } from 'react';
import Knob from './Knob.js'
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<h1>AKAI MPK mini editor</h1>
				</header>
				<Knob value={0} />
			</div>
		);
	}
}

export default App;
