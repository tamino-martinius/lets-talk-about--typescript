class Shift {
  constructor(
    public startsAt: Date,
    public endsAt: Date,
    public position: string,
  ) {}

  get displayDate(): string {
    return this.startsAt.toLocaleDateString();
  }

  get displayStart(): string {
    return this.startsAt.toLocaleTimeString();
  }

  get displayEnd(): string {
    return this.endsAt.toLocaleTimeString();
  }

  get isToday(): boolean {
    return this.displayDate === new Date().toLocaleDateString();
  }

  toElement(): HTMLLIElement {
    const currentClass = this.isToday ? 'today' : '';

    const el: HTMLLIElement = document.createElement('li');
    if (this.isToday) el.classList.add('today');
    el.innerHTML =`
      <b>${this.position}</b>
      <i>${this.displayDate} ${this.displayStart} - ${this.displayEnd}</i>
    `;
    return el;
  }
}
