class Menu {
  #menu;

  constructor(menu) {
    this.#menu = menu;
  }

  getMenu() {
    return this.#menu;
  }

  checkName(inputMenu) {
    return this.#menu.some(({ name }) => inputMenu === name);
  }

  getCategory(inputMenu) {
    const menuInfo = this.#menu.find(({ name }) => inputMenu === name);

    return menuInfo.category;
  }
}

export default Menu;
