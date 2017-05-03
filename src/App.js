import React, { Component } from 'react';
import Knob from './component/Knob.js'
import Pad from './component/Pad.js'
import KnobEdit from './component/KnobEdit.js'
import PadEdit from './component/PadEdit.js'
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<h1>AKAI MPK mini editor</h1>
				</header>
				<Knob value={0} />
				<KnobEdit label="Knob1" />
				<Pad value={0} />
				<PadEdit label="Pad1" />
			</div>
		);
	}
}

export default App;
