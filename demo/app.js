/// <reference path="./shift.ts" />
/// <reference path="./shiftplan.ts" />
var ulShifts = document.querySelector('.shifts');
var shiftplan = new Shiftplan();
var shift = new Shift(new Date('2017-11-23T15:00'), new Date('2017-11-23T15:30'), 'Lets talk about TypeScript');
shiftplan.shifts.push(shift);
shiftplan.renderToList(ulShifts);
