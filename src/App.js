import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import Validation from "./Validation.js";

class App {
  async run() {
    await this.#getVisitDay();
    await this.#getOrder();
  }

  async #getVisitDay() {
    try {
      const input = await InputView.readDate();
      Validation.visitDay(input);
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.#getVisitDay();
    }
  }

  async #getOrder() {
    try {
      const input = await InputView.readOrder();
      const orderList = input.split(",");
      // Validation
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.#getOrder();
    }
  }
}

export default App;
