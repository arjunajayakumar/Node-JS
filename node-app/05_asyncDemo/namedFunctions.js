console.log('Before')
getUser(1, getRepositories)
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



