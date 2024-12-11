import { DISCOUNT } from "../constants/discount";
import { ROLE } from "../constants/role";

export default class Discount {
  #orderArr;
  #eventInfo;
  #discountInfo;

  // [order객체,order객체] , {weekInfo,dDay}
  constructor(orderArr, eventInfo) {
    this.#orderArr = orderArr;
    this.#eventInfo = eventInfo;
    this.#discountInfo = {};
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    this.#orderArr.forEach((order) => (totalPrice += order.getTotalPrice()));
    return totalPrice;
  }

  discount() {
    const totalPrice = this.calculateTotalPrice();
    if (totalPrice < ROLE.min_amount) {
      return;
    }
    if (this.#eventInfo.dDay) {
      this.#dDAyDiscount();
    }
    //평일
    if (this.#eventInfo.weekInfo === "weekday") {
      this.#weekdayDiscount();
    }
    //주말
    if (this.#eventInfo.weekInfo === "weekend") {
      this.#weekendDiscount();
    }
  }

  #dDAyDiscount() {
    const dDayDiscount =
      DISCOUNT.dday_start_amount +
      DISCOUNT.dday_add_unit * this.#eventInfo.dDay;
    this.#discountInfo["dDay"] = dDayDiscount;
  }

  #weekdayDiscount() {
    const dessertArr = this.#orderArr.filter(
      (order) => order.category === "디저트"
    );
    const weekdayDiscount = dessertArr.reduce(
      (acc, order) => acc + order.getWeekDiscount(),
      0
    );
    this.#discountInfo["weekdayDicount"] = weekdayDiscount;
  }

  #weekendDiscount() {
    const mainArr = this.#orderArr.filter((order) => order.category === "메인");
    const weekendDiscount = mainArr.reduce(
      (acc, order) => acc + order.getWeekDiscount(),
      0
    );
    this.#discountInfo["weekendDicount"] = weekendDiscount;
  }
}
