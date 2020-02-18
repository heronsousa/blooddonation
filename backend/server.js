const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

// Apresentar arquivos estáticos
server.use(express.static('../frontend/public'))

// Template engine
nunjucks.configure('../frontend', {
    express: server,
    noCache: true
})

const donors = [
    {
        name: 'Heron Rodrigues',
        blood: 'O+Zika'
    }
]

server.get('/', (req, res) => {
    res.render('index.html', {donors});
})

server.listen(3000);