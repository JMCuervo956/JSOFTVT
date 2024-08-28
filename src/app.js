
import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'

const app = express()

app.get('/', (req, res)=>{
        res.send('Hola aqui estamos solo data')
    }) 
    

app.listen(PORT)
console.log('Server en port ', PORT)