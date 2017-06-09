import * as midiutil from "./utility"

it('Note value to note name', () => {
	expect(midiutil.noteName(0)).toEqual('C0');
	expect(midiutil.noteName(1)).toEqual('C#0');
	expect(midiutil.noteName(2)).toEqual('D0');
	expect(midiutil.noteName(3)).toEqual('D#0');
	expect(midiutil.noteName(4)).toEqual('E0');
	expect(midiutil.noteName(5)).toEqual('F0');
	expect(midiutil.noteName(6)).toEqual('F#0');
	expect(midiutil.noteName(7)).toEqual('G0');
	expect(midiutil.noteName(8)).toEqual('G#0');
	expect(midiutil.noteName(9)).toEqual('A0');
	expect(midiutil.noteName(10)).toEqual('A#0');
	expect(midiutil.noteName(11)).toEqual('B0');

	expect(midiutil.noteName(12)).toEqual('C1');
	expect(midiutil.noteName(13)).toEqual('C#1');
	expect(midiutil.noteName(14)).toEqual('D1');
	expect(midiutil.noteName(15)).toEqual('D#1');
	expect(midiutil.noteName(16)).toEqual('E1');
	expect(midiutil.noteName(17)).toEqual('F1');
	expect(midiutil.noteName(18)).toEqual('F#1');
	expect(midiutil.noteName(19)).toEqual('G1');
	expect(midiutil.noteName(20)).toEqual('G#1');
	expect(midiutil.noteName(21)).toEqual('A1');
	expect(midiutil.noteName(22)).toEqual('A#1');
	expect(midiutil.noteName(23)).toEqual('B1');

	expect(midiutil.noteName(127)).toEqual('G10');
});

it('Note name to value', () => {
	expect(midiutil.noteValue('C0')).toEqual(0);
	expect(midiutil.noteValue('C#0')).toEqual(1);
	expect(midiutil.noteValue('D0')).toEqual(2);
	expect(midiutil.noteValue('D#0')).toEqual(3);
	expect(midiutil.noteValue('E0')).toEqual(4);
	expect(midiutil.noteValue('F0')).toEqual(5);
	expect(midiutil.noteValue('F#0')).toEqual(6);
	expect(midiutil.noteValue('G0')).toEqual(7);
	expect(midiutil.noteValue('G#0')).toEqual(8);
	expect(midiutil.noteValue('A0')).toEqual(9);
	expect(midiutil.noteValue('A#0')).toEqual(10);
	expect(midiutil.noteValue('B0')).toEqual(11);

	expect(midiutil.noteValue('C1')).toEqual(12);
	expect(midiutil.noteValue('C#1')).toEqual(13);
	expect(midiutil.noteValue('D1')).toEqual(14);
	expect(midiutil.noteValue('D#1')).toEqual(15);
	expect(midiutil.noteValue('E1')).toEqual(16);
	expect(midiutil.noteValue('F1')).toEqual(17);
	expect(midiutil.noteValue('F#1')).toEqual(18);
	expect(midiutil.noteValue('G1')).toEqual(19);
	expect(midiutil.noteValue('G#1')).toEqual(20);
	expect(midiutil.noteValue('A1')).toEqual(21);
	expect(midiutil.noteValue('A#1')).toEqual(22);
	expect(midiutil.noteValue('B1')).toEqual(23);

	expect(midiutil.noteValue('G10')).toEqual(127);
});

it('sysExToString', () => {
	const sysEx = new Uint8Array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
	expect(midiutil.sysExToString(sysEx, false, ' ')).toEqual('0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 ');
	expect(midiutil.sysExToString(sysEx, true, ' ')).toEqual('00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F ');
});

it('stringToSysEx', () => {
	const strSysEx = '0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 ';
	const strSysExHex = '00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F ';
	const sysEx = new Uint8Array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
	expect(midiutil.stringToSysEx(strSysEx, false, ' ')).toEqual(sysEx);
	expect(midiutil.stringToSysEx(strSysExHex, true, ' ')).toEqual(sysEx);
});
