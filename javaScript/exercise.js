// Exercises
// Write a function called product that accepts two parameters and returns
// the product of the two parameters (multiply them together)


function product(a, b) {
    return a * b
}

// console.log(product(5, 4))


// Write a function called generate_evens that returns an array of the even
// numbers between 1 and 50
// Basically, it should return an array: [2,4,6....all the way up to 48]
// Inside the function, you can construct the array using a loop.

function generate_evens() {
    const arr = []
    for (let i = 0; i <= 50; i++) {
        if (i % 2 == 0) {
            arr.push(i)
        }
    }
    return arr;
}

// console.log(generate_evens())


// Exercise #3
// Write a function called return_day , this function takes in one parameter (a
// number from 1-7) and returns the day of the week (1 is Sunday, 2 is
// Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7,
// the function should return null .
// You can use a switch insdie the funcion.


function return_day(day) {
    switch (day) {
        case 1:
            console.log("Monday")
            break;
        case 1:
            console.log("Tuesday")
            break;
        case 2:
            console.log("Wednesday")
            break;
        case 3:
            console.log("Thursday")
            break;
        case 4:
            console.log("Friday")
            break;
        case 5:
            console.log("Saturday")
            break;
        case 6:
            console.log("Sunday")
            break;
        case 7:
            console.log("Monday")
            break;
        default:
            console.log("Please enter number between 1 and 7 ")

    }
}

// return_day(10);

// Exercise #4
// Write a function called lastItem . This function takes in one parameter (an
// array) and returns the last value in that array. It should return null if the
// array is empty.


function last_item(arr) {
    if (arr === []) {
        return console.log(null)
    } else {
        last = arr.length - 1
        console.log(arr[last])
    }

}

// last_item([1, 2, 3])




// Write a function called number_compare . This function takes in two
// parameters (both numbers). If the first is greater than the second, this
// function returns "First is greater" If the second number is greater than the
// first, the function returns "Second is greater" Otherwise the function
// returns "Numbers are equal"

function number_compare(a, b) {
    if (a > b) {
        return "First Number is Greater"
    } else if (a < b) {
        return "Second Number is Greater"

    } else {
        return "Numbers Are Equal"
    }
}



// console.log(number_compare(6, 6))