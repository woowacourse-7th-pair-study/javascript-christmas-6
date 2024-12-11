import Validation from "../src/Validation.js";
import Menu from "../src/Menu.js";

describe("Validation Test", () => {
  test.each([
    { value: ["양송이수프-1", "제로콜라"], caseName: "주문 형식이 올바르지 않은 경우" },
    { value: ["1-제로콜라"], caseName: "주문 형식이 올바르지 않은 경우" },
    {
      value: [
        "시저샐러드-4",
        "티본스테이크-3",
        "크리스마스파스타-4",
        "제로콜라-10",
        "아이스크림-1",
      ],
      caseName: "주문 개수가 20개를 넘는 경우",
    },
  ])("%caseName 예외가 발생된다.", ({ value }) => {
    const menu = new Menu();

    expect(() => Validation.order(menu, value)).toThrow("[ERROR]");
  });

  test.each([
    { value: ["양송이수프-2", "제로콜라-3"] },
    { value: ["제로콜라-2", "티본스테이크-3"] },
  ])("예외가 발생하지 않는다.", ({ value }) => {
    const menu = new Menu();

    expect(() => Validation.order(menu, value)).not.toThrow();
  });
});
