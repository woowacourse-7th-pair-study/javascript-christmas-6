import { ERROR_MESSAGE } from '../constants/message.js';
import { MENU_REGEX } from '../constants/regex.js';
import validate from '../utils/validate.js';
import { MENU } from '../constants/menu.js';

const validateMenu = (stringArray) => {
  const totalQuantity = 0;
  const allMenu = MENU.map(({ menu }) => menu);
  const inputMenu = [];

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

    const isExist = (item) => item === menu;
    if (!allMenu.some(isExist)) throw new Error(ERROR_MESSAGE.invalidMenu);

    const { type } = MENU.find((menuItem) => menuItem.menu === menu);
    inputMenu.push({ type, menu });
  });

  const inputMenuSet = new Set([...inputMenu.map((menu) => menu.menu)]);
  if (inputMenu.length !== inputMenuSet.size)
    throw new Error(ERROR_MESSAGE.invalidMenu);

  // 음료만 주문한 메뉴들인지
  const filteredType = inputMenu.filter(({ type }) => type !== 'drink');
  if (filteredType.length === 0) throw new Error(ERROR_MESSAGE.invalidMenu);

  if (totalQuantity > 20) throw new Error(ERROR_MESSAGE.invalidMenu);
};

export default validateMenu;
