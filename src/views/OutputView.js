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

  /**
   *
   * @param {Array<{ menu: string, quantity: number }>} menus
   * @param {number} totalPrice
   * @param {{dday: number, weekday: number, weekend: number }} benefitDiscount
   */
  printResult(menus, totalPrice, benefitDiscount) {
    this.printOrderMenu(menus);
    this.printTotalPrice(totalPrice);
    this.printBenefitDiscount(benefitDiscount);

    const totalBenefitDiscount =
      benefitDiscount.dday + benefitDiscount.weekday + benefitDiscount.weekend;
    this.printTotalBenefitDiscount(totalBenefitDiscount);
    this.printTotalPaymentAmount(totalPrice, totalBenefitDiscount);
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

  printBenefitDiscount(benefitDiscount) {
    Console.print('<혜택 내역>');
    if (
      benefitDiscount.dday === 0 &&
      benefitDiscount.weekday === 0 &&
      benefitDiscount.weekend === 0
    ) {
      Console.print('없음');
    }
    if (benefitDiscount.dday > 0) {
      Console.print(
        `크리스마스 디데이 할인: -${parser.priceToLocaleString(benefitDiscount.dday)}원`,
      );
    }
    if (benefitDiscount.weekday > 0) {
      Console.print(
        `평일 할인: -${parser.priceToLocaleString(benefitDiscount.weekday)}원`,
      );
    }
    if (benefitDiscount.weekend > 0) {
      Console.print(
        `주말 할인: -${parser.priceToLocaleString(benefitDiscount.weekend)}원`,
      );
    }
  },

  printTotalBenefitDiscount(totalBenefitDiscount) {
    Console.print('<총혜택 금액>');
    Console.print(`-${parser.priceToLocaleString(totalBenefitDiscount)}원`);
  },

  printTotalPaymentAmount(totalPrice, totalBenefitDiscount) {
    const totalPaymentAmount = totalPrice - totalBenefitDiscount;
    Console.print('<할인 후 예상 결제 금액>');
    Console.print(`${parser.priceToLocaleString(totalPaymentAmount)}원`);
  },

  /**
   * 에러를 반환한다.
   * @param {string} errorMessage
   */
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },
};

export default OutputView;
