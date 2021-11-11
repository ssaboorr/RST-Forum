// create an  multi-dimentional Arr with functions, 
function createMatrix() {
    const matrix = []
    const matrixArr = []



    for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 100) + 1;
        matrix.push(num);
        for (let j = 0; j < 3; j++) {
            matrixArr.push(matrix);
        }

    }

    console.log(matrixArr)

}

createMatrix()