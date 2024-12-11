import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printWelcome() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },
  printEventAnnounce() {
    Console.print('12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!');
  },
  printMenu(menu) {
    Console.print('\n<주문 메뉴>');

    Console.print(menu);
  },
  printTotalAmountBeforeDiscount(amount) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${amount.toLocaleString()}원`);
  },
  printEventInfo(eventInfo) {
    Console.print('\n<혜택 내역>');
    Console.print(eventInfo);
  },
  printTotalEventAmount(eventAmount) {
    Console.print('\n<총혜택 금액>');
    Console.print(`${eventAmount.toLocaleString()}원`);
  },
  printTotalPurchaseAmount(purchaseAmount) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(`${purchaseAmount.toLocaleString()}원`);
  },
  printMessage(message) {
    Console.print(message);
  },
  // ...
};

export default OutputView;
