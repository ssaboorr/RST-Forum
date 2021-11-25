//  Create Multidimentional array using function



function createInnerArr() {
    const arr = [];
    for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 20) + 1;
        arr.push(num)

    }
    return arr
}


function createOuterArr() {
    const outerArr = []

    for (let i = 0; i < 3; i++) {
        // console.log(createArr())
        outerArr.push(createInnerArr())

    }
    return outerArr
}




const matrix = [];
for (let i = 0; i < 3; i++) {
    matrix.push(createOuterArr())
}
console.log(matrix)

// console.log(createOuterArr())