import { Console } from '@woowacourse/mission-utils';
import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';

const repeatUtilComplete = (message) => async (validationCallback) => {
  try {
    const input = await Console.readLineAsync(message);
    return validationCallback(input);
  } catch (error) {
    OutputView.printErrorMessage(error.message);
    return repeatUtilComplete(message)(validationCallback);
  }
}

export default repeatUtilComplete;
