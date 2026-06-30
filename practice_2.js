const products = [
  { id: 1, name: "ノートPC", stock: 8, price: 98000 },
  { id: 2, name: "マウス", stock: 35, price: 2500 },
  { id: 3, name: "キーボード", stock: 12, price: 4800 },
  { id: 4, name: "モニター", stock: 3, price: 28000 },
  { id: 5, name: "USBメモリ", stock: 50, price: 1500 }
];

//在庫10個未満の商品を抽出
const product10stock = products
.filter (product => 10 > product.stock);

console.log(product10stock);

//商品名だけ取得
const product10Name = product10stock
.map (product => product.name);

console.log(product10Name);

//在庫金額（stock × price）の合計を求める
const product10price = product10stock
.map (product => product.stock * product.price)
.reduce((sum,subtotal) => {
  return sum + subtotal;
},0)

console.log(product10price);