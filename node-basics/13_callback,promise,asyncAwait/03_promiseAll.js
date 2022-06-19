function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Arjun")
        }, 3000)
    })
}

function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("0484752222")
        }, 2000)
    })
}

Promise.all([getName(), getNumber()]).then((result) => console.log(result))