import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', {
        mostraTitulo: true,
        alunos:[{nome:'Joao', idade:21},{nome:'Maria',idade:23},{nome:'Pedro',idade:26}]
    });
});

app.listen(3000);