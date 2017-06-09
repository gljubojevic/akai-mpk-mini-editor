import Preset from './Preset';
import * as midiutil from "./../midi/utility"

it('New preset', () => {
	const p = new Preset();
	expect(p.name).toEqual('Preset');
	expect(p.keyKnobCh).toEqual(1);
	expect(p.padCh).toEqual(1);
	expect(p.keyOctave).toEqual(0);
	expect(p.keyTranspose).toEqual(0);
	testKnobs(p.knobs, 8);
	testPadBank(p.padBank1, 8);
	testPadBank(p.padBank2, 8);
});

function testKnobs(knobs, expLen) {
	expect(knobs).toHaveLength(expLen);
	for (var i = 0; i < knobs.length; i++) {
		var kp = knobs[i];
		expect(kp.cc).toEqual(0);
		expect(kp.lo).toEqual(0);
		expect(kp.hi).toEqual(0);
	}
}

function testPadBank(padBank, expLen) {
	expect(padBank).toHaveLength(expLen);
	for (var i = 0; i < padBank.length; i++) {
		var pp = padBank[i];
		expect(pp.note).toEqual(0);
		expect(pp.pc).toEqual(0);
		expect(pp.cc).toEqual(0);
		expect(pp.isToggle).toEqual(true);
	}
}

const testPreset = '240 71 127 124 97 0 102 4 9 0 4 12 0 4 5 0 0 3 0 120 0 60 0 1 0 61 1 2 0 62 2 3 0 63 3 4 0 64 4 5 0 65 5 6 0 66 6 8 0 67 7 9 0 68 8 10 0 69 9 11 0 70 10 12 0 71 11 13 0 72 12 14 0 73 13 15 0 74 14 16 0 75 15 17 0 17 0 127 18 0 127 19 0 127 20 0 127 13 0 127 14 0 127 15 0 127 16 0 127 247 ';

it('Preset from to sysEx', () => {
	const sysEx = midiutil.stringToSysEx(testPreset, false, ' ');
	const p = new Preset();
	p.loadFromSysEx(sysEx, 'test');

	// Create new sysEx
	let sysExSend = new Uint8Array(110);
	sysExSend.set([0xF0, 0x47, 0x7F, 0x7C, 0x61, 0x00, 0x66, 0x00],0);
	// Same preset number, not handled by preset
	sysExSend[7] = sysEx[7];
	// sysEx end
	sysExSend[109] = 0xF7;

	// Save from preset	
	p.saveToSysEx(sysExSend);

	// Equal bytes
	expect(sysExSend).toEqual(sysEx);

	// String version
	const strPreset = midiutil.sysExToString(sysExSend, false, ' ');

	// Equal string
	expect(strPreset).toEqual(testPreset);
});
