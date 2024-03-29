//* importar el módulo express
const express = require('express');


//* módulo dotenv
require('dotenv').config(); //! tiene que ir antes que la const port para que no dé undefined


//* crear el servidor con express
const app = express();
const port = process.env.PORT;


//* conectar con la base de datos (mongodb)
const {connection} = require('./helpers/dbConnect'); //* requiero la conexión con la base de datos

connection(); //! llamo a la función que conecta con la base de datos

//* módulo cors
const cors = require('cors');

app.use(cors());


//* configuración carpeta estática public
app.use(express.static(`${__dirname}/public`));


//* configuración template engine y carpeta views
app.set('view engine', 'ejs');

app.set('views', `${__dirname}/views`);


//* parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
//* parse application/json
app.use(express.json());


//* routers
app.use('/', require('./routers/routerFront')); //* función middleware para las rutas del front

app.use('/api/v1/servicios', require('./routers/routerApi')); //* función middleware para las rutas del back

app.use('/api/v1/usuarios', require('./routers/routerUsuario')); //* función middleware para las rutas de usuarios

app.use('/admin', require('./routers/routerAdmin'));


app.use((req, res, next) => {

    res.status(404).render('404', {
        error: '404',
        msg: 'Página no encontrada'
    });

});


//* servidor a la escucha (siempre al final)
app.listen(port, () => {

    console.log(`Servidor a la escucha del puerto: ${port}`);

});