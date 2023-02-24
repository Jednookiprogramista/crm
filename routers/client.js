const express = require("express")
const {db} = require("../utils/db");

const clientRouter = express.Router();

clientRouter
    .get('/',(req,res)=> {
        res.render('client/list-all', {
            clients: db.getAll(),
        });
    })

    .get('/id',(req,res)=> {
        res.render('client/one',{
            client: db.getOne(req.params.id)
        });
    })
    .post('/',(req,res)=> {
        res.send('Add!');
    })
    .put('/:id',(req,res)=> {
        res.send('Modify!');
    })
    .delete('/:id',(req,res)=> {
        db.delete(req.params.id);
    })

module.exports = {
    clientRouter,
}