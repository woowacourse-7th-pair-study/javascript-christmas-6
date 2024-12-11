import Menu from '../src/Menu';

describe('Menu Test', () => {
  test.each([
    ['양송이수프', true],
    ['양파수프', false],
  ])('메뉴판에 없는 메뉴 이름이 있는지 확인한다.', (value, result) => {
    const menu = new Menu();

    expect(menu.isInMenu(value)).toBe(result);
  });

  test.each([
    [['레드와인', '제로콜라'], true],
    [['양송이수프', '제로콜라'], false],
  ])('주문 메뉴가 모두 음료인지 확인한다', (menuNames, result) => {
    const menu = new Menu();

    expect(menu.isOnlyDrink(menuNames)).toBe(result);
  });
});
