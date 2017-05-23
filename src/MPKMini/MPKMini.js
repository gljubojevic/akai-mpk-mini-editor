import Preset from './Preset';
import WebMIDI from './../midi/WebMIDI.js'

class MPKMini {
	constructor(noPresets = 4) {
		this._presets = this.initPresets(noPresets);
		this._activePreset = 0;
		this._hasRamPreset = false;
		this._webMIDI = new WebMIDI(
			this.midiError,
			null,
			null,
			this.midiMessage
		);
	}

	// Get Preset1 F0 47 7F 7C 63 00 01 01 F7
	// Get Preset2 F0 47 7F 7C 63 00 01 02 F7
	// Get Preset3 F0 47 7F 7C 63 00 01 03 F7
	// Get Preset4 F0 47 7F 7C 63 00 01 04 F7

	initPresets(noPresets){
		let presets = [];
		for (var i = 0; i < noPresets; i++) {
			presets.push(new Preset('Preset' + i));
		}
		return presets;
	}

	get hasRamPreset(){
		return this._hasRamPreset;
	}

	get preset(){
		return this._presets[this._activePreset];
	}
	set preset(value) {
		this._presets[this._activePreset] = value;
	}

	midiError(error) {
		// TODO: Handler
	}	

	midiMessage(data){

	}

}

export default MPKMini;