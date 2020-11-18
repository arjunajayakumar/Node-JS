function add(num1, num2, callback) {
    let err = false;
    if (num1 === 0)
        err = true

    callback(num1 + num2, err)
}

function multiply(num1, num2, callback) {
    callback(num1 * num2)
}

function division(num1, num2, callback) {

    callback(num1 / num2)
}

add(0, 20, (sum, err) => {
    if (err)
        console.log("First number is zero")
    else
        console.log(sum)
    multiply(sum, sum, (product) => {
        console.log(product)
        division(product, 5, (division) => console.log(division))
    })

})

