//todo: 

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;


//* configurar carpeta estática public
app.use(express.static(`${__dirname}/public`));


//* template engine
app.set('view engine', 'ejs');

app.set('views', `${__dirname}/views`);


//* renderizar
app.get('/', (req, res) => {

    res.render('index', {
        title: 'Este es el título del index',
        text: 'Este es el párrafo del index.'
    });

});

app.get('/servicios', (req, res) => {

    res.render('servicios', {
        title: 'Este es el título de servicios',
        text: 'Este es el párrafo de servicios.',
    });

});

app.get('/productos', (req, res) => {

    res.render('productos', {
        title: 'Este es el título de productos',
        text: 'Este es el párrafo de productos.',
    });

});

app.get('/quienessomos', (req, res) => {

    res.render('quienessomos', {
        title: 'Este es el título de quiénes somos',
        text: 'Este es el párrafo de quiénes somos.',
    });

});

app.get('/contacto', (req, res) => {

    res.render('contacto', {
        title: 'Este es el título de quiénes somos',
        text: 'Este es el párrafo de quiénes somos.',
    });

});


app.listen(port, () => {

    console.log(`A la escucha del puerto ${port}`);

});