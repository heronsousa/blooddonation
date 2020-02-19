const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

// Apresentar arquivos estáticos
server.use(express.static('../frontend/public'))

server.use(express.urlencoded({ extended: true }))


const Pool = require('pg').Pool;
const db = new Pool({
    user: 'heron',
    password: '2524',
    host: 'localhost',
    port: 5432,
    database: 'doe'
});

// Template engine
nunjucks.configure('../frontend', {
    express: server,
    noCache: true
})


server.get('/', (req, res) => {
    db.query('SELECT * FROM donors', (err, result) => {
        if(err) return res.send('Erro no banco de dados.');
        
        const donors = result.rows;
        res.render('index.html', { donors });
    })

});

server.post('/', (req, res) => {
    const name = req.body.name;
    const blood = req.body.blood;
    const email = req.body.email;

    if(!name || !blood || !email){
        return res.send("Todos os campos são obrigatórios.")
    }

    const query = `INSERT INTO donors ("name", "email", "blood")
                   VALUES ($1, $2, $3)`
    
    db.query(query, [name, email, blood], (err) => {
        if(err) return res.send('Erro no banco de dados.')
    });

    return res.redirect('/')
});

server.listen(3000);