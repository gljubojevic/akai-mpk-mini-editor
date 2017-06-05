import React, { Component } from 'react';
import PadBank from './component/PadBank.js'
import KnobBank from './component/KnobBank.js'
import ArpeggioEdit from './component/ArpeggioEdit.js'
import ChannelEdit from './component/ChannelEdit.js'
import KeybedEdit from './component/KeybedEdit.js'
import ProgramManager from './component/ProgramManager.js'
import MainMenu from './component/MainMenu.js'
import MPKMini from './MPKMini/MPKMini.js'
import './App.css';

class App extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			MPKMini: new MPKMini()
		}
		this.handleProgramGet = this.handleProgramGet.bind(this);
		this.handleProgramSend = this.handleProgramSend.bind(this);
	}

	handleProgramGet(prg) {
		this.state.MPKMini.programGet(prg);
	}

	handleProgramSend(prg) {
		this.state.MPKMini.programSend(prg);
	}

	render() {
		return (
			<div className="App">
				<header><h1>Editor</h1></header>
				<MainMenu
					onProgramGet={this.handleProgramGet}
					onProgramSend={this.handleProgramSend} />
				<div className="col1">
					<ProgramManager 
						hasRamProgram={this.state.MPKMini.hasRamPreset} 
						onProgramGet={this.handleProgramGet} 
						onProgramSend={this.handleProgramSend} />
				</div>
				<div className="col2">
					<KnobBank edit={true} label="Knobs" knobs={this.state.MPKMini.preset.knobs}/>
					<KeybedEdit preset={this.state.MPKMini.preset}/>
					<ArpeggioEdit preset={this.state.MPKMini.preset.arpeggio} />
				</div>
				<div className="col3">
					<PadBank edit={true} label="Bank 1" className="padBankA" pads={this.state.MPKMini.preset.padBank1}/>
					<PadBank edit={true} label="Bank 2" className="padBankB" pads={this.state.MPKMini.preset.padBank2}/>
					<ChannelEdit preset={this.state.MPKMini.preset} />
				</div>
				<div className="cln" />
			</div>
		);
	}
}

export default App;
