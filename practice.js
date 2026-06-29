//演習問題
//物流倉庫の在庫データがあります。

const products = [
  { id: 1, name: "ノートPC", stock: 8, price: 98000 },
  { id: 2, name: "マウス", stock: 35, price: 2500 },
  { id: 3, name: "キーボード", stock: 12, price: 4800 },
  { id: 4, name: "モニター", stock: 3, price: 28000 },
  { id: 5, name: "USBメモリ", stock: 50, price: 1500 }
];

//問1 在庫数(stock)が10個未満の商品だけを抽出してください。
const stock10 = products
.filter(product => product.stock < 10)

console.log(stock10);

//問2 抽出した商品の商品名(name)だけを表示してください。
const stock10Name = stock10.map(product => product.name);

console.log(stock10Name);

//問3在庫数が10個未満の商品について、**在庫金額（stock × price）**を計算し、その合計を求めてください。

const stock10Price = stock10
.map(product => product.stock * product.price)
.reduce((sum,subtotal) =>{
  return sum + subtotal
},0);

console.log(stock10Price);