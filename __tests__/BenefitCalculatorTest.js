import BenefitCalculator from '../src/models/BenefitCalculator.js';

describe('BenefitCalculator 테스트', () => {
  let benefitCalculator;

  beforeEach(() => {
    benefitCalculator = new BenefitCalculator();
  });
  test('크리스마스 디데이 할인', () => {
    const date = 24;
    benefitCalculator.calculateDdayDiscount(date);
    const benefitDiscount = benefitCalculator.getBenefitDiscount();

    expect(benefitDiscount.dday).toBe(3300);
  });

  test.each([
    {
      description: '평일 할인',
      date: 26,
      menus: [
        { menu: '초코케이크', quantity: 2 },
        { menu: '아이스크림', quantity: 2 },
        { menu: '크리스마스파스타', quantity: 2 },
        { menu: '해산물파스타', quantity: 2 },
      ],
      expectWeekday: 8092,
      expectWeekend: 0,
    },
    {
      description: '주말 할인',
      date: 29,
      menus: [
        { menu: '초코케이크', quantity: 2 },
        { menu: '아이스크림', quantity: 2 },
        { menu: '크리스마스파스타', quantity: 2 },
        { menu: '해산물파스타', quantity: 2 },
      ],
      expectWeekday: 0,
      expectWeekend: 8092,
    },
  ])('$description', ({ date, menus, expectWeekday, expectWeekend }) => {
    benefitCalculator.calculateWeekDiscount(date, menus);
    const benefitDiscount = benefitCalculator.getBenefitDiscount();

    expect(benefitDiscount.weekday).toBe(expectWeekday);
    expect(benefitDiscount.weekend).toBe(expectWeekend);
  });
});
