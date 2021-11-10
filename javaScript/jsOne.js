// for (let i = 0; i < 10; i++) {
//   // console.log(i);
//   console.log(`${i}: Hello World`);
// }

// for (let num = 1; num <= 10; num++) {
//   console.log(`${num}*${num}=${num * num}`);
// }

// for (let i = 50; i >= 0; i -= 5) {
//   console.log(i);
// }

// for (let i = 20; i >= 0; i--) {
//   console.log(i);
// }

// const nums = [12, 34, 56, 34, 78, 54, 23, 12];

// for (let i = 0; i <= nums.length; i++) {
//   console.log(`The value at index ${i} is ${nums[i]}`);
// }

// const movies = [
//   { movieName: 'Inception', rating: 3.8 },
//   { movieName: 'Avengers', rating: 3.4 },
//   { movieName: 'Iron Man', rating: 2.9 },
// ];

// for (let c = 0; c < movies.length; c++) {
//   let movie = movies[c];
//   console.log(movie.movieName + '\n\n' + c);
// }

// const movies = { movieName: 'Inception', rating: 3.8 };

// for (let c = 0; c < 2; c++) {
//   console.log(movies[c]);
// }

// const arr = [1, 2, 3];

// arr[-1]

// {0: 1, 1: 2, 2: 3}

// const word = 'Hello World';
// let reversedWord = '';

// for (let i = word.length - 1; i >= 0; i--) {
//   // console.log(word[i]);
//   reversedWord += word[i];
// }

// console.log(reversedWord);

// for (let i = 0; i < 10; i++) {
//   console.log(`OUTER LOOP: ${i}`);

//   for (let j = 0; j < 10; j++) {
//     console.log(`   INNER LOOP: ${j}`);
//   }
// }

// const gameBoard = [
//   [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ],
//   [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ],
//   [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ],
//   [
//     [ , 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ],
// ];

// for (let i = 0; i < gameBoard.length; i++) {
//   for (let j = 0; j < 4; j++) {
//     console.log(gameBoard[i][j]);
//   }
// }

// const vals = [];

// for (let i = 0; i < 5; i++) {
//   let random = Math.floor(Math.random() * 100) + 1;
//   vals.push(random);
// }

// console.log(vals);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

// console.log(i);

// const randomNum = Math.floor(Math.random() * 5000) + 1; // 33

// let guess = Math.floor(Math.random() * 5000) + 1; // 33

// while (guess !== randomNum) {
//   console.log(`You guessed ${guess}. Random number was ${randomNum}`);

//   guess = Math.floor(Math.random() * 5000) + 1;
// }

// console.log(
//   `You guess was ${guess}. Random number was ${randomNum}. Good job.`
// );

// const target = Math.floor(Math.random() * 100) + 1;
// let guess = Math.floor(Math.random() * 100) + 1;

// while (guess !== target) {
//   if (guess === 13) {
//     console.log('13 is an unlucky number.\nBreaking out of this loop.');
//     break; // manually break out of the loop
//   }

//   console.log(`Target: ${target} | Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 100) + 1;
// }

// console.log(`\nGame over!\nTarget: ${target} | Guess: ${guess}.`);

// const target = Math.floor(Math.random() * 100) + 1;
// let guess = Math.floor(Math.random() * 100) + 1;

// // true -> loop forever
// while (true) {
//   console.log(`Target: ${target} | Guess: ${guess}`);

//   if (target === guess) {
//     break; // break out of the loop when condition is true
//   }

//   guess = Math.floor(Math.random() * 100) + 1;
// }

// console.log(`\nGame over!\nTarget: ${target} | Guess: ${guess}.`);

// const nums = [12, 123, 123, 423, 54, 56, 456345, 233, 1212];

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// for (let num of nums) {
//   console.log(num);
// }

// let categories = [
//   'fashion',
//   'electronics',
//   'mobiles',
//   'books',
//   'toys',
//   'groceries',
// ];

// for (let i = 0; i < categories.length; i++) {
//   console.log(categories[i]);
// }

// for (let category of categories) {
//   console.log(category);
// }

// for (let char of 'hello') {
//   console.log(char.toUpperCase());
// }

// const matrix = [
//   [1, 4, 7],
//   [9, 7, 2],
//   [9, 4, 6],
// ];

// let total = 0;

// for (let row of matrix) {
//   for (let num of row) {
//     console.log(num);
//     total += num;
//   }
// }

// console.log(total);

// const cats = ['fashion', 'mobiles', 'books'];
// const prods = ['tshirt', 'samsung', '1984'];

// for (let i = 0; i < cats.length; i++) {
//   console.log(cats[i], prods[i]);
// }

// const productPrices = {
//   Apple: 80000,
//   OnePlus: 50000,
//   Samsung: 90000,
// };

// // for (let item of Object.keys(productPrices)) {
// //   console.log(productPrices[item]);
// // }

// for (let item in productPrices) {
//   console.log(productPrices[item]);
// }

// function greet() {
//   console.log('Hello World');
//   console.log('Goodbye World!');
// }

// // greet();
// // greet();

// for (let i = 0; i < 50; i++) {
//   greet();
// }

// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }

// function throwDice() {
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
// }

// throwDice();

// let fullName = 'John Doe';

// function greet(name, message) {
//   console.log(`${message}, ${name}`);
// }

// // greet('Jack Doe');
// // greet('Jackie Chan');

// greet('Jack Ma', 'Hello');

// function add(a, b) {
//   console.log(a + b);
// }

// add(10, 20);
// add();

// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }

// function throwDice(times) {
//   for (let i = 0; i < times; i++) {
//     rollDie();
//   }
// }

// throwDice(10);

// 'john'.toUpperCase();

// function add(x, y) {
//   console.log(x + y);
// }

// add(10, 5);

// let score = 100 / 4 + 5;

// let newScore = score + score * 2;

// console.log(newScore / score);

// function add(x, y) {
//   // console.log('Hello World');
//   return x + y;
// }

// let score = add(10, 8);

// // console.log(add(10, 5));

function square(num) {
    if (typeof num === 'number') {
        return num * num;
    } else {
        return 'Please provide a number';
    }
}

console.log(square(12334));