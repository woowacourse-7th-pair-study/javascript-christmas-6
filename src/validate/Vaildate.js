import { ERROR_MESSAGES } from "../constants/messages";

export default class Validate {
  static date(date) {
    this.#isNumber(date);
    this.#isInRange(date);
    this.#isInteger(date);
  }
  //[[양송이스프,1],[초코케이크,2]]
  static order(orderArr) {
    let totalCount = 0;
    const nameArr = [];
    orderArr.forEach(([name, count]) => {
      totalCount += count;
      this.#isValidCount(totalCount);
      this.#isDuplicate(name, nameArr);
      nameArr.push(name);
      this.#validateCount(count);
    });
  }
  static #validateCount(count) {
    this.#isNumber(count);
    this.#isInteger(count);
    this.#isOVerOne(count);
  }
  static #isOVerOne(count) {
    if (count < 1) {
      throw new Error(ERROR_MESSAGES.order);
    }
  }
  static #isValidCount(totalCount) {
    if (totalCount > 20) {
      throw new Error(ERROR_MESSAGES.order);
    }
  }
  static #isDuplicate(name, nameArr) {
    if (nameArr.includes(name)) {
      throw new Error(ERROR_MESSAGES.order);
    }
  }
  static #isNumber(date) {
    if (Number.isNaN(date)) {
      throw new Error(ERROR_MESSAGES.date);
    }
  }

  static #isInRange(date) {
    if (date < 1 || date > 31) {
      throw new Error(ERROR_MESSAGES.date);
    }
  }
  static #isInteger(date) {
    if (!Number.isInteger(date)) {
      throw new Error(ERROR_MESSAGES.date);
    }
  }
}
