import { MENU } from "../constants/menu";
export default class Order {
  // [양송이스프,1]
  #name;
  #count;
  #category;
  constructor([name, count], category) {
    this.#name = name;
    this.#count = count;
    this.#category = category;
  }
}
