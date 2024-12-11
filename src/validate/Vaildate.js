import { ERROR_MESSAGES } from "../constants/messages";

export default class Validate {
  static date(date) {
    this.#isNumber(date);
    this.#isInRange(date);
    this.#isInteger(date);
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
