// -------------------Functions------------------------------------

// Program to print a text

// function greet() {
//     console.log("Hello World")
// }

// greet()


// function rollDie() {
//     let die = Math.floor(Math.random() * 6) + 1;
//     console.log(`Rolled: ${die}`)
// }

// // rollDie()


// function throwDice() {
//     rollDie()
// }

// throwDice()


// Funtions With params



// function greet(name) {
//     console.log(`Hello ${name}`)
// }


// greet('John Doe')


// function rollDie() {
//     let die = Math.floor(Math.random() * 6) + 1;
//     console.log(`Rolled: ${die}`)
// }


// function throwDice(times) {
//     for (let i = 0; i < times; i++) {
//         rollDie()
//     }
// }


// throwDice(3)

// function add(a, b) {
//     return a + b;
// }

// let result = add(3, 4)


// console.log(result)


// Function Expressions


// let square = function(num) { return num * num }


// console.log(square(5))


// ----------------Array call back Methods-------------------------------


// const students = ['john', 'jack', 'Joe', 'Jane']


// students.forEach(printName)


// function printName(name) {
//     console.log(name.toUpperCase())
// }

// students.forEach(function(name) {
//     console.log(name)
// })

// students.forEach(name => console.log(name))


// const movies = [{
//         title: 'Avengers',
//         rating: 4.1
//     },
//     {
//         title: 'Dr. Strange',
//         rating: 3.9
//     },
//     {
//         title: 'Tenet',
//         rating: 4.3
//     },
//     {
//         title: 'Joker',
//         rating: 4.7
//     }
// ]

// movies.forEach((name, idx) => console.log(name.title.toUpperCase(), idx))


const employees1 = [
    { name: "John", salary: 5000, bonus: 500, tax: 1000 },
    {
        name: "Jack",
        salary: 8000,
        bonus: 1500,
        tax: 2500
    },
    { name: "Jane", salary: 1500, bonus: 500, tax: 200 },
    {
        name: "James",
        salary: 4500,
        bonus: 1000,
        tax: 900
    },
];


let newArr = employees1.map((obj) => {
    newObj = {}
        // console.log(obj.salary)
    newObj.name = obj.name;
    newObj.earning = obj.salary + obj.bonus - obj.tax

    return newObj

})


console.log(newArr)