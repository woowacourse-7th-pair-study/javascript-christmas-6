import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import parser from '../utils/parser.js';
import validateDate from '../validations/validateDate.js';
import validateMenu from '../validations/validateMenu.js';
import { MENU_REGEX } from '../constants/regex.js';
import BenefitCalculator from '../models/BenefitCalculator.js';
import { getTotalPrice } from '../utils/getTotalPrice.js';

class Controller {
  async start() {
    OutputView.printWelcome();
    const date = await this.#getValidatedDate();
    const menus = await this.#getValidatedMenu();
    const totalPrice = getTotalPrice(menus);
    const benefitCalculator = new BenefitCalculator();

    benefitCalculator.calculateDdayDiscount(date);
    benefitCalculator.calculateWeekDiscount(date, menus);

    const benefitDiscount = benefitCalculator.getBenefitDiscount();

    OutputView.printResultStartMessage(date);
    OutputView.printResult(menus, totalPrice, benefitDiscount);
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
