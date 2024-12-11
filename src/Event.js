class Event {
  #weekend;
  // 달력

  constructor() {
    this.#weekend = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
  }

  // 이벤트 헤택 계산
  calculateDiscountAmount() {}

  // 평일 or 주말
  isWeekend(visitDate) {
    return this.#weekend.includes(visitDate);
  }

  // 크리스마스 기간에 포함되는지
  calculateChristmasDiscount() {}
}

export default Event;
