const player = [
  "드록바",
  "램파드",
  "존 테리",
  "체흐",
  "아자르",
  "애슐리 콜",
  "이바노비치",
  "개리 케이힐",
  "다비드 루이스",
  "티아구 실바",
  "아스필리쿠에타",
  "존 오비 미켈",
  "하미레스",
  "윌리안",
  "페드로",
  "토레스",
  "은골로 캉테",
  "리스 제임스",
  "벤 칠웰",
  "코바치치",
  "루카쿠",
  "마운트",
  "크리스텐센",
];

// 1. 감독이 모든 선수를 호출했습니다.
for (let i = 0; i < player.length; i++) {
  console.log(player[i]);
}

// // 2. 코치가 모든 선수를 호출했습니다.
// player.forEach((el) => {
//   console.log(el);
// });

// 3. 선수들의 상태가 배열인가요?
console.log(Array.isArray(player));

// 4. 선수단에 '램파드' 선수가 몇 번째에 있습니까?
console.log(player.indexOf("램파드"));

// 5. 선수단에 '자바스크립트' 라는 선수가 있습니까?
console.log(player.includes("자바스크립트"));

// 6. 선수단의 길이는 얼마입니까?
console.log(player.length);

// 7. 선수단에 방해적인 영향력이 있는 선수들을 방출해야 합니다. (선수 명단 : 루카쿠, 마운트, 크리스텐센)
console.log(player.slice(20, 3));

// 8. 신인 선수가 입단했습니다. 환영합니다. 맨 앞으로 나와주세요.
console.log(player.unshift("자바스크립트"));

// 9. 신인 선수를 임대를 보내는 것을 추천합니다. 팀을 떠나 다른 팀으로 임대 이적 시켜주세요.
console.log(player.shift("자바스크립트"));

// 10. 신인 선수가 임대에서 복귀했습니다. 선수단에 포함시켜주세요.
console.log(player.push("자바스크립트"));

// 11. 신인 선수가 팀의 역량이 부족한 것 같습니다. 방출시켜주세요.
console.log(player.pop("자바스크립트"));

// 12. 2군 선수 명단을 등록해주세요.
const subPlayer = "카사데이 허친슨 워싱턴";

// 13. 2군 선수 명단 등록이 잘못 입력되었습니다. 수정해주세요.
console.log(subPlayer.split(" "));

// 14. 선착순 2명 메로나
console.log(subPlayer.split(" ", 2));

// console.log(player);
// console.log(subPlayer);
