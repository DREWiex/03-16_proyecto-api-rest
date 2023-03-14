const jwt = require('jsonwebtoken');

const generarJWT = (uid, usuario) => { //* recibo los datos que quiero almacenar en payload

    return new Promise((resolve, reject) => {

        let payload = {uid, usuario};

        jwt.sign(
            payload, //* lo que queremos guardar del req.body
            process.env.JWT_SECRET_KEY, //* firma
            {expiresIn: '3h'}, //* opciones: fecha de expiración
            (error, token) => { //* func call back
                if(error){
                    console.log(error);
                    reject('ERROR: no se ha geneerado el token.');
                }else{
                    resolve(token);
                };
        });

    });

};


module.exports = {generarJWT};