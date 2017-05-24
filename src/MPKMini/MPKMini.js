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
			this.midiMessage,
			this.midiError
		);
	}

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

	programGet(prg){
		// Program number is 8-ght byte, value is 0x01 - 0x04, and Ram program is 0x00
		let sysExGet = new Uint8Array([0xF0, 0x47, 0x7F, 0x7C, 0x63, 0x00, 0x01, 0x00, 0xF7])
		if (prg !== "ram") {
			sysExGet[7] = parseInt(prg, 10) + 1; //TODO: Make true index on UI
		}
		this._webMIDI.sendMIDI(sysExGet);
	}

	programSend(prg){

	}

	midiError(error) {
		// TODO: Handler
	}	

	midiMessage(data){

	}

}

export default MPKMini;