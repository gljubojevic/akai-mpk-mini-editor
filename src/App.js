import React, { Component } from 'react';
import PadBank from './component/PadBank.js'
import KnobBank from './component/KnobBank.js'
import ArpeggioEdit from './component/ArpeggioEdit.js'
import ChannelEdit from './component/ChannelEdit.js'
import KeybedEdit from './component/KeybedEdit.js'
import ProgramManager from './component/ProgramManager.js'
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
				<div className="col1">
					<ProgramManager hasRamProgram={true} />
				</div>
				<div className="col2">
					<KnobBank edit={true} label="Knobs" knobs={this.state.activePreset.knobs}/>
					<KeybedEdit preset={this.state.activePreset}/>
					<ArpeggioEdit preset={this.state.activePreset.arpeggio} />
				</div>
				<div className="col3">
					<PadBank edit={true} label="Bank 1" className="padBankA" pads={this.state.activePreset.padBank1}/>
					<PadBank edit={true} label="Bank 2" className="padBankB" pads={this.state.activePreset.padBank2}/>
					<ChannelEdit preset={this.state.activePreset} />
				</div>
				<div className="cln" />
			</div>
		);
	}
}

export default App;
