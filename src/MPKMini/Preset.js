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


	// To select the MIDI channel over which all of the knobs send their messages, click the Keybed / Controls MIDI Channel 
	// field at the bottom of the window, and type the desired MIDI channel number (1 – 16). This affects the knobs, X-Y Contoller 
	// (joystick), and keyboard.
	get keyKnobCh() {
		return this._keyKnobCh;
	}
	set keyKnobCh(value) {
		this._keyKnobCh = value;
	}

	// To select the MIDI channel over which all of the pads send their messages, click the Pad MIDI Channel field at the bottom of the window, 
	// and type the desired MIDI channel number (1 – 16).
	get padCh() {
		return this._padCh;
	}
	set padCh(value) {
		this._padCh = value;
	}

	// To change the keyboard's octave, click the Octave field under the keyboard, and type the desired value (-4 to +4 octaves) 
	// (this is the same as using your MPK mini's Octave buttons). An octave of 0 means the keyboard is at its center/default octave.
	// For reference, the leftmost key will display its note value to indicate the octave shift.
	get keyOctave() {
		return this._keyOctave;
	}
	set keyOctave(value) {
		this._keyOctave = value;
	}

	// To transpose the keyboard, click the Transpose field under the keyboard, and type the desired value (-12 to +12 semitones). 
	// A transposition of 0 means the keyboard is not transposed. For reference, the leftmost key will display its note value to indicate the transposition.
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