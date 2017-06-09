import PadPreset from './PadPreset';

it('New pad preset', () => {
	const pp = new PadPreset();
	expect(pp.note).toEqual(0);
	expect(pp.pc).toEqual(0);
	expect(pp.cc).toEqual(0);
	expect(pp.isToggle).toEqual(true);
});

it('New pad preset values', () => {
	const pp = new PadPreset(1, 2, 3, true);
	expect(pp.note).toEqual(1);
	expect(pp.pc).toEqual(2);
	expect(pp.cc).toEqual(3);
	expect(pp.isToggle).toEqual(true);
});

it('New pad preset change values', () => {
	const pp = new PadPreset(1, 2, 3, true);
	expect(pp.note).toEqual(1);
	expect(pp.pc).toEqual(2);
	expect(pp.cc).toEqual(3);
	expect(pp.isToggle).toEqual(true);
    pp.note = 4;
    pp.pc = 5;
    pp.cc = 6;
    pp.isToggle = false;
	expect(pp.note).toEqual(4);
	expect(pp.pc).toEqual(5);
	expect(pp.cc).toEqual(6);
	expect(pp.isToggle).toEqual(false);
});
