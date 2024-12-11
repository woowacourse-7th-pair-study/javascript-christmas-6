/**
 * 숫자인지 확인
 * @param {number} number
 * @returns {boolean}
 */
const isNumber = (number) => !Number.isNaN(Number(number));

/**
 * 정수인지 확인
 * @param {number} number
 * @returns {boolean}
 */
const isInteger = (number) => Number.isInteger(Number(number));

/**
 *
 * @param {number} number
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
const isInRange = (number, min, max) => number >= min && number <= max;

/**
 *
 * @param {number} number
 * @returns {boolean}
 */
const isPositive = (number) => Number(number) > 0;

const validate = {
  isNumber,
  isInteger,
  isInRange,
  isPositive,
};

export default validate;
