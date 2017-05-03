class KnobSettings {
	constructor(cc=0, lo=0, hi=0) {
		this._cc = cc;
		this._lo = lo;
		this._hi = hi;
	}

	get cc() {
		return this._cc;
	}
	set cc(value) {
		this._cc = value;
	}

	get lo() {
		return this._lo;
	}
	set lo(value) {
		this._lo = value;
	}

	get hi() {
		return this._hi;
	}
	set hi(value) {
		this._hi = value;
	}
}

export default KnobSettings;