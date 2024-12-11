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
}
