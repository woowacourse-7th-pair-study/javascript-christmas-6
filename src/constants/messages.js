export const INPUT_MESSAGES = {
  date: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
  menu: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
};
export const OUTPUT_MESSAGES = {
  greeting: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  preview(date) {
    return `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`;
  },
  order: '<주문 메뉴>',
  total_price: '<할인 전 총주문 금액>',
  discount_info: '<혜택 내역>',
  total_discount_price: '<총혜택 금액>',
  final_price: '<할인 후 예상 결제 금액>',
};

export const ERROR_MESSAGES = {
  order: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  date: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
};
