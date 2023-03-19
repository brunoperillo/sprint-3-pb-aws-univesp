const express = require('express')
const app = express()

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    // envia o arquivo da página principal
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(9000, () => {
  console.log('Server online')
})