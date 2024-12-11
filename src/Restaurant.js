import Event from './Event.js';

class Restaurant {
  #visitDay;
  #customerOrder;
  #totalAmount;
  #event;
  #appliedEvent;
  #totalDiscountAmount;

  constructor(visitDay, orderList) {
    this.#visitDay = visitDay;
    this.#customerOrder = orderList.map((order) => {
      const [menuName, count] = order.split('-');

      return [menuName, Number(count)];
    });

    this.#event = new Event();
  }

  calculateTotalAmount(menu) {
    this.#totalAmount = this.#customerOrder.reduce((totalAmount, [menuName, count]) => {
      const priceInfo = menu.findMenu(menuName).price;

      return totalAmount + priceInfo * count;
    }, 0);

    return this.#totalAmount;
  }

  getOrderListForPrint() {
    return this.#customerOrder.map(([menuName, count]) => `${menuName} ${count}개`).join('\n');
  }

  calculateDiscount(menu) {
    this.#appliedEvent = [];

    if (this.#totalAmount < 10000) {
      return '없음';
    }

    if (this.#event.isChristmasDiscountApplicable(this.#visitDay)) {
      const amount = (1000 + this.#visitDay * 100 - 100) * -1;
      this.#appliedEvent.push({ name: '크리스마스 디데이 할인', amount });
    }

    if (this.#event.isWeekend(this.#visitDay)) {
      // 주말
      const mainCount = menu.getTotalCountByCategory(this.#customerOrder, '메인');
      this.#appliedEvent.push({ name: '주말 할인', amount: mainCount * -2023 });
    } else {
      // 평일
      const dessertCount = menu.getTotalCountByCategory(this.#customerOrder, '디저트');
      this.#appliedEvent.push({ name: '평일 할인', amount: dessertCount * -2023 });
    }

    if (this.#appliedEvent.length == 0) {
      return '없음';
    }

    return this.#appliedEvent
      .map(({ name, amount }) => `${name}: ${amount.toLocaleString()}원`)
      .join('\n');
  }

  calculateTotalDiscountAmount() {
    this.#totalDiscountAmount = this.#appliedEvent.reduce(
      (totalAmount, { amount }) => totalAmount + amount,
      0,
    );

    return this.#totalDiscountAmount;
  }

  calculatePurchaseAmount() {
    return this.#totalAmount + this.#totalDiscountAmount;
  }
}

export default Restaurant;
