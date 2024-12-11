class Event {
  #weekend;

  constructor() {
    this.#weekend = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
  }

  // 평일 or 주말
  isWeekend(visitDay) {
    return this.#weekend.includes(visitDay);
  }

  // 크리스마스 기간에 포함되는지
  isChristmasDiscountApplicable(visitDay) {
    return visitDay >= 1 && visitDay <= 25;
  }
}

export default Event;
