const Validation = {
  isNumber(input) {
    if (Number.isNaN(Number(input)))
      throw new Error("[ERROR] 숫자가 아닌 값이 입력되었습니다. 다시 입력해주세요.");
  },

  isInteger(input) {
    if (!Number.isInteger(Number(input)))
      throw new Error("[ERROR] 정수가 아닌 값이 입력되었습니다. 다시 입력해주세요.");
  },

  visitDay(input) {
    this.isNumber(input);
    this.isInteger(input);
    const visitDay = Number(input);
    if (visitDay < 1 || visitDay > 31)
      throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
  },

  order(orderList) {},
};

export default Validation;
