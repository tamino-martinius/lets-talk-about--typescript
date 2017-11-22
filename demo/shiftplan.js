/// <reference path="./shift.ts" />
var Shiftplan = /** @class */ (function () {
    function Shiftplan() {
        this.shifts = [];
    }
    Shiftplan.prototype.renderToList = function (ul) {
        ul.innerHTML = this.shifts.map(function (shift) { return shift.toHTML(); }).join('');
    };
    return Shiftplan;
}());
