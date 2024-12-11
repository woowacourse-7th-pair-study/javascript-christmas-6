class Restaurant {
  #visitDay;
  #customerOrder;

  constructor(visitDay, orderList) {
    this.#visitDay = visitDay;
    this.#customerOrder = orderList.map((order) => {
      const [menuName, count] = order.split('-');

      return [menuName, Number(count)];
    });
  }

  calculateTotalAmount(menu) {
    return this.#customerOrder.reduce((totalAmount, [menuName, count]) => {
      const priceInfo = menu.findMenu(menuName).price;

      return totalAmount + priceInfo * count;
    }, 0);
  }

  getOrderListForPrint() {
    return this.#customerOrder.map(([menuName, count]) => `${menuName} ${count}개`).join('\n');
  }
}

export default Restaurant;
