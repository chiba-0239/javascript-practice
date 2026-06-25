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