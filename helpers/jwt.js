const jwt = require('jsonwebtoken');


const generarJWT = (uid, usuario) => { //* recibo los datos que quiero almacenar en payload

    let payload = { uid, usuario };

    try {
        
        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1d' }
        );

        if(token) return token;

        else throw('ERROR: no se ha generado el token.')

    } catch (error) {
        
        console.log(error);

    };

};


module.exports = {generarJWT};