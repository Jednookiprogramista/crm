const express = require("express")

const clientRouter = express.Router();

clientRouter
    .get('/',(req,res)=> {
        res.send('Download all!');
    })

    .get('/id',(req,res)=> {
        res.send('Download one! ');
    })
    .post('/',(req,res)=> {
        res.send('Add!');
    })
    .put('/:id',(req,res)=> {
        res.send('Modify!');
    })
    .delete('/:id',(req,res)=> {
        res.send('Delete!');
    })

module.exports = {
    clientRouter,
}