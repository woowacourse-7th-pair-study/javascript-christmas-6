import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import parser from '../utils/parser.js';
import validateDate from '../validations/validateDate.js';
import validateMenu from '../validations/validateMenu.js';

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
      validateDate(date);

      return date;
    });
  }

  #getValidatedMenu() {
    return InputView.readMenu()((input) => {
      const menuArray = parser.stringToArray(input);
      validateMenu(menuArray);

      // return menuArray;
    });
  }
}

export default Controller;
