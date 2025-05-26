## 메모
- 할일을 적어두고, 일반 TDD 주기를 진행함
- 진행하면서 미래 해야할 일은 메모에 작성

## 일반 TDD 주기
1. 테스트를 작성
   - 마음속에 있는 오퍼레이션이 코드에 어떤식으로 나타나길 원하는지 상상하며 이야기를 써내려감
   - 원하는 인터페이스를 개발, 올바른 답을 얻기 위한 모든 요소를 포함시킴
2. 실행 가능하게 만듦
   - 테스트 통과를 만드는 것이 제일 우선
   - 깜끔하고 단순한 해법이 있다면 입력, 만약 몇 분 정도 걸릴 거 같으면 메모 뒤 원래 문제로 돌아옴
3. 올바르게 만듦
   - 무작정 돌아가게 만들었던 코드들을 올곧은 소프트웨어 정의대로 되돌아와, 중복을 제거하고 테스트를 통과시킴

## 책용어
1. 가짜로 구현하기
   - 최대한 빠르게 테스트를 통과하기 위해 정답이 아닌 가짜 정답을 구현하는 방법
   - 상수를 이용해 테스트를 통과하도록 만듦 (이후 변수로 리팩토링)
   ```java
   @Test
   public void 곱하기테스트() {
   // given
   
       // when
       final int result = multiply(2, 3);
       
       // then
       assertThat(result).isEqualTo(6);
   }
   ```
2. 삼각 측량법
   - 값이 다른 여러 테스트를 작성하고, 이를 일반화하여 정답을 구현하는 방법
   - 테스트 예시가 2개 이상일 때에만 추상화를 진행해야함
   - 저자는 어떻게 리팩토링 해야하는지 전혀 감이 안올 때 사용
   ```java
   @Test
   public void 곱하기테스트() {
   // given

   // when
   final int result1 = multiply(2, 3);
   final int result2 = multiply(4, 7);

   // then
   assertThat(result1).isEqualTo(6);
   assertThat(result2).isEqualTo(28);
   }
   ```
3. 명백하게 구현하기
   - 정답을 바로 구현하는 방법
   - 가짜 구현이나 삼각 측량 방법을 사용하지 않고 바로 정답을 구현하는 방법
   ```java
   public int multiply(final int num1, final int num2) {
    return num1 * num2;
   }
   ```