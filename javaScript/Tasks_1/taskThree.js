// Print Tripple array and their total sum

const matrix = [
    [

        [65, 88, 30, 92, 53],
        [50, 23, 77, 17, 14],
        [84, 19, 61, 45, 69],
        [63, 91, 10, 45, 15],
        [88, 87, 96, 97, 93],

    ],
    [
        [51, 99, 72, 65, 80],
        [4, 47, 67, 46, 39],
        [32, 58, 31, 98, 52],
        [12, 27, 25, 13, 55],
        [11, 52, 91, 17, 71],
    ]

]
let sum = 0
for (let ele of matrix) {
    for (let num of ele) {
        for (let i of num) {
            console.log(i)

            sum += i

        }
    }
}
console.log('--------------TOTAL----------------------')
console.log(sum)