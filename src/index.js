const express = require('express')
const path = require('path')
const routes = require('./routes')

const app = express()

require('./database')


////////////////////////
//Settings
////////////////////////
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

////////////////////////
//Middlewares
////////////////////////
app.use(express.urlencoded({extended: false}))
app.use(express.json())


////////////////////////
//Static
////////////////////////
app.use(express.static(path.join(__dirname, 'public')))

////////////////////////
//Routes
////////////////////////
app.use(routes)

////////////////////////
//Starting server
////////////////////////
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
})