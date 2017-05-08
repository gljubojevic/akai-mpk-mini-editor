import PadPreset from './PadPreset';
import KnobPreset from './KnobPreset';

class Preset {
	constructor(name="Preset", padCh=1, padBank1=null, padBank2=null, knobs=null) {
		this._name = name;
		this._padCh = padCh;
		this._padBank1 = padBank1 || this.initPads(6);
		this._padBank2 = padBank2 || this.initPads(6);
		this._knobs = knobs || this.initKnobs(6);
	}

	initPads(no){
		var pads = [];
		for (var i = 0; i < no; i++) {
			pads.push(new PadPreset());
		}
		return pads;
	}

	initKnobs(no){
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

	get padCh() {
		return this._padCh;
	}
	set padCh(value) {
		this._padCh = value;
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
}

export default Preset;