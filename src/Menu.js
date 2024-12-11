class Menu {
  #menu;

  constructor() {
    this.#menu = [
      { name: "양송이수프", price: 6000, category: "애피타이저" },
      { name: "타파스", price: 5500, category: "애피타이저" },
      { name: "시저샐러드", price: 8000, category: "애피타이저" },
      { name: "티본스테이크", price: 55000, category: "메인" },
      { name: "바비큐립", price: 54000, category: "메인" },
      { name: "해산물파스타", price: 35000, category: "메인" },
      { name: "크리스마스파스타", price: 25000, category: "메인" },
      { name: "초코케이크", price: 15000, category: "디저트" },
      { name: "아이스크림", price: 5000, category: "디저트" },
      { name: "제로콜라", price: 3000, category: "음료" },
      { name: "레드와인", price: 60000, category: "음료" },
      { name: "샴페인", price: 25000, category: "음료" },
    ];
  }

  findMenu(menuName) {
    return this.#menu.find((menu) => menu.name === menuName);
  }

  isInMenu(menuName) {
    return this.#menu.some((menu) => menu.name === menuName);
  }

  isOnlyDrink(menuNames) {
    return menuNames.every((menu) => {
      const menuInfo = this.findMenu(menu);

      return menuInfo.category === "음료";
    });
  }

  getTotalCountByCategory(customerOrder, categoryName) {
    return customerOrder.reduce((totalCount, [menuName, count]) => {
      const menuInfo = this.findMenu(menuName);

      if (menuInfo.category === categoryName) {
        return totalCount + count;
      }
      return totalCount;
    }, 0);
  }
}

export default Menu;
