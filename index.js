import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express()


//conectar la db
db.authenticate()
    .then( () => {
        console.log('Base de datos conectada')
    })
    .catch( error => console.log(error))



//habilitar pug
app.set('view engine', 'pug')

//Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = "Agencia de Viajes"

    return next()
})

//agregar body parse para leer los datos del formulario
app.use(express.urlencoded({extended: true}))

//definir carpeta publica
app.use(express.static('public'))

//agregar router
app.use('/', router)

//definir puerto
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.listen(port, host, () => {
    console.log('El sv esta funcionando')
})
