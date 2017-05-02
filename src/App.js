import React, { Component } from 'react';
import Knob from './component/Knob.js'
import Pad from './component/Pad.js'
import NumberInput from './component/NumberInput.js'
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<h1>AKAI MPK mini editor</h1>
				</header>
				<Knob value={0} />
				<Pad value={0} />
				<NumberInput />
				<NumberInput label="Test" />
			</div>
		);
	}
}

export default App;
