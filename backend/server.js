const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

// Apresentar arquivos estáticos
server.use(express.static('../frontend/public'))

server.use(express.urlencoded({ extended: true }))

// Template engine
nunjucks.configure('../frontend', {
    express: server,
    noCache: true
})

const donors = [
    {
        name: 'Heron Rodrigues',
        blood: 'O+Zika'
    },
    {
        name: 'Heron Rodrigues',
        blood: 'O+Zika'
    },
    {
        name: 'Heron Rodrigues',
        blood: 'O+Zika'
    },
    {
        name: 'Heron Rodrigues',
        blood: 'O+Zika'
    },
    {
        name: 'Heron Rodrigues',
        blood: 'O+Zika'
    }
]

server.get('/', (req, res) => {
    res.render('index.html', {donors});
});

server.post('/', (req, res) => {
    const name = req.body.name;
    const blood = req.body.blood;
    const email = req.body.email;

    donors.push({
        name,
        blood
    })

    return res.redirect('/')
});

server.listen(3000);