import PadPreset from './PadPreset';
import KnobPreset from './KnobPreset';
import ArpeggioPreset from './ArpeggioPreset';

class Preset {
	constructor(name="Preset", keyKnobCh=1, padCh=1, keyOctave=0, keyTranspose=0, padBank1=this._initPads(8), padBank2=this._initPads(8), knobs=this._initKnobs(8), arpeggio = this._initArpeggio()) {
		this._name = name;
		this._keyKnobCh = keyKnobCh;
		this._padCh = padCh;
		this._keyOctave = keyOctave;
		this._keyTranspose = keyTranspose;
		this._padBank1 = padBank1;
		this._padBank2 = padBank2;
		this._knobs = knobs;
		this._arpeggio = arpeggio;
	}

	_initArpeggio(){
		return new ArpeggioPreset();
	}

	_initPads(no){
		var pads = [];
		for (var i = 0; i < no; i++) {
			pads.push(new PadPreset());
		}
		return pads;
	}

	_initKnobs(no){
		var knobs = [];
		for (var i = 0; i < no; i++) {
			knobs.push(new KnobPreset());
		}
		return knobs;
	}

	get name() {
		return this._name;
	}
	set name(value) {
		this._name = value;
	}

	get keyKnobCh() {
		return this._keyKnobCh;
	}
	set keyKnobCh(value) {
		this._keyKnobCh = value;
	}

	get padCh() {
		return this._padCh;
	}
	set padCh(value) {
		this._padCh = value;
	}

	get keyOctave() {
		return this._keyOctave;
	}
	set keyOctave(value) {
		this._keyOctave = value;
	}

	get keyTranspose() {
		return this._keyTranspose;
	}
	set keyTranspose(value) {
		this._keyTranspose = value;
	}

	get padBank1(){
		return this._padBank1;
	}

	get padBank2(){
		return this._padBank2;
	}

	get knobs() {
		return this._knobs;
	}

	get arpeggio() {
		return this._arpeggio;
	}
}

export default Preset;