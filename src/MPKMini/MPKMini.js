import Preset from './Preset';
import WebMIDI from './../midi/WebMIDI.js'

const Preset1Chromatic = '240 71 127 124 97 0 102 1 9 0 4 12 0 0 4 1 0 3 0 120 0 36 0 20 0 37 1 21 0 38 2 22 0 39 3 23 0 40 4 24 0 41 5 25 0 42 6 26 0 43 7 27 0 44 8 28 0 45 9 29 0 46 10 30 0 47 11 31 0 48 12 35 0 49 13 36 0 50 14 37 0 51 15 38 0 17 0 127 18 0 127 19 0 127 20 0 127 13 0 127 14 0 127 15 0 127 16 0 127 247 ';
const Preset2WhiteKeys = '240 71 127 124 97 0 102 2 9 0 4 12 0 0 5 0 0 3 0 120 0 48 0 1 0 50 1 2 0 52 2 3 0 53 3 4 0 55 4 5 0 57 5 6 0 59 6 8 0 60 7 9 0 62 8 10 0 64 9 11 0 65 10 12 0 67 11 13 0 69 12 14 0 71 13 15 0 72 14 16 0 74 15 17 0 17 0 127 18 0 127 19 0 127 20 0 127 13 0 127 14 0 127 15 0 127 16 0 127 247 ';
const Preset3MPC = '240 71 127 124 97 0 102 3 9 0 4 12 0 1 5 0 0 3 0 120 0 37 0 1 0 36 1 2 0 42 2 3 0 82 3 4 0 40 4 5 0 38 5 6 0 46 6 8 0 44 7 9 0 48 8 10 0 47 9 11 0 45 10 12 0 43 11 13 0 49 12 14 0 55 13 15 0 51 14 16 0 53 15 17 0 17 0 127 18 0 127 19 0 127 20 0 127 13 0 127 14 0 127 15 0 127 16 0 127 247 ';
const Preset4ChromaticFrom60 = '240 71 127 124 97 0 102 4 9 0 4 12 0 4 5 0 0 3 0 120 0 60 0 1 0 61 1 2 0 62 2 3 0 63 3 4 0 64 4 5 0 65 5 6 0 66 6 8 0 67 7 9 0 68 8 10 0 69 9 11 0 70 10 12 0 71 11 13 0 72 12 14 0 73 13 15 0 74 14 16 0 75 15 17 0 17 0 127 18 0 127 19 0 127 20 0 127 13 0 127 14 0 127 15 0 127 16 0 127 247 ';

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

		// For test
		this.factoryRestore();
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
		if (prg !== "0") {
			sysExGet[7] = parseInt(prg, 10); 
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

	sysExToString(sysEx, isHex) {
		let str = '';
		for (var i = 0; i < sysEx.length; i++) {
			var byte;
			if (isHex) {
				byte = ('0' + sysEx[i].toString(16)).substr(-2);
			} else {
				byte = sysEx[i].toString(10);
			}
			str += byte.toUpperCase() + ' ';
		}
		return str;
	}

	parsePresetFile(data, name) {
		const bytes = data.trim().split(' ');
		let sysEx = new Uint8Array(bytes.length);
		for (var i = 0; i < bytes.length; i++) {
			sysEx[i] = parseInt(bytes[i], 10);
		}
		//console.log(name, this.sysExToString(sysEx, true));
		return sysEx;
	}

	factoryRestore(){
		this.parsePresetFile(Preset1Chromatic, 'Preset1Chromatic');
		this.parsePresetFile(Preset2WhiteKeys, 'Preset2WhiteKeys');
		this.parsePresetFile(Preset3MPC, 'Preset3MPC');
		let sysEx = this.parsePresetFile(Preset4ChromaticFrom60, 'Preset4ChromaticFrom60');
		this.presetFromSysEx(sysEx, 'Preset4ChromaticFrom60')
	}

	presetFromSysEx(sysEx, name){
		const preset = new Preset();
		preset.loadFromSysEx(sysEx, name);
		// Set Preset to editor
		this._activePreset = sysEx[7] - 1;
		this.preset = preset;
	}
}

export default MPKMini;