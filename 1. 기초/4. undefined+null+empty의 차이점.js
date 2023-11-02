// 경우 1)
arr = [, 2, 3, 4, 5]; // arr ==> [empty, 2, 3, 4, 5];

// 경우 2)
arr = []; // arr ==> [empty, empty, 3];
arr[2] = 3; // arr ==> [empty, empty, 3];

// ★ empty는 배열에 선언은 되어있지만
// 그 index 자리에 아무것도 없어서 해당 index 값이 존재하지 않음 (건너띔)
// 그렇지만 출력값은 undefined임

// undefined, null에는 index 자리에 값이 각각 있었음
// 그렇지만 undefined와 null의 차이는 null 의도적으로 null이라는 것이 들어있음
// 하지만 undefined는 할당한 값이 없음
// undefined와 empty의 차이는 index 자리를 console.log로 보았을 때 출력되는지 여부임

// 실험 1)
arr = [];
arr["name"] = "banana";
// 배열에 객체의 키와 값을 할당할 수 있음
// 결과값은 ['name' : 'banana'];
// 왜냐하면 배열도 객체이기 때문임
// 배열은 객체의 특수한 한 형태임

// 실험 2)
// arr 안에 obj 넣고 obj 안에 arr 넣으면?
// 결과는 무한 반복(참조)
