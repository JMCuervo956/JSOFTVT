
import express from 'express'
import {pool} from './db.js'

const app = express()

app.get('/', (req, res)=>{
    res.send('Hola aqui estamos')
}) 

app.get('/ping', (req, res)=>{
    const [result] = pool.query("select 'hola mundo' as result");
    res.json(result[0])
});

app.listen(3000)
console.log('Server en port 3000')