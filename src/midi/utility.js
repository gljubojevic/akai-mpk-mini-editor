const noteNames = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

export function noteName(value) {
	let note = Math.round(value) % 12;
	let octave = Math.floor(value / 12);
	return noteNames[note] + octave;
}

export function noteValue(noteName) {
	const noteParse = /([CDEFGAB]#?)(\d*)/g;
	const [, note, octave] = noteParse.exec(noteName);
	const n = note.match().input;
	const o = parseInt(octave.match().input,10);
	return o * 12 + noteNames.findIndex(x => x === n);
}

export function sysExToString(sysEx, isHex, separator) {
	let str = '';
	for (var i = 0; i < sysEx.length; i++) {
		var byte;
		if (isHex) {
			byte = ('0' + sysEx[i].toString(16)).substr(-2);
		} else {
			byte = sysEx[i].toString(10);
		}
		str += byte.toUpperCase() + separator;
	}
	return str;
}

export function stringToSysEx(data, isHex, separator) {
	const bytes = data.trim().split(separator);
	let sysEx = new Uint8Array(bytes.length);
	for (var i = 0; i < bytes.length; i++) {
		sysEx[i] = parseInt(bytes[i], isHex ? 16 : 10);
	}
	return sysEx;
}