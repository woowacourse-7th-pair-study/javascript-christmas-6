
/**
 * 숫자인지 확인
 * @param {number} number 
 * @returns {boolean}
 */
const isNumber = (number) => {
  return !Number.isNaN(Number(number));
}

/**
 * 정수인지 확인
 * @param {number} number 
 * @returns {boolean}
 */
const isInteger = (number) => {
  return Number.isInteger(Number(number));
}

const validate = {
  isNumber,
  isInteger,

}

export default validate;
