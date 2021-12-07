// // const btn = document.querySelector('button');

// // btn.onclick = function () {
// //   console.log('Hello World');
// // };

// // btn.onclick = function () {
// //   console.log('Hello Universe');
// // };

// // Events
// // btn.addEventListener('click', function () {
// //   console.log('Hello World');
// // });

// // btn.addEventListener('mouseover', function () {
// //   console.log('Hello Universe');
// // });

// // window.addEventListener('scroll', () => {
// //   console.log('I was scrolled!');
// // });

// // btn.addEventListener('mouseenter', () => {
// //   console.log('pointer not touching');
// // });

// // const btn = document.querySelector('button');

// // btn.addEventListener('mouseover', function () {
// //   const height = Math.floor(Math.random() * window.innerHeight);
// //   const width = Math.floor(Math.random() * window.innerWidth);

// //   btn.style.left = `${width}px`;
// //   btn.style.top = `${height}px`;
// // });

// // btn.addEventListener('click', () => {
// //   btn.innerText = 'YOU WON!';
// //   document.body.style.backgroundColor = 'green';
// // });

// // const colors = [
// //   'red',
// //   'orange',
// //   'yellow',
// //   'green',
// //   'blue',
// //   'purple',
// //   'indigo',
// //   'violet',
// // ];

// // const printColor = function () {
// //   console.log(this.style.backgroundColor);
// // };

// // const container = document.querySelector('#boxes'); // Select the container
// // const span = document.querySelector('span');

// // // Loop to add each color as a background color (create as many boxes as length of colors)
// // for (let color of colors) {
// //   const box = document.createElement('div'); // Create a square box

// //   box.style.backgroundColor = color; // Style the box
// //   box.classList.add('box'); // Add a class

// //   container.append(box); // Append box to container

// //   // Add event listener to the box
// //   box.addEventListener('click', function () {
// //     // console.log('Box clicked!')
// //     document.body.style.backgroundColor = color;
// //     span.innerText = color;
// //   });

// //   box.addEventListener('click', printColor);
// // }

// //////////////////////////////////

// // const btn = document.querySelector('button');

// // btn.addEventListener('click', (event) => {
// //   console.log(event);
// // });

// // const input = document.querySelector('input');

// // input.addEventListener('keydown', (e) => {
// //   // console.log(e);
// //   console.log(e.key, e.ctrlKey, e.altKey);
// // });

// // input.addEventListener('keyup', (e) => {
// //   // console.log(e);
// //   console.log(e.key, e.ctrlKey, e.altKey);
// // });

// // input.addEventListener('keypress', (e) => {
// //   // console.log(e);
// //   console.log(e.key, e.ctrlKey, e.altKey);
// // });

// // const p = document.querySelector('p');

// // input.addEventListener('keypress', (e) => {
// //   // console.dir(e.target.value);
// //   p.innerText = e.target.value;
// // });

const tasks = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const li = document.createElement('li');
    li.innerText = e.target.elements.task.value;
    li.append(checkbox);

    ul.append(li);
    e.target.elements.task.value = '';

    li.addEventListener('click', (e) => {
        e.target.remove();
    });

    li.addEventListener('mouseover', (e) => {
        e.target.style.cursor = 'pointer';
    });
});

//////////////////////////////
// const multiply = (x, y) => x * y;

// const square = (x) => multiply(x, x);

// const rightTriangle = (a, b, c) => {
//   return square(a) + square(b) === square(c);
// };

// // rightTriangle(3, 4, 5);

// console.log('The first log');
// // alert('An interruption in between');

// setTimeout(() => console.log('Hello World'), 5000);

// console.log('The last log');

// const btn = document.querySelector('button');

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//           setTimeout(() => {
//             btn.style.transform = `translateX(600px)`;
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const willGetAPlaystation = new Promise((resolve, reject) => {
//     const randomNum = Math.random();

//     if (randomNum > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// willGetAPlaystation
//     .then(() => console.log('Promise fulfilled!'))
//     .catch(() => console.log('Promise broken'));