const express = require('express')
const path = require('path');
const  hdb  = require('express-handlebars')

const app = express()
const port = 3000

app.engine('hbs', hdb.engine({ defaultLayout: 'main', extname: '.hbs'}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources', 'views'));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})