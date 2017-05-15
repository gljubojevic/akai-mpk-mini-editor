import React, { Component } from 'react';
import Knob from './component/Knob.js'
import Pad from './component/Pad.js'
import KnobEdit from './component/KnobEdit.js'
import PadEdit from './component/PadEdit.js'
import PadBank from './component/PadBank.js'
import KnobBank from './component/KnobBank.js'
import ArpeggioEdit from './component/ArpeggioEdit.js'
import Preset from './MPKMini/Preset.js'
import './App.css';

class App extends Component {
	constructor(props, context) {
		super(props, context);
		const defPresets = this.initPresets();
		this.state = {
			presets: defPresets,
			activePreset: defPresets[0]
		}
	}

	initPresets(){
		let presets = [];
		for (var i = 0; i < 4; i++) {
			presets.push(new Preset('Preset' + i));
		}
		return presets;
	}

	render() {
		return (
			<div className="App">
				<header><h1>Editor</h1></header>
				<ArpeggioEdit preset={this.state.activePreset.arpeggio} />
				<Pad value={0} />
				<PadEdit label="Pad1" />
				<Knob value={0} />
				<KnobEdit label="Knob1" />
				<KnobBank label="Knobs" knobs={this.state.activePreset.knobs}/>
				<PadBank label="Bank 1" className="padBankA" pads={this.state.activePreset.padBank1}/>
				<PadBank label="Bank 2" className="padBankB" pads={this.state.activePreset.padBank2}/>
			</div>
		);
	}
}

export default App;
