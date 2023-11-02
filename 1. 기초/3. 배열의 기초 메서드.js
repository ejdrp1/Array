// 1. 변수, 데이터 또는 특정 값이 배열인지 판단
Array.isArray(); // 인자안에 들어간 변수, 데이터, 특정 값이 배열이면 true, 아니면 false를 반환함

// 2. 변수, 데이터 또는 특정 값이 포함되어 있는 확인
indexOf(); // ex) arr.indexOf('banana');
//              배열에 banana라는 데이터가 들어있는 index 번호를 반환함 (찾을 수 없다면 -1을 반환함)
includes(); // ex) arr.includes('banana');
//              배열에 banana라는 데이터가 들어있으면 true를, 없다면 false를 반환함 (대소문자를 구분함)

// 3. 배열의 요소(element)의 길이를 number type으로 출력
length; // ex) arr.length;

// 4. 배열의 요소(element)의 부분을 잘라서 출력
slice(); // 기본으로 인자 두 개를 받음
//          인자를 하나만 받을 시 자동으로 두번째 인자는 배열의 길이 즉, 배열의 마지막 index + 1이 들어감

// 5. 배열의 요소(element) 추가 및 삭제
unshift(); // 배열의 맨 앞에 element 추가
shift(); // 배열의 맨 앞에 element 삭제
push(); // 배열의 맨 뒤에 element 추가
pop(); // 배열의 맨 뒤에 element 삭제

// 6. 문자열과 배열의 타입 변환
split(); // 문자열을 split 인자로 구분하여 배열로 변경함
join(); // 문자열 요소를 가지는 배열을 join 인자로 구분하여 문자열로 변경함

// ★★★★★ 주의사항 ★★★★★
// 1. 메서드를 사용한 상태의 값과 메소드를 사용하고 난 상태가 다르지 않은 메서드
immutable;
Array.prototype.slice();

// 2. 메서드를 사용한 상태의 값과 메서드를 사용하고 난 상태가 다른 메서드
mutable;
pop, shift;
push();
unshift();
