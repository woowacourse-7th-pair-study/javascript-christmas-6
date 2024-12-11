import { ERROR_MESSAGE } from '../constants/message.js';
import { MENU_REGEX } from '../constants/regex.js';
import validate from '../utils/validate.js';

const validateMenu = (stringArray) => {
  const totalQuantity = 0;
  stringArray.forEach((string) => {
    if (!MENU_REGEX.test(string)) throw new Error(ERROR_MESSAGE.invalidMenu);
    const { menu, quantity: quantityString } = string.match(MENU_REGEX).groups;
    const quantity = Number(quantityString);

    if (
      !validate.isNumber(quantity) ||
      !validate.isInteger(quantity) ||
      !validate.isPositive(quantity)
    ) {
      throw new Error(ERROR_MESSAGE.invalidMenu);
    }
  });

  if (totalQuantity > 20) throw new Error(ERROR_MESSAGE.invalidMenu);
};

export default validateMenu;
