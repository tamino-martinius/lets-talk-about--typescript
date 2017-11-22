var Shift = /** @class */ (function () {
    function Shift(startsAt, endsAt, position) {
        this.startsAt = startsAt;
        this.endsAt = endsAt;
        this.position = position;
    }
    Object.defineProperty(Shift.prototype, "displayDate", {
        get: function () {
            return this.startsAt.toLocaleDateString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shift.prototype, "displayStart", {
        get: function () {
            return this.startsAt.toLocaleTimeString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shift.prototype, "displayEnd", {
        get: function () {
            return this.endsAt.toLocaleTimeString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shift.prototype, "isToday", {
        get: function () {
            return this.displayDate === new Date().toLocaleDateString();
        },
        enumerable: true,
        configurable: true
    });
    Shift.prototype.toHTML = function () {
        var currentClass = this.isToday ? 'today' : '';
        return "\n      <li class=\"" + currentClass + "\">\n        <b>" + this.position + "</b>\n        <i>" + this.displayDate + " " + this.displayStart + " - " + this.displayEnd + "</i>\n      </li>\n    ";
    };
    return Shift;
}());
