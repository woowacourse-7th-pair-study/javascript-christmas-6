import { Console } from '@woowacourse/mission-utils';
import parser from '../utils/parser.js';

const OutputView = {
  printWelcome() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printResultStartMessage(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
    );
  },

  printResult(menus, totalPrice, benefitDiscount) {
    this.printOrderMenu(menus);
    this.printTotalPrice(totalPrice);
  },

  printOrderMenu(menus) {
    Console.print('<주문 메뉴>');
    menus.forEach(({ menu, quantity }) => {
      Console.print(`${menu} ${quantity}개`);
    });
  },

  printTotalPrice(totalPrice) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${parser.priceToLocaleString(totalPrice)}원`);
  },

  //
  // 142,000원

  // <혜택 내역>
  // 크리스마스 디데이 할인: -1,200원
  // 평일 할인: -4,046원

  // <총혜택 금액>
  // -5,246원

  // <할인 후 예상 결제 금액>
  // 136,754원

  /**
   * 에러를 반환한다.
   * @param {string} errorMessage
   */
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },
};

export default OutputView;
