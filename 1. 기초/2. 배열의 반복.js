// for문을 같이 사용해서 배열의 요소를 반복적으로 불러올 수 있음 (자주 사용)

// 기본적인 for문
const arr = [1, 2, 3, 4, 5];

// 모든 배열 요소에 1씩 더하기
function arrPlusFn(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
  }

  return arr;
}

arrPlusFn(arr); // [2, 3, 4, 5, 6]
