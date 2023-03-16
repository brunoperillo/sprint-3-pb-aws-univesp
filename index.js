const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()

app.use('/src', express.static(__dirname + '/src'))

app.engine('handlebars', handlebars.engine({
      defaultLayout: './index',
      runtimeOptions:{
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
      }
    }
  )
)

app.set('view engine', 'handlebars')
app.get('/', (req, res) => {
    res.render('index')
  }
)

app.listen(3000, () => {
    console.log('Está rodando!')
  }
)