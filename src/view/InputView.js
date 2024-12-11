import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../constants/messages";
const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.date);

    return input;
  },
  async readOrder() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.menu);

    return input;
  },
};
export default InputView;
