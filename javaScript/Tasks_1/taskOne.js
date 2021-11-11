// create an Arr with functions, Taking lenght of an array from user.



function createArr(arrLength) {

    const arr = []
    if (arrLength < 101) {
        for (let i = 0; i < arrLength; i++) {
            let elements = Math.floor(Math.random() * 100) + 1;
            arr.push(elements);
        }
        return console.log(arr);


    } else {
        return 'Please Enter Number less then or equal to 100'
    }
}


createArr(5); //Calling function and providing Argument

// matrix.push(createArr(5))