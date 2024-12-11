import { Console } from '@woowacourse/mission-utils';

const tryCatch = async (inputFn) => {
  try {
    return await inputFn();
  } catch (e) {
    Console.print(e.message);
    return await tryCatch(() => inputFn());
  }
};

export default tryCatch;
