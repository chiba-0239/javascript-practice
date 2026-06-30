/*=====================
入力
===================================*/

const price = Number(prompt("商品の値段を入力して下さい。"));
const tax = Number(prompt("消費税率を入力してください。(例:8、10)")) / 100;
const member = prompt("会員ですか？（はい／いいえ）");
/*=====================
入力値チェック
===================================*/
if (isNaN(price) || isNaN(tax)) {
  console.log("数字を入力してください。");
} else {
  /*=====================
  税込価格計算
  ===================================*/
  function calculateTax(price,tax){
    return price + (price * tax);
  }

  const total = calculateTax(price,tax);
  const discountTotal = applyMemberDiscount(total, member);

  /*=====================
  会員割引
  ===================================*/
  function applyMemberDiscount(total, member){
    if(member === "はい"){
      return total * 0.95;
    }
    return total;
  }


  /*=====================
  送料計算
  ===================================*/

  function calculateShipping(total){
    if (total>=1000) {
      return 0;
    } else if (total>=500) {
      return 300;
    } else {
      return 500;
    }
  }
  const shipping = calculateShipping(discountTotal);
  if (shipping === 0) {
    console.log("送料無料です。")
  } else {
    console.log("送料は" + shipping + "円です。");
  }
  
}