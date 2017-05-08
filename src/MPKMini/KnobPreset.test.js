import KnobPreset from './KnobPreset';

it('New knob preset', () => {
	const kp = new KnobPreset();
	expect(kp.cc).toEqual(0);
	expect(kp.lo).toEqual(0);
	expect(kp.hi).toEqual(0);
});

it('New knob preset values', () => {
	const kp = new KnobPreset(1, 2, 3);
	expect(kp.cc).toEqual(1);
	expect(kp.lo).toEqual(2);
	expect(kp.hi).toEqual(3);
});

it('New knob preset change values', () => {
	const kp = new KnobPreset(1, 2, 3);
	expect(kp.cc).toEqual(1);
	expect(kp.lo).toEqual(2);
	expect(kp.hi).toEqual(3);
	kp.cc = 4;
	kp.lo = 5;
	kp.hi = 6;
	expect(kp.cc).toEqual(4);
	expect(kp.lo).toEqual(5);
	expect(kp.hi).toEqual(6);
});
