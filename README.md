# 미션 - 크리스마스 프로모션

## 🔍 진행 방식

- 미션은 **기능 요구 사항, 프로그래밍 요구 사항, 과제 진행 요구 사항** 세 가지로 구성되어 있다.
- 세 개의 요구 사항을 만족하기 위해 노력한다. 특히 기능을 구현하기 전에 기능 목록을 만들고, 기능 단위로 커밋 하는 방식으로 진행한다.
- 기능 요구 사항에 기재되지 않은 내용은 스스로 판단하여 구현한다.

## 📮 미션 제출 방법

- 미션 구현을 완료한 후 GitHub을 통해 제출해야 한다.
  - GitHub을 활용한 제출 방법은 [프리코스 과제 제출](https://docs.google.com/document/d/1cmg0VpPkuvdaetxwp4hnyyFC_G-1f2Gr8nIDYIWcKC8/edit?usp=sharing) 문서를 참고해
    제출한다.
- GitHub에 미션을 제출한 후 [우아한테크코스 지원](https://apply.techcourse.co.kr) 사이트에 접속하여 프리코스 과제를 제출한다.
  - 자세한 방법은 [제출 가이드](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse#제출-가이드) 참고
    - **지원 플랫폼을 통해 과제를 제출하지 않으면 최종 제출되지 않은 것으로 처리되므로 주의한다.**

## 🚨 과제 제출 전 체크 리스트 - 0점 방지

- 기능 구현을 모두 정상적으로 했더라도 **요구 사항에 명시된 출력값 형식을 지키지 않을 경우 0점으로 처리**한다.
- 기능 구현을 완료한 뒤 아래 가이드에 따라 테스트를 실행했을 때 모든 테스트가 성공하는지 확인한다.
- **테스트가 실패할 경우 0점으로 처리**되므로, 반드시 확인 후 제출한다.

### 테스트 실행 가이드

- 테스트 패키지 설치를 위해 `Node.js` 버전 `18.17.1` 이상이 필요하다.
- 다음 명령어를 입력해 패키지를 설치한다.

```bash
npm install
```

- 설치가 완료되었다면, 다음 명령어를 입력해 테스트를 실행한다.

```bash
npm test
```

---

## 🚀 기능 요구 사항

> 이번 미션은 이메일 형식의 기능 요구 사항입니다. 문제를 구현하는 데 필요한 요구사항과 배경지식은 이메일 내용에 전부 담겨있으니, 꼼꼼하게 확인하고 필요하다면 주어진 문제의 내용을 통해 유추하고 스스로 판단해
> 구현해 주시면 됩니다. 문제의 모든 내용은 충분히 검토되었으며, 출제 의도를 담은 내용임을 알려드립니다.

보낸 사람: 비즈니스팀 \<`biz@woowacourse.io`\>  
받는 사람: 개발팀 \<`dev@woowacourse.io`\>

제목: 12월 이벤트를 위한 개발 요청

안녕하세요. 비즈니스팀입니다!

다가오는 2023년 12월에 우테코 식당에서 1년 중 제일 큰 이벤트를 개최하려고 합니다.  
12월을 위해 이벤트 예산을 넉넉히 확보해 두었으니, 예산은 걱정하지 마세요~

특별히 이번 12월 이벤트를 진행하기 위해서, 개발팀의 도움이 많이 필요합니다.  
아래 메뉴와 달력 이미지를 보면서 12월 이벤트 계획과 요청 내용을 본격적으로 설명해 드릴게요.

#### 메뉴

```
<애피타이저>
양송이수프(6,000), 타파스(5,500), 시저샐러드(8,000)

<메인>
티본스테이크(55,000), 바비큐립(54,000), 해산물파스타(35,000), 크리스마스파스타(25,000)

<디저트>
초코케이크(15,000), 아이스크림(5,000)

<음료>
제로콜라(3,000), 레드와인(60,000), 샴페인(25,000)
```

#### 달력

![](image.png)

- 그림에서 별 표시 되어있는 날짜는 무시해주세요.

#### 이벤트 목표

1. 중복된 할인과 증정을 허용해서, 고객들이 혜택을 많이 받는다는 것을 체감할 수 있게 하는 것
2. 올해 12월에 지난 5년 중 최고의 판매 금액을 달성
3. 12월 이벤트 참여 고객의 5%가 내년 1월 새해 이벤트에 재참여하는 것

#### 12월 이벤트 계획

- 크리스마스 디데이 할인
  - 이벤트 기간: 2023.12.1 ~ 2023.12.25
  - 1,000원으로 시작하여 크리스마스가 다가올수록 날마다 할인 금액이 100원씩 증가
  - 총주문 금액에서 해당 금액만큼 할인  
    (e.g. 시작일인 12월 1일에 1,000원, 2일에 1,100원, ..., 25일엔 3,400원 할인)
- 평일 할인(일요일~목요일): 평일에는 디저트 메뉴를 메뉴 1개당 2,023원 할인
- 주말 할인(금요일, 토요일): 주말에는 메인 메뉴를 메뉴 1개당 2,023원 할인
- 이벤트 기간: '크리스마스 디데이 할인'을 제외한 다른 이벤트는 2023.12.1 ~ 2023.12.31 동안 적용

#### 고객에게 안내할 이벤트 주의 사항

- 총주문 금액 10,000원 이상부터 이벤트가 적용됩니다.
- 음료만 주문 시, 주문할 수 없습니다.
- 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.
  (e.g. 시저샐러드-1, 티본스테이크-1, 크리스마스파스타-1, 제로콜라-3, 아이스크림-1의 총개수는 7개)

#### '12월 이벤트 플래너' 개발 요청 사항

- 고객들이 식당에 방문할 날짜와 메뉴를 미리 선택하면 이벤트 플래너가 주문 메뉴, 할인 전 총주문 금액, 증정 메뉴, 혜택 내역, 총혜택 금액, 할인 후 예상 결제 금액, 12월 이벤트 배지 내용을 보여주기를 기대합니다.
- 12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)
  - 방문할 날짜는 1 이상 31 이하의 숫자로만 입력받아 주세요.
  - 1 이상 31 이하의 숫자가 아닌 경우, "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.
  - 모든 에러 메시지는 "[ERROR]"로 시작하도록 작성해 주세요.
- 주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)
  - 고객이 메뉴판에 없는 메뉴를 입력하는 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.
  - 메뉴의 개수는 1 이상의 숫자만 입력되도록 해주세요. 이외의 입력값은 "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.
  - 메뉴 형식이 예시와 다른 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.
  - 중복 메뉴를 입력한 경우(e.g. 시저샐러드-1,시저샐러드-1), "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.
  - 모든 에러 메시지는 "[ERROR]"로 시작하도록 작성해 주세요.
- 주문 메뉴의 출력 순서는 자유롭게 출력해 주세요.
- 총혜택 금액 = 할인 금액의 합계 + 증정 메뉴의 가격
- 할인 후 예상 결제 금액 = 할인 전 총주문 금액 - 할인 금액
- 혜택 내역
  - 고객에게 적용된 이벤트 내역만 보여 주세요.
  - 적용된 이벤트가 하나도 없다면 혜택 내역 "없음"으로 보여 주세요.
  - 혜택 내역에 여러 개의 이벤트가 적용된 경우, 출력 순서는 자유롭게 출력해주세요.
- 적용된 이벤트가 하나도 없는 경우는 아래 예시를 참고해 주세요.

```
안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.
12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)
26
주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)
타파스-1,제로콜라-1
12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!

<주문 메뉴>
타파스 1개
제로콜라 1개

<할인 전 총주문 금액>
8,500원

<혜택 내역>
없음

<총혜택 금액>
0원

<할인 후 예상 결제 금액>
8,500원
```

#### 기대하는 '12월 이벤트 플래너'의 예시 모습

```
안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.
12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)
3
주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)
티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1
12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!

<주문 메뉴>
티본스테이크 1개
바비큐립 1개
초코케이크 2개
제로콜라 1개

<할인 전 총주문 금액>
142,000원

<혜택 내역>
크리스마스 디데이 할인: -1,200원
평일 할인: -4,046원

<총혜택 금액>
-31,246원

<할인 후 예상 결제 금액>
135,754원
```

기대하는 예시를 한 개만 들어서 설명했지만, 더 다양한 사례가 있을 것으로 예상됩니다.  
개발이 완료되는 대로 공유해 주시면, 비즈니스팀에서 1주일간 테스트를 진행하고 오픈할 예정입니다.  
1주일 뒤에 예정된 '12월 이벤트 플래너' 개발 회의에서 더 자세한 얘기를 해보면 좋겠습니다.

감사합니다. :)

---

## 🎯 프로그래밍 요구 사항

- Node.js 18.17.1 버전에서 실행 가능해야 한다. **Node.js 18.17.1에서 정상적으로 동작하지 않을 경우 0점 처리한다.**
- 프로그램 실행의 시작점은 `App.js`의 `run` 메서드이다. 아래와 같이 프로그램을 실행시킬 수 있어야 한다.

**예시**

```javascript
const app = new App();
app.run();
```

- `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
- [JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)을 지키면서 프로그래밍 한다
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 한다. **테스트가 실패할 경우 0점 처리한다.**
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
  - 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- else를 지양한다.
  - 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
  - 때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
- 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLineAsync, Console.print) 로직에 대한 단위 테스트는 제외한다.
  - 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.
- 사용자가 잘못된 값을 입력할 경우 `throw`문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다.

### 추가된 요구 사항

- 아래에 제공되는 `InputView`, `OutputView` 객체를 활용해 구현한다.
  - 입력과 출력을 담당하는 객체를 별도로 구현한다.
  - `InputView`, `OutputView`의 파일 경로는 변경할 수 있다.
  - `InputView`, `OutputView`의 메서드의 이름과 인자는 필요에 따라 추가하거나 변경할 수 있다.
  - 값 출력을 위해 필요한 메서드를 추가할 수 있다.
  ```javascript
  export default InputView = {
    async readDate() {
      const input = await Console.readLineAsync(
        "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)"
      );
      // ...
    },
    // ...
  };
  ```
  ```javascript
  export default OutputView = {
    printMenu() {
      Console.print("<주문 메뉴>");
      // ...
    },
    // ...
  };
  ```

### 라이브러리

- `@woowacourse/mission-utils`에서 제공하는 `Console` API를 사용하여 구현해야 한다.
  - 사용자의 값을 입력 받고 출력하기 위해서는 `Console.readLineAsync`, `Console.print`를 활용한다.

---

## ✏️ 과제 진행 요구 사항

- 미션은 [javascript-christmas-6](https://github.com/woowacourse-precourse/javascript-christmas-6) 저장소를 비공개 저장소로 생성해 시작한다.
- **기능을 구현하기 전 `docs/README.md`에 구현할 기능 목록을 정리**해 추가한다.
- **Git의 커밋 단위는 앞 단계에서 `docs/README.md`에 정리한 기능 목록 단위**로 추가한다.
  - [커밋 메시지 컨벤션](https://gist.github.com/stephenparish/9941e89d80e2bc58a153) 가이드를 참고해 커밋 메시지를 작성한다.
- 과제 진행 및 제출 방법은 [프리코스 과제 제출](https://docs.google.com/document/d/1cmg0VpPkuvdaetxwp4hnyyFC_G-1f2Gr8nIDYIWcKC8/edit?usp=sharing) 문서를 참고한다.
