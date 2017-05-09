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
	const o = parseInt(octave.match().input);
	return o * 12 + noteNames.findIndex(x => x == n);
}
