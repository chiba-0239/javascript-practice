const price = Number(prompt("商品の値段を入力して下さい。"));
const tax = Number(prompt("消費税率を入力してください。(例:8、10)")) / 100;
const member = prompt("会員ですか？（はい／いいえ）");

if (isNaN(price) || isNaN(tax)) {
  console.log("数字を入力してください。");
} else {
let total = price + (price * tax);

if (member ==="はい") {
  total = total * 0.95;
}

console.log("税込価格は" + total.toFixed(2) + "円です。" );

if (total>=1000) {
  console.log("送料無料です。");
} else if (total>=500) {
  console.log("送料300円です。");
} else {
  console.log("送料500円です。");
}
}

for (let i = 1; i<=10; i++){ 
  if (i % 2 === 0){ 
    console.log(i);
   }
 }

 for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    console.log("★");
  } else {
    console.log(i);
  }
}

// ===============================
// while文
// ===============================

let i = 1;

while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

console.log("----------------");

// ===============================
// switch文
// ===============================

const score = 2;

switch (score) {
  case 1:
    console.log("金メダル");
    break;

  case 2:
    console.log("銀メダル");
    break;

  case 3:
    console.log("銅メダル");
    break;

  default:
    console.log("入賞");
}

console.log("----------------");

// ===============================
// 関数（function）
// ===============================

function hello() {
  console.log("こんにちは");
}

hello();
hello();
hello();

console.log("----------------");

function bye() {
  console.log("さようなら");
}

bye();
// ===============================
// 関数（引数）
// ===============================

function hello(name) {
  console.log("こんにちは " + name);
}

hello("友太");
hello("先生");
hello("ChatGPT");


// ===============================
// 関数（戻り値：return）
// ===============================

function add(a, b) {
  return a + b;
}

const result = add(2, 4);

console.log(result);


// ===============================
// returnは計算結果を返せる
// ===============================

function multiply(a, b) {
  return a * b;
}

const answer = multiply(3, 5);

console.log(answer);


// ===============================
// returnは直接console.logでも使える
// ===============================

console.log(add(3, 7));


// ===============================
// returnの値はさらに計算にも使える
// ===============================

const total = add(10, 20) * 2;

console.log(total);

```javascript
// =========================================
// Day10 JavaScript学習
// 関数（function）・引数・戻り値（return）
// =========================================

console.log("===== 関数の基本 =====");

function greet() {
  console.log("こんにちは");
}

greet();

// =========================================

console.log("===== 引数 =====");

function greetName(name) {
  console.log("こんにちは " + name);
}

greetName("友太");

// =========================================

console.log("===== return =====");

function add(a, b) {
  return a + b;
}

console.log(add(3, 7));

// =========================================

console.log("===== 2倍する関数 =====");

function double(num) {
  return num * 2;
}

console.log(double(5));
console.log(double(10));

// =========================================

console.log("===== メッセージを返す =====");

function greet(name) {
  return "こんにちは " + name;
}

const message = greet("友太");

console.log(message);

// =========================================

console.log("===== 足し算結果を変数へ =====");

function addNumber(a, b) {
  return a + b;
}

const answer = addNumber(3, 5);

console.log(answer);
console.log(answer + 10);

// =========================================

console.log("===== 二乗 =====");

function square(num) {
  return num * num;
}

const x = square(4);

console.log(x);
console.log(square(6));

// =========================================

console.log("===== 配列への準備 =====");

// Day11へ続く
```
```javascript
// =========================================
// Day11 JavaScript学習
// 配列・オブジェクト・filter・map・reduce
// =========================================

console.log("===== filter 基本 =====");

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

// =========================================

console.log("===== map 基本 =====");

const users = ["田中", "佐藤", "鈴木"];

const usersWithSan = users.map(user => user + "さん");

console.log(usersWithSan);

// =========================================

console.log("===== reduce 基本 =====");

const scores = [1, 2, 3, 4, 5];

const sum = scores.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);

// =========================================

console.log("===== オブジェクト =====");

const user = {
  name: "佐藤",
  age: 30,
  active: true
};

console.log(user);

// =========================================

console.log("===== オブジェクト配列 =====");

const userList = [
  {
    name: "佐藤",
    age: 30,
    active: true
  },
  {
    name: "田中",
    age: 25,
    active: false
  },
  {
    name: "鈴木",
    age: 35,
    active: true
  }
];

console.log(userList);

// =========================================

console.log("===== filter =====");

// active が true のユーザーだけ取得

const activeUsers = userList.filter(user => user.active);

console.log(activeUsers);

// =========================================

console.log("===== map =====");

// 名前だけ取得

const names = userList.map(user => user.name);

console.log(names);

// =========================================

console.log("===== filter + map =====");

// active のユーザーの名前だけ取得

const activeNames = userList
  .filter(user => user.active)
  .map(user => user.name);

console.log(activeNames);

// =========================================

console.log("===== 実務演習 =====");

// 30歳以上 かつ active が true のユーザー名だけ取得

const result = userList
  .filter(user => user.age >= 30 && user.active)
  .map(user => user.name);

console.log(result);

// =========================================
```
