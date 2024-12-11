import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import parser from '../utils/parser.js';
import validateDate from '../validations/validateDate.js';
import validateMenu from '../validations/validateMenu.js';
import { MENU_REGEX } from '../constants/regex.js';

class Controller {
  constructor() {}

  async start() {
    OutputView.printWelcome();
    const date = await this.#getValidatedDate();
    const menus = await this.#getValidatedMenu();

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

      return menuArray.map((menuString) => {
        const { menu, quantity } = menuString.match(MENU_REGEX).groups;
        return { menu, quantity: parser.stringToNumber(quantity) };
      });
    });
  }
}

export default Controller;
