import validate from '../utils/validate.js';

// TODO: 숫자, 정수, 1~31

/**
 * 
 * @param {number} number 
 */
const validaetDate = (number) => {
  if (!validate.isNumber(number)) {
    throw new Error()
  }
}

export default validaetDate;
