function calculateTax (price,tax) {
  return price + (price * tax)
};

function applyMemberDiscount (total,member) {
  if (member === "はい") {
    return total * 0.95;
  } else {
    return total;
  }
};

function calculateShipping (total) {
  if (total >=1000) {
    return 0;
  } else if(total >= 500) {
    return 300;
  } else {
    return 500;
  }
}

//商品価格入力
const price = Number(prompt("価格を入力して下さい。"));
//消費税入力
const tax = Number(prompt("税率を入力して下さい。例：8%,10%"))/100;
//入力値チェック
if (isNaN (price) || isNaN(tax)) {
  console.log("数字を入力して下さい。");
} else {
  //税込価格計算
  const total = calculateTax (price,tax);
  //会員判定
  const member = prompt("会員ですか？はい/いいえ");
  //会員5％割引
  const finalTotal = applyMemberDiscount(total,member);
  console.log("合計金額は"+ finalTotal.toFixed(2)+"円です。");
  //送料計算
  const shipping = calculateShipping(finalTotal);
  //合計金額表示
  if (shipping === 0) {
    console.log("送料無料です。")
  } else {
    console.log("送料は"+ shipping + "円です。")
  }
}