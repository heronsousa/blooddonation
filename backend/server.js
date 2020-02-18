const express = require('express');
const nunjucks = require('nunjucks');


const server = express();

server.get('/', (req, res) => {
    res.send('Tamo-lhe junto, meu bom!!')
})

server.listen(3000);