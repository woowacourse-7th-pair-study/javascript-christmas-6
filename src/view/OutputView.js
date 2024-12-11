import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/messages.js';

export default class OutputView {
  static printGreet() {
    Console.print(OUTPUT_MESSAGES.greeting);
  }

  static printPreview(date) {
    Console.print(OUTPUT_MESSAGES.preview(date));
  }

  static printOrderInfo(orderArr) {
    Console.print(OUTPUT_MESSAGES.order);
    orderArr.forEach((order) => Console.print(order.getInfoStr()));
  }

  static printTotalPrice(totalPrice) {
    Console.print(OUTPUT_MESSAGES.total_price);
    Console.print(`${totalPrice.toLocaleString()}원`);
  }

  static printDiscountInfo(discountInfo) {
    Console.print(OUTPUT_MESSAGES.discount_info);
    if (Object.keys(discountInfo).length === 0) {
      Console.print('없음');
    }

    Object.entries(discountInfo).forEach(([key, value]) =>
      Console.print(`${key}: -${value.toLocaleString()}원`),
    );
  }

  static printTotalDiscount(totalDiscount) {
    Console.print(OUTPUT_MESSAGES.total_discount_price);
    Console.print(`-${totalDiscount.toLocaleString()}원`);
  }

  static printFinalPrice(finalPrice) {
    Console.print(OUTPUT_MESSAGES.final_price);
    Console.print(`${finalPrice.toLocaleString()}원`);
  }
}
