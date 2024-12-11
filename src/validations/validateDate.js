import { ERROR_MESSAGE } from '../constants/message.js';
import validate from '../utils/validate.js';

/**
 *
 * @param {number} number
 */
const validateDate = (number) => {
  if (
    !validate.isNumber(number) ||
    !validate.isInteger(number) ||
    !validate.isInRange(number, 1, 31)
  ) {
    throw new Error(ERROR_MESSAGE.invalidDate);
  }
};

export default validateDate;
