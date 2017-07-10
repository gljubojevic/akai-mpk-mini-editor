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
		this.handlePresetGet = this.handlePresetGet.bind(this);
		this.handlePresetSend = this.handlePresetSend.bind(this);
		this.handleCommand = this.handleCommand.bind(this);
	}

	handlePresetGet(no) {
		this.state.MPKMini.presetGet(no);
	}

	handlePresetSend(no) {
		this.state.MPKMini.presetSend(no);
	}

	handleCommand(cmd) {
		switch (cmd) {
			case "save":
				this.state.MPKMini.presetSave();
				break;

			case "open":
				this.state.MPKMini.presetOpen();
				break;

			case "restore":
				this.state.MPKMini.factoryRestore();
				break;
		
			default:
				console.log("unsupported command:" + cmd);
				break;
		}
	}

	render() {
		return (
			<div className="App">
				<header><h1>Editor</h1></header>
				<MainMenu
					onPresetGet={this.handlePresetGet}
					onPresetSend={this.handlePresetSend}
					onCommand={this.handleCommand} />
				<div className="col1">
					<ProgramManager
						presets={this.state.MPKMini.noPresets}
						hasRamPreset={this.state.MPKMini.hasRamPreset} 
						onPresetGet={this.handlePresetGet} 
						onPresetSend={this.handlePresetSend} />
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
