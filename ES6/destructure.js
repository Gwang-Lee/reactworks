// 배열 구조 분해 할당
const arr = [1, 2];
console.log(arr[0]); // 1
console.log(arr[1]); // 2

const [x, y] = arr;
console.log(`x = ${x}`);
console.log(`y = ${y}`);

const product = {
    pname: "무선키보드",
    price: 30000
}
console.log(product.pname);
console.log(product.price);

const {name, price} = product;
console.log(`제품명: ${name}`);
console.log(`가격: ${price}`);