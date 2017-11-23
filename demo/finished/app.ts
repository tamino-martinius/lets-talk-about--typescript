/// <reference path="./shift.ts" />
/// <reference path="./shiftplan.ts" />
/// <reference path="./seeds.ts" />

const shiftsElement: HTMLElement = document.querySelector('.shifts');
const shiftplansElement: HTMLElement = document.querySelector('.shiftplans');

function renderShiftplans(shiftplanToShow?: Shiftplan) {
  // clear
  shiftplansElement.innerHTML = '';
  shiftplans.forEach(shiftplan => {
    const el = shiftplan.toElement();
    if (shiftplan === shiftplanToShow) el.classList.add('active');
    shiftplansElement.appendChild(el);
    el.addEventListener('click', (e: MouseEvent) => {
      showShiftplan(shiftplan);
    });
  });
};

function showShiftplan(shiftplanToShow: Shiftplan): void {
  renderShiftplans(shiftplanToShow);

  // clear
  shiftsElement.innerHTML = '';

  //render shifts
  shiftplanToShow.shifts.forEach(
    shift => shiftsElement.appendChild(shift.toElement())
  );
};

renderShiftplans();
