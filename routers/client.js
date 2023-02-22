const express = require("express")

const clientRouter = express.Router();

clientRouter
    .get('/',(req,res)=> {
        res.send('It s works');
    })

module.exports = {
    clientRouter,
}