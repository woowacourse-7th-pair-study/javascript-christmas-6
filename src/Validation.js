const Validation = {
  visitDay(input) {
    const visitDay = Number(input);
    if (
      Number.isNaN(Number(input)) ||
      !Number.isInteger(Number(input)) ||
      visitDay < 1 ||
      visitDay > 31
    )
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  },

  isInMenu(menu, input) {
    if (!menu.isInMenu(input)) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },

  order(menu, orderList) {
    const menuSet = new Set();
    let allCount = 0;

    orderList.forEach((order) => {
      const [menuName, count] = order.split('-');

      // menuName
      this.isInMenu(menu, menuName);
      if (menuSet.has(menuName)) {
        throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
      }

      menuSet.add(menuName);

      // count Validation
      if (Number.isNaN(Number(input)) || !Number.isInteger(Number(input)) || Number(count) < 1) {
        throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
      }
      allCount += Number(count);
    });

    if (menu.isOnlyDrink([...menuSet])) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }

    if (allCount > 20) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },
};

export default Validation;
