function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`api.github.com/repos/${repo}`)
  .then(resp => resp.json())
  .then(json => console.log(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = 09808cb48e5ccb9df333dd0ee9db9724e412c46b;

  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
  return ''
}
