console.log('Before')
getUser(1, (user) => console.log(user))
getRepositories((repositories) => console.log(repositories))
console.log('After')
function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database....')
        callback({
            id: id, gitHubUserName: 'Arjun'
        })
    }, 2000)

}

function getRepositories(callback) {
    setTimeout(() => {
        callback([
            'repo1', 'repo2', 'repo3'
        ])
    }, 2000)
}



