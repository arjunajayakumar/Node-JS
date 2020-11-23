console.log('Before')
// getUser(1, getRepositories)
console.log('After')

function getRepositories(commits) {
    getRepositories(user.gitHubUsername, getCommits)
}

function getCommits(repos) {
    getCommits(repo, displayCommits)
}

function displayCommits(commits) {
    console.log(commits)
}


getUser(1)
    .then(user => getRepositories(user.gitHubUserName))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log(commits))
    .catch(errors => console.log(errors))


function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database....')
            resolve({
                id: id, gitHubUserName: 'Arjun'
            })
        }, 2000)

    })
}

function getRepositories() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                'repo1', 'repo2', 'repo3'
            ])
        }, 2000)
    })
}

function getCommits() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API')
            resolve(['commit'])
        }, 2000)
    })

}