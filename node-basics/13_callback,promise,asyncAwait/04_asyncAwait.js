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

async function getUser() {
    let name = await getName()
    console.log(name)
    let number = await getNumber()
    console.log(number)
}

getUser()