const express = require('express')
const app = express()
const PORT = 9000;
const HOST = '0.0.0.0';

app.use('/scr', express.static(__dirname + '/scr'))

app.get('/', (req, res) => {
    // envia o arquivo da página principal
    res.sendFile(__dirname + '/scr/index.html')
})

app.listen(9000, () => {
  console.log(`Running on http://${HOST}:${PORT}`)
})