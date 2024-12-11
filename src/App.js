import InputView from "./InputView.js";
import Menu from "./Menu.js";
import OutputView from "./OutputView.js";
import Restaurant from "./Restaurant.js";
import Validation from "./Validation.js";

class App {
  #menu;

  constructor() {
    this.#menu = new Menu();
  }

  async run() {
    OutputView.printWelcome();
    const visitDay = await this.#getVisitDay();
    const orderList = await this.#getOrder();

    const restaurant = new Restaurant(visitDay, orderList);
    OutputView.printEventAnnounce();
  }

  async #getVisitDay() {
    try {
      const input = await InputView.readDate();
      Validation.visitDay(input);
      return Number(input);
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.#getVisitDay();
    }
  }

  async #getOrder() {
    try {
      const input = await InputView.readOrder();
      const orderList = input.split(",");
      Validation.order(this.#menu, orderList);
      return orderList;
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.#getOrder();
    }
  }
}

export default App;
