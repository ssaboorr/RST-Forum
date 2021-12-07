const colors = ['red', 'orange', 'yellow', 'green',
    'blue', 'purple', 'indigo', 'violet'
]

const printColor = function() {
    console.log(this.style.backgroundColor)
}

const container = document.querySelector('.container')
const span = document.querySelector('.span')
span.innerText = 'Select your color'



for (let color of colors) {
    const box = document.createElement('div')

    box.style.backgroundColor = color
    box.classList.add('box')
    container.append(box)

    box.addEventListener('click', function() {
        console.log('box clicked')
        document.body.style.backgroundColor = color;
        span.innerText = 'selected color: ' + color;
    })
    box.addEventListener('click', printColor)
}