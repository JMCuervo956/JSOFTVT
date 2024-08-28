
import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'

const app = express()
/*
app.get('/', async(req, res)=>{
    const rows = await pool.query("select * from preguntas")
    res.json(rows)
})
*/
app.get('/', async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM preguntas");
      res.json(result.rows);
    } catch (err) {
      console.error('Error executing query', err.stack);
      res.status(500).send('Error retrieving data');
    }
  });

app.get('/ping', async(req, res)=>{
    const [result] = await pool.query("select 'hola mundo' as result");
    res.json(result[0])
});

app.get('/create', async(req, res)=>{
    const result = await pool.query("INSERT INTO preguntas (texto, tipo, fecha, estado) VALUES ('¿Ajuste Datafano?', 'radio', CURDATE(), 0)");
    res.json(result)
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
/*
 app.listen(PORT)
 console.log('Server en port', PORT)
 */