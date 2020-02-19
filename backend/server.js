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
    res.render('index.html', {donors});
});

server.post('/', (req, res) => {
    const name = req.body.name;
    const blood = req.body.blood;
    const email = req.body.email;

    return res.redirect('/')
});

server.listen(3000);