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


const students = ['john', 'jack', 'Joe', 'Jane']


students.forEach(printName)


function printName(name) {
    console.log(name.toUpperCase())
}

students.forEach(function(name) {
    console.log(name)
})

students.forEach(name => console.log(name))


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


// console.log(newArr)


const string = "Hello World"
const stringArr = string.split("");


let asciiArr = stringArr.map(aplh => aplh.charCodeAt(0))
    // console.log(stringArr, asciiArr)



let randomArray = [1, 3, 4, 5, 6, 8, 2, 4]


let firstEven = randomArray.find(num => num % 2 == 0)
    // 

const team = [
    { name: "John", age: 15 },
    { name: "James", age: 17 },
    { name: "Jack", age: 16 },
    { name: "Jim", age: 22 },
];

let adult = team.find(obj => obj.age >= 18)
    // console.log(adult)

const prices = [1800, 2000, null, 3000, 5000,
    'Thousand', 500, 8000
];


let filterPrices = prices.filter(item => {
    if (typeof(item) === 'number') {
        return item
    }
})

// console.log(filterPrices)

const ageArray = [12, 34, 15, 16, 18]


let check = ageArray.every(age => age >= 20)

// console.log(check)


// Sorting an array of strings

let names = ["Abhijeet", "Jim", "Farhan", "Danny",
    "Brad"
];


// console.log(names.sort())

let priceList = [1000, 50, 2, 7, 14];

// console.log(priceList.sort())
// Number is converted to string and sorted

//  with compare funtion

const prices2 = [500.4, 211, 23, 5, 4, 22.2, -23.2, 9233]

// ascending order

const sortAsc = prices2.sort((a, b) => a - b)
    // console.log(sortAsc)


// Descending order

const sortDesc = prices2.sort((a, b) => a + b)

// console.log(sortDesc)

// Array reduce


const arr = [1, 2, 3, 4, 5, 6]

let sum = arr.reduce((accumulator, current) => accumulator + current);
console.log(sum)