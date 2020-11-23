console.log('Before')
const user = getUser()
console.log(user)
console.log('After')
function getUser() {
    setTimeout(() => {
        console.log('Reading a user from a database....')
        return {
            id: '', gitHubUserName: 'Arjun'
        }
    }, 2000)

}



