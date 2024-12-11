class Restaurant {
  #visitDay;
  #customerOrder;

  constructor(visitDay, orderList) {
    this.#visitDay = visitDay;
    this.#customerOrder = new Map(orderList.map((order) => order.split("-")));
    console.log(this.#customerOrder);
  }
}

export default Restaurant;
