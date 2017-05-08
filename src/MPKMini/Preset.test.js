import Preset from './Preset';

it('New preset', () => {
	const p = new Preset();
	expect(p.name).toEqual('Preset');
	expect(p.padCh).toEqual(1);
	testKnobs(p.knobs, 6);
	testPadBank(p.padBank1, 6);
	testPadBank(p.padBank2, 6);
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
		expect(pp.isToggle).toEqual(false);
	}
}
