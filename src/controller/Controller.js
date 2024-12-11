import InputView from "../view/InputView.js";
import Validate from "../validate/Validate.js";
import Menu from "../model/Menu.js";
import EventCalendar from "../model/EventCalendar.js";
import Order from "../model/Order.js";
import tryCatch from "../util/tryCatch.js";

import { MENU } from "../constants/menu.js";
import Discount from "../model/Discount.js";

class Controller {
  #menu;
  #eventCalendar;

  constructor() {
    this.#menu = new Menu(MENU);
    this.#eventCalendar = new EventCalendar();
  }
  async play() {
    const date = await tryCatch(() => this.#readDate());
    const orders = await tryCatch(() => this.#readOrder());
    const ordersInstance = this.#generateOrderInstance(orders);
    const eventInfo = this.#eventCalendar.getEvent(date);
    const discount = new Discount(ordersInstance, eventInfo);
  }

  async #readDate() {
    const date = await InputView.readDate();
    Validate.date(Number(date));

    return date;
  }

  async #readOrder() {
    const orderInput = await InputView.readOrder();
    const orders = orderInput
      .split(",")
      .map((order) => order.split("-"))
      .map(([name, count]) => [name, Number(count)]);
    Validate.order(orders, this.#menu);

    return orders;
  }

  #generateOrderInstance(orders) {
    return orders.map(([name, count]) => {
      const category = this.#menu.getCategory(name);
      const price = this.#menu.getPrice(name);

      return new Order({ name, count, category, price });
    });
  }
}

export default Controller;

const controller = new Controller();
controller.play();
