import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printWelcome() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  // TODO: 보류, 날짜 수정
  printResult() {
    Console.print('12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!');
  },

  /**
   * 에러를 반환한다.
   * @param {string} errorMessage 
   */
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },
  
};

export default OutputView;
