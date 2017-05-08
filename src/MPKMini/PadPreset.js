class PadPreset {
	constructor(note=0, pc=0, cc=0, isToggle=false) {
		this._note = note;
		this._pc = pc;
		this._cc = cc;
		this._isToggle = isToggle;
	}

	get note() {
		return this._note;
	}
	set note(value) {
		this._note = value;
	}

	get pc() {
		return this._pc;
	}
	set pc(value) {
		this._pc = value;
	}

	get cc() {
		return this._cc;
	}
	set cc(value) {
		this._cc = value;
	}

	get isToggle() {
		return this._isToggle;
	}
	set isToggle(value) {
		this._isToggle = value;
	}
}

export default PadPreset;