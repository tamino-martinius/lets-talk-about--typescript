/// <reference path="./shift.ts" />

class Shiftplan {
  shifts: Shift[] = [];

  renderToList(ul: HTMLElement): void {
    ul.innerHTML = this.shifts.map(shift => shift.toHTML()).join('');
  }
}
