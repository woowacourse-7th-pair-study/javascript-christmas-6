import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import parser from '../utils/parser.js';

class Controller {
  constructor() {}

  async start() {
    OutputView.printWelcome();
    const date = await this.#getValidatedDate();
    const menu = await this.#getValidatedMenu();

    // OutputView.printResult();
  }

  #getValidatedDate() {
    return InputView.readDate()((input) => {
      const date = parser.stringToNumber(input);
      vali

      // return date;
    });
  }

  #getValidatedMenu() {

  }
}

export default Controller;
