class ArpeggioPreset {
	constructor(octave=0, isEnabled=false, mode=0, timeDivision=0, isInternalSync=true, isLatch=false, tempoTaps=3, tempo=128) {
		this._octave = octave;
		this._isEnabled = isEnabled;
		this._mode = mode;
		this._timeDivision = timeDivision;
		this._isInternalSync = isInternalSync;
		this._isLatch = isLatch;
		this._tempoTaps = tempoTaps;
		this._tempo = tempo;	
	}

	// ARP OCTAVE – Click this field to select the number of octaves (0-3) that an arpeggio will span. If this number is larger
	// than zero, after the first arpeggio in its original octave, subsequent arpeggios will sound in increasingly higher octaves.
	// After sounding at the highest octave (assigned here), the process will repeat from the original octave.
	// 0 - 3
	// or 1 - 4
	get octave() {
		return this._octave;
	}
	set octave(value) {
		this._octave = value;
	}

	// ARP ENABLE – Click this button to enable or disable the Arpeggiator. The button is red when the Arpeggiator is enabled.
	get isEnabled() {
		return this._isEnabled;
	}
	set isEnabled(value) {
		this._isEnabled = value;
	}

	// ARP MODE – Click this field to select the mode for the Arpeggiator.
	// Up – Notes arpeggiate from the lowest note up to the highest note.
	// Down – Notes arpeggiate from the highest note down to the lowest note.
	// Inclusive – Notes arpeggiate from the lowest to the highest note and back down. Lowest and highest notes are retriggered when the arpeggio changes direction.
	// Exclusive – Notes arpeggiate from the lowest to the highest note and back down. Lowest and highest notes are not retriggered when the arpeggio changes direction.
	// Random – Plays the held notes in random selection.
	// Order – Notes will be repeated in the same order in which their keys were pressed.
	get mode() {
		return this._mode;
	}
	set mode(value) {
		this._mode = value;
	}

	get modeOptions(){
		return ['Up','Down','Inclusive','Exclusive','Random','Order'];
	}

	// ARP TIME DIVISION – Click this field to select the time division, which determines how often the Arpeggiator will play a
	// note. The smaller the value, the faster the arpeggio.
	get timeDivision() {
		return this._timeDivision;
	}
	set timeDivision(value) {
		this._timeDivision = value;
	}

	get timeDivisionOptions(){
		return ['1/4','1/4T','1/8','1/8T','1/16','1/16T','1/32,','1/32T'];
	}

	// ARP CLOCK – Click this field to select whether the Arpeggiator will follow the MPK mini's internal clock or an external
	// clock. (Note: When synced to an external clock, the MPK mini's TAP TEMPO button will be disabled.)
	get isInternalSync() {
		return this._isInternalSync;
	}
	set isInternalSync(value) {
		this._isInternalSync = value;
	}

	// ARP LATCH – Click this button to enable or disable latching for the Arpeggiator. When this button is red, latching is enabled, which means notes will continue to arpeggiate even after the key is no longer being pressed. (Press the ARP ON / OFF button to stop the arpeggio.) When latching is disabled, notes will only arpeggiate when their keys are held down.
	get isLatch() {
		return this._isLatch;
	}
	set isLatch(value) {
		this._isLatch = value;
	}

	// TAP TEMPO TAPS – Click this field to select the minimum number of taps (of the TAP TEMPO button) required to
	// detect and enter a new tempo for the Arpeggiator.
	// 2,3,4
	get tempoTaps() {
		return this._tempoTaps;
	}
	set tempoTaps(value) {
		this._tempoTaps = value;
	}

	// TEMPO – Click on this field and drag up or down with the mouse (or use your computer keyboard's   or   keys) to change the current tempo for the Arpeggiator.
	// 30 - 240
	get tempo() {
		return this._tempo;
	}
	set tempo(value) {
		this._tempo = value;
	}
}

export default ArpeggioPreset;