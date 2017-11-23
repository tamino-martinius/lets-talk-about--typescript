/// <reference path="./shift.ts" />

class Shiftplan {
  id: number;
  readonly shifts: Shift[] = [];

  constructor(
    public name: string
  ){}

  addShift(shift: Shift) {
    this.shifts.push(shift);
  }

  removeShift(shift: Shift) {
    const index: number = this.shifts.indexOf(shift);
    if (index >= 0) this.shifts.splice(index, 1);
  }

  toElement(): HTMLLIElement {
    const el: HTMLLIElement = document.createElement('li');
    el.innerHTML = `
      ${this.name}
    `;
    return el;
  }

  get model(): typeof Shiftplan {
    return <typeof Shiftplan>this.constructor;
  }
}
