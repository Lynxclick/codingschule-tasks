const express = require('express')
const app = express()
const port = 3000
const User = []
const fetch = require('cross-fetch');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:name', (req, res) => {
    res.send('Hello ' + req.params.name + '!');
    User.push(req.params.name);
})

app.get('/user', (req, res) => {
    res.send(User);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
