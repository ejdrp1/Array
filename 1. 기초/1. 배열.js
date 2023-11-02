/* 
  ㅇ 배열
  1. 순서가 있는 값을 의미함
  2. 배열에 들어있는 값을 요소(element)라고 함
  3. 배열의 순서는 인덱스(index)라고 함
  4. 배열의 순서는 0부터 시작함 (0번째 index, 1번째 index, 2번째 index...)
  5. 배열 정의는 대괄호 '[]'(square bracket)로 함
  6. 배열 안의 각각의 요소(element)는 쉼표로 구분함
*/

// ㅇ 배열에 접근하는 방법
// 조회와 변경 - index를 사용함

// 배열 생성
const arr = [1, 2, 3, 4, 5];

// 배열 조회 (2번째 index, 4번째 index)
arr[2];
arr[4];
console.log(arr[2], arr[4]); // 3 5

// 배열 변경 (3번째 index의 값을 200으로 변경)
arr[3] = 200;
console.log(arr[3]); // 200
console.log(arr); // [1, 2, 3, 200, 5]
