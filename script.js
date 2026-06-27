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