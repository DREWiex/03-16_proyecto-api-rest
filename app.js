//todo: ejercicio node-express

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;


//* configurar carpeta estática public
app.use(express.static(`${__dirname}/public`));


//* configurar template engine y carpeta views
app.set('view engine', 'ejs');

app.set('views', `${__dirname}/views`);


//* rutas
app.use('/', require('./routers/routerFront')); //* función middleware para las rutas

app.use((req, res, next) => {

    res.status(404).render('404', {
        error: '404',
        msg: 'Página no encontrada'
    });

});


//* servidor a la escucha
app.listen(port, () => {

    console.log(`A la escucha del puerto ${port}`);

});