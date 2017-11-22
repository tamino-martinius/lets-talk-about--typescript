/// <reference path="./shift.ts" />
/// <reference path="./shiftplan.ts" />

const ulShifts: HTMLElement = document.querySelector('.shifts');
const shiftplan = new Shiftplan();
const shift = new Shift(
  new Date('2017-11-23T15:00'),
  new Date('2017-11-23T15:30'),
  'Lets talk about TypeScript'
);
shiftplan.shifts.push(shift);
shiftplan.renderToList(ulShifts);
