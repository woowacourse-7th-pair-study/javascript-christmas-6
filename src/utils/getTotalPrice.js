import { MENU } from '../constants/menu.js';

export const getTotalPrice = (menus) =>
  menus.reduce((totalPrice, { menu, quantity }) => {
    const menuPrice = MENU.find((menuItem) => menuItem.menu === menu).price;

    return totalPrice + menuPrice * quantity;
  }, 0);
