const express = require('express');
const hbs = require('express-handlebars')
const {clientRouter} = require("./routers/client");
const {homeRouter} = require("./routers/home");
const {db} = require('./utils/db');

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

app.use('/',homeRouter);
app.use('/client',clientRouter);
app.get('/test',(req,res)=> {
    db.getOne('c293d482-67be-4609-ad69-c22985ab1246'.name)
});


app.listen(3000,'localhost',()=> {
    console.log('Listening on http://localhost:3000')
})