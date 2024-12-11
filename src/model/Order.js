import { DISCOUNT } from '../constants/discount';

export default class Order {
  // [양송이스프,1]
  #name;
  #count;
  #category;
  #price;

  constructor({ name, count, category, price }) {
    this.#name = name;
    this.#count = count;
    this.#category = category;
    this.#price = price;
  }

  getTotalPrice() {
    return this.#count * this.#price;
  }
  getWeekDiscount() {
    return DISCOUNT.week_discount * this.#count;
  }
  get category() {
    return this.#category;
  }

  getInfoStr() {
    return `${this.#name} ${this.#count}개`;
  }
}
