const express = require('express');
const hbs = require('express-handlebars')
const {clientRouter} = require("./routers/client");

const app = express();

app.use(express.urlencoded({
    extended: true,

}));
app.use(express.static('public'))
app.use(express.json());
app.engine('.hbs', hbs.engine({
    extname: '.hbs',
    // helpers: 'handlebarsHelpers'
}));
app.set('view engine', '.hbs');

app.use('/client',clientRouter);


app.listen(3000,'localhost',()=> {
    console.log('Listening on http://localhost:3000')
})