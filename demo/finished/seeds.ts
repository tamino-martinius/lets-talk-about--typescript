const shiftplan46 = new Shiftplan('CW 46');

const shiftplan47 = new Shiftplan('CW 47');
shiftplan47.addShift(new Shift(
  new Date('2017-11-20T15:00'),
  new Date('2017-11-20T16:00'),
  'Interview with Dany'
));
shiftplan47.addShift(new Shift(
  new Date('2017-11-23T15:00'),
  new Date('2017-11-23T15:30'),
  'Lets talk about ... TypeScript'
));

const shiftplan48 = new Shiftplan('CW 48');
shiftplan48.addShift(new Shift(
  new Date('2017-11-30T15:00'),
  new Date('2017-11-30T15:30'),
  'Lets talk about ... Decorators'
));

const shiftplans: Shiftplan[] = [
  shiftplan46,
  shiftplan47,
  shiftplan48,
];
