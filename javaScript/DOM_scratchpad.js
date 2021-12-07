// // // console.log('Hello World');

// // // console.dir(window.document.body.children[0]);

// // // setTimeout(() => {
// // //   window.document.body.children[0].innerText = 'John Doe';
// // // }, 5000);

// // // const p = document.getElementById('para');

// // // // console.dir(p.innerText);

// // // const ps = document.getElementsByTagName('p');
// // // // console.log(ps);

// // // for (let para of ps) {
// // //   para.innerText = 'CHANGED!!!';
// // //   // console.log(para.innerText);
// // // }

// // // const blueTexts = document.getElementsByClassName('blue-text');

// // // console.log(blueTexts);

// // // const ul = document.getElementsByTagName('ul')[0];

// // // const imps = ul.getElementsByClassName('imp');

// // // console.log(imps);

// // // const p = document.querySelector('p');
// // // const para = document.querySelector('#para');
// // // const blueText = document.querySelector('.blue-text');

// // // const ps = document.querySelectorAll('p');
// // // // const para = document.querySelector('#para');
// // // const blueTexts = document.querySelectorAll('.blue-text');

// // // console.log(p, para, blueText);
// // // console.log(ps, blueTexts);

// // // const ful = document.querySelectorAll('.ful li.imp');

// // // console.log(ful);

// // const h1 = document.querySelector('h1');
// // console.log(h1.innerText);
// // // h1.innerText =

// // const ul = document.querySelector('ul');
// // ul.innerText = 'Hello World';

// // // console.log(ul.innerText);

// // console.log(document.body.innerText);

// // const p = document.querySelector('.special');

// // // console.log(p.innerText);
// // // console.log(p.textContent);

// // console.log(p.innerHTML);

// // const p = document.querySelector('p');

// // p.innerHTML =
// //   '<div><p>Hello World. <strong>This is</strong> some test message.</p></div>';

// // p.innerHTML += ' Hello World again.';

// // const img = document.querySelector('img');

// // console.log(img.src);
// // img.alt = 'This is the new alt info';

// // const h1 = document.querySelector('h1');
// // console.log(h1.className);

// // h1.id = 'HelloWorld';

// // h1.style = 'color: red';

// // console.log(h1.href);

// // const h1 = document.querySelector('h1');

// // console.log(h1.getAttribute('class'));
// // console.log(h1.getAttribute('hello'));

// // h1.setAttribute('id', 'impTitle');

// // const p = document.querySelector('p');
// // const li = document.querySelector('li');
// // const ul = document.querySelector('ul');

// // console.log(p.nextElementSibling.nextElementSibling);

// // console.log(p.parentElement);

// // console.log(li.parentElement.parentElement.parentElement);

// // console.log(p.nextElementSibling);
// // console.log(p.nextElementSibling.nextElementSibling.nextElementSibling);

// // console.log(ul.children);

// // for (let item of ul.children) {
// //   item.innerText = 'Changed!';
// // }

// // const h1 = document.querySelector('h1');

// // h1.style.color = 'red';
// // h1.style.textDecoration = 'underline';
// // h1.style.fontWeight = '300';

// // const lis = document.querySelectorAll('li');
// // const colors = ['red', 'yellow', 'green', 'orange', 'teal'];

// // for (let li of lis) {
// //   li.style.color = colors[Math.floor(Math.random() * colors.length)];
// //   li.style.fontSize = '20';
// //   li.style.fontWeight = 'bold';
// //   li.style.backgroundColor = 'black';
// //   li.style.fontFamily = 'Helvetica, sans-serif';
// //   li.style.border = '2px solid red';
// //   li.style.borderTopLeftRadius = '50px';
// // }

// // {color: 'red', fontSize: '20px'}
// // function addStyles(el, styles) {
// //   for (let key in styles) {
// //     el.style[key] = styles[key];
// //   }
// // }

// // const heading = document.querySelector('h1');

// // addStyles(heading, {
// //   color: 'green',
// //   fontSize: '30px',
// //   textDecoration: 'underline',
// // });

// // const heading = document.querySelector('h1');
// // heading.style.textDecoration = 'underline';
// // // console.log(heading.style.color);

// // const headingStyles = getComputedStyle(heading);
// // // headingStyles.textDecoration = 'underline';
// // console.log(headingStyles.textDecoration);

// // const heading = document.querySelector('h1');
// // // heading.className = 'blue-text red-text';

// // // heading.classList.add('purple-text');
// // // heading.classList.remove('blue-text');
// // heading.classList.toggle('blue-text');

// // const h1 = document.createElement('h1');
// // h1.innerText = 'Hello World';
// // h1.style.color = 'red';
// // h1.style.fontSize = '20px';
// // h1.classList.add('heading');

// // const p = document.createElement('p');
// // p.innerText = 'hello world this is some sample text';

// // const div = document.createElement('section');
// // div.style.padding = '20px';
// // div.style.border = '1px solid black';

// // div.appendChild(h1);
// // div.appendChild(p);

// // const root = document.querySelector('#root');

// // root.appendChild(div);

// // const ul = document.querySelector('.todos');

// // const li1 = document.createElement('li');
// // li1.innerText = 'Brand new task to complete';

// // const li2 = document.createElement('li');
// // li2.innerText = 'Another Task';
// // li2.classList.add('test-li');

// // ul.appendChild(li1);
// // ul.appendChild(li2);

// // const li3 = document.createElement('li');
// // li3.innerText = 'Brand new li. 3rd li.';

// // ul.insertBefore(li3, li2);

// // // ul.appendChild(li3);

// // const b = document.createElement('b');
// // b.innerText = 'HELLO WORLD';

// // const p = document.querySelector('p');

// // // p.insertAdjacentElement('beforebegin', b);
// // // p.insertAdjacentElement('afterbegin', b);
// // // p.insertAdjacentElement('beforeend', b);
// // p.insertAdjacentElement('afterend', b);

// const ul = document.querySelector('.todos');

// const li1 = document.createElement('li');
// li1.innerText = 'Brand new task to complete';

// const li2 = document.createElement('li');
// li2.innerText = 'Another Task';
// li2.classList.add('test-li');

// const li3 = document.createElement('li');
// li3.innerText = 'Third li';

// // ul.appendChild(li1);
// // ul.appendChild(li2);

// ul.append(li1, li2);

// ul.prepend(li3);

// ////////////////////

// ul.removeChild()

const ul = document.querySelector('.todos');

const li1 = ul.querySelector('li');
const li2 = li1.nextElementSibling;

ul.removeChild(li2);

li1.remove();