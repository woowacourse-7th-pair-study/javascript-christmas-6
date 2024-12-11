import { MENU } from '../constants/menu.js';

class Benefit {
  #ddayDiscount = 0;
  #weekdayDiscount = 0;
  #weekendDiscount = 0;

  getDiscount() {
    return { dday: this.#ddayDiscount, weekday: this.#weekdayDiscount, weekend: this.#weekendDiscount };
  }

  calculateDdayDiscount(date) {
    if (date >= 26) return;

    this.#ddayDiscount = 1000 + (date - 1) * 100;
  }

  calculateWeekDiscount(date, menus) {
    const weekIndex = date % 7;
    // 주말
    if (weekIndex === 1 || weekIndex === 2) {
      this.#calculateWeekendDiscount(menus);
      return;
    }
    // 평일
    this.#calculateWeekdayDiscount(menus);
  }

  /**
   * 주말인 경우, 메인 메뉴를 메뉴 1개 당 2,023원 할인한다
   * @param {Array<{ menu: string, quantity: number }>} menus 
   */
  #calculateWeekendDiscount(menus) {
    menus.forEach(({menu, quantity}) => {
      const isMainMenu = MENU.find((menuItem) => menuItem.menu === menu).type === 'main';
      if (isMainMenu) this.#weekendDiscount += 2_023 * quantity;
    });
  }

  /**
   * 주말인 경우, 메인 메뉴를 메뉴 1개 당 2,023원 할인한다
   * @param {Array<{ menu: string, quantity: number }>} menus 
   */
  #calculateWeekdayDiscount(menus) {
    menus.forEach(({menu, quantity}) => {
      const isDessertMenu = MENU.find((menuItem) => menuItem.menu === menu).type === 'dessert';
      if (isDessertMenu) this.#weekdayDiscount += 2_023 * quantity;
    });
  }
}

export default Benefit;
