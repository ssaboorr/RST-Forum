// For loop


// for (let i = 0; i < 10; i++) {
//     console.log(`${i}: Hello world;`);
// }



// for (let i = 20; i >= 0; i--) {
//     console.log(i);
// }

// const nums = [12, 34, 56, 34, 78, 54, 23, 12];


// for (let i = 0; i < nums.length; i++) {
//     console.log(`The value at inde ${i} is: ${nums[i]}`)
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop: ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         console.log(`  inner loop: ${j}`)
//     }
// }


// const gameBoard = [
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16],
//     ],
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16],
//     ],
//     [
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16],
//     ],
//     [
//         [3, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16],
//     ],
// ];


// for (let i = 0; i < gameBoard.length; i++) {
//     for (let j = 0; j < 4; j++) {
//         console.log(gameBoard[i][j])
//     }
// }

// let leg = 10
// const val = []

// for (let i = 0; i < leg; i++) {
//     let num = Math.floor(Math.random() * 100) + 1;
//     val.push(num)
// }

// console.log(val)


// function createArr(arrLength) {

//     const arr = []
//     if (arrLength < 101) {
//         for (let i = 0; i < arrLength; i++) {
//             let elements = Math.floor(Math.random() * 100) + 1;
//             arr.push(elements);
//         }
//         return console.log(arr);


//     } else {
//         return 'Please Enter Number less then or equal to 100'
//     }



// }


// createArr(5);

// create an  multi-dimentional Arr with functions, Taking lenght of the matrix  from user.


// const matrix = []
// const matrixArr = []



// for (let i = 0; i < 3; i++) {
//     let num = Math.floor(Math.random() * 100) + 1;
//     matrixArr.push(num);
//     for (let j = 0; j < 2; j++) {
//         num = Math.floor(Math.random() * 100) + 1;
//         matrixArr.push(num);
//     }

// }







// console.log(matrix)


// Print Tripple array

// const matrix = [
//     [

//         [65, 88, 30, 92, 53],
//         [50, 23, 77, 17, 14],
//         [84, 19, 61, 45, 69],
//         [63, 91, 10, 45, 15],
//         [88, 87, 96, 97, 93],

//     ],
//     [
//         [51, 99, 72, 65, 80],
//         [4, 47, 67, 46, 39],
//         [32, 58, 31, 98, 52],
//         [12, 27, 25, 13, 55],
//         [11, 52, 91, 17, 71],
//     ]

// ]
// let sum = 0
// for (let ele of matrix) {
//     for (let num of ele) {
//         for (let i of num) {
//             // console.log(i)
//             sum += i

//         }
//     }
// }

// console.log(sum)


function createArr() {
    const arr = [];
    for (let i = 0; i < 5; i++) {
        let num = Math.floor(Math.random() * 20) + 1;
        arr.push(num)

    }
    return arr
}









let outerArr = []

for (let i = 0; i < 5; i++) {
    // console.log(createArr())
    outerArr.push(createArr())

}

console.log(outerArr)




// console.log(createArr())