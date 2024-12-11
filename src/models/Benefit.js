class Benefit {
  #ddayDiscount = 0;
  #weekdayDiscount = 0;
  #weekendDiscount = 0;

  calculateDdayDiscount(date) {
    if (date > 26) return;

    this.#ddayDiscount = 1000 + (date - 1) * 100;
  }
}

export default Benefit;
