// Events and Event handling


// console.log("Hello world")


// const btn = document.querySelector('button');


// btn.onclick = function() {
//     console.log("button clicked first time")
// }

// btn.onclick = function() {
//     console.log("button clicked second time")
// }



// const btn = document.querySelector('button')


// // btn.addEventListener('click', () => console.log("click first time"))
// // btn.addEventListener('click', () => console.log("click second time"))


// btn.addEventListener('mouseover', function() {
//     btn.innerText = 'Button Hovered'
// })

// btn.addEventListener('mouseout', function() {
//     btn.innerText = 'Button '
// })


// const btn = document.querySelector('button')

// btn.addEventListener('mouseover', function() {
//     console.log('Mouse over button')
//     const height = Math.floor(Math.random() * window.innerHeight)
//     const width = Math.floor(Math.random() * window.innerWidth)
//     btn.style.left = `${width}px`
//     btn.style.top = `${height}px`


// })


// btn.addEventListener('click', function() {
//     btn.innerText = "You clicked the button"
//     document.body.style.backgroundColor = 'green'
// })


// const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'voilet']

// const container = document.querySelector('.container')

// const printColor = function(box) {
//     console.log(document.body.style.backgroundColor)
// }

// const changeColor = () => {
//     const h1 = document.querySelector('h1')
//         // h1.style.color = this.style.backgroundColor
//         // h1.innerText = this.style.color + 'selected'
//     h1.innerText = 'Selected Color: ' + document.body.style.backgroundColor

// }

// for (let color of colors) {
//     const box = document.createElement('div')

//     box.style.backgroundColor = color
//     box.classList.add('box')

//     container.append(box)

//     box.addEventListener('click', printColor)
//     box.addEventListener('click', changeColor)



// }


// const colors = ['red', 'orange', 'yellow', 'green',
//     'blue', 'purple', 'indigo', 'violet'
// ]

// const printColor = function() {
//     console.log(this.style.backgroundColor)
// }

// const container = document.querySelector('.container')
// const span = document.querySelector('.span')
// span.innerText = 'Select your color'



// for (let color of colors) {
//     const box = document.createElement('div')

//     box.style.backgroundColor = color
//     box.classList.add('box')
//     container.append(box)

//     box.addEventListener('click', function() {
//         console.log('box clicked')
//         document.body.style.backgroundColor = color;
//         span.innerText = 'selected color: ' + color;
//     })
//     box.addEventListener('click', printColor)
// }

// /////////////////////////////////////////////////////


// const btn = document.querySelector('button')

// btn.addEventListener('click', (e) => {
//     console.log(e)
// })


// const input = document.querySelector('input')

// input.addEventListener('keydown')



// input.addEventListener('keyup', (e) => {
//     console.log(e.key)
// })

// const p = document.querySelector('p')
// input.addEventListener('keypress', e => {
//     // console.log(e.key)
//     console.log(e.target.value)
//     p.innerText = e.target.value
// })


const form = document.querySelector('form')
const ul = document.querySelector('ul')


form.addEventListener('submit', e => {
    e.preventDefault();


    const delBtn = document.createElement('button')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    delBtn.innerText = 'remove'


    const li = document.createElement('li')
    li.innerText = e.target.elements.task.value
    li.append(checkbox)
    li.append(delBtn)

    ul.append(li)

    e.target.elements.task.value = "";


    delBtn.addEventListener('click', e => {
        li.remove()
    })


    li.addEventListener('mouseover', e => {
        e.target.style.cursor = 'pointer';


    })

})