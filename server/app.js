const express = require('express')
const path = require('path')
const port = process.env.PORT || 3030
const app = express()

app.use(express.static(path.resolve('./public')))
app.get('*', (request, response) => {
  response.sendFile(path.resolve('./public/index.html'))
})

app.listen(port, () => {
  console.log('Example app listening at http://localhost:', port)
})
