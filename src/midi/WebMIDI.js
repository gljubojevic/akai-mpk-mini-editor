class WebMIDI {
	constructor(notSupported = null, onInputSelected = null, onOutputSelected = null, onMessage = null, onError = null, preferedDevices=["MPK mini"]) {
		// Callbacks, consider promise?
		this._notSupported = notSupported;
		this._onMessage = onMessage;
		this._onInputSelected = onInputSelected;
		this._onOutputSelected = onOutputSelected; 
		this._onError = onError;
		// Init MIDI
		this.initMIDI();
		// Members
		this._preferedDevices = preferedDevices;
		this._midiAccess = null;
		this._midiOptions = null;
		this._midiInput = null;
		this._midiOutput = null;
	}

	get preferedDevices(){
		return this._preferedDevices;
	}
	set preferedDevices(value){
		this._preferedDevices = value;
	}

	get midiAccess(){
		return this._midiAccess;
	}
	set midiAccess(value){
		this._midiAccess = value;
	}

	get midiInput(){
		return this._midiInput;
	}
	set midiInput(value){
		// Reselect same port
		if (this._midiInput === value) {
			return;
		}
		// Reset previous port
		if (this._midiInput && "disconnected" === this._midiInput.state) {
			this._midiInput.onmidimessage = null;
		}
		// Attach message handler
		this._midiInput = value;
		if (!value) {
			return;
		}
		// New port is set
		this._midiInput.onmidimessage = this.onMIDIMessage.bind(this);
		console.log("MIDI input selected", this._midiInput.name, this._midiInput.manufacturer);
		if (this._onInputSelected) {
			this._onInputSelected(this._midiInput);
		}
	}

	get midiOutput(){
		return this._midiOutput;
	}
	set midiOutput(value){
		// Reselect same port
		if (this._midiOutput === value) {
			return;
		}
		this._midiOutput = value;
		console.log("MIDI output selected", this._midiOutput.name, this._midiOutput.manufacturer);
		if (this._onOutputSelected) {
			this._onOutputSelected(this._midiOutput);
		}
	}

	// All avaliable MIDI Inputs on current access
	get allInputs(){
		if (!this.midiAccess) {
			return null;
		}
		return this.midiAccess.inputs.values();
	}

	// All avaliable MIDI Outputs on current access
	get allOutputs(){
		if (!this.midiAccess) {
			return null;
		}
		return this.midiAccess.outputs.values();
	}

	// Init MIDI
	initMIDI(){
		if (!navigator.requestMIDIAccess) {
			this.notSupported(Error("No support for navigator.requestMIDIAccess"));
			return;
		}
		// We need Sysex access
		navigator.requestMIDIAccess({sysex:true}).then(
			this.onMIDIStarted.bind(this),
			this.onMIDISystemError.bind(this)
		);
	}

	// WebMMIDI access acquired
	onMIDIStarted(access){
		if (!access.sysexEnabled) {
			this.notSupported(Error("Sysex not enabled"));
			return;	
		}
		// Continue init
		this.midiAccess = access;
		this.midiAccess.onstatechange = this.onStateChange.bind(this);

		// Select Input/Output
		this.inputSelect();
		this.outputSelect();
	}

	// No web midi access
	onMIDISystemError(error){
		this.notSupported(error)
	}

	// MIDI not supported
	notSupported(error){
		console.error(error);
		if (this._notSupported) {
			this._notSupported(error);
		}
	}

	onStateChange(e) {
		console.log(e);
		// Select Input/Output
		this.inputSelect();
		this.outputSelect();
	}

	// MIDI Message received
	onMIDIMessage (ev) {
		console.log(ev.data);
		// Transmit MIDI message to server
		if (this._onMessage) {
			this._onMessage(ev.data);
		}
	}

	isPrefered(name) {
		const checkName = name.toString().toLowerCase();
		for (var i = 0; i < this.preferedDevices.length; i++) {
			const device = this.preferedDevices[i].toLowerCase();
			if (checkName.indexOf(device) !== -1) {
				return true;
			}
		}
		return false;
	}

	findPreferedPort(ports) {
		for ( var port = ports.next(); port && !port.done; port = ports.next()) {
			port = port.value;
			if (!this.isPrefered(port.name)) {
				continue;
			}
			return port;
  		}
		return null;
	}

	// preselect midi input
	inputSelect(){
		const inputs = this.allInputs;
		const input = this.findPreferedPort(inputs);
		if (!input) {
			console.log("MIDI no prefered inputs");
			return;
		}
		this.midiInput = input;
	}

	// preselect midi input
	outputSelect(){
		const outputs = this.allOutputs;
		const output = this.findPreferedPort(outputs);
		if (!output) {
			console.log("MIDI no prefered outputs");
			return;
		}
		this.midiOutput = output;
	}

	errorNotify(err){
		console.error(err);
		if (this._onError) {
			this._onError(err);
		}
	}

	// Send data to out port
	sendMIDI(data) {
		try {
			if (!this._midiOutput) {
				throw new Error("No MIDI output selected");
			}
			this._midiOutput.send(data);
		} catch (error) {
			this.errorNotify(error);
		}
	}
}

export default WebMIDI;
