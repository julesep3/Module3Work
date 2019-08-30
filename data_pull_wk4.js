const request = require("request")

request('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {
  const parsed = JSON.parse(body)
  const ID_8 = parsed.filter(posts => {
      return posts.userId === 8
  })
  console.log("The number of posts made by userID8 is " + ID_8.length)
});

request('https://jsonplaceholder.typicode.com/todos', function (error, response, body) {
    const parsed = JSON.parse(body)
    const uncompleted = parsed.filter(posts => {
        return posts.completed === false
    })
    console.log("The number of uncompleted tasks is " + uncompleted.length)
})