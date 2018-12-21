const express = require('express');
const users = [{
        id: 1,
        nombre: "Ada",
        apellido: "Lovelace",
        telefono: "1234567890",
        email: "contacto@gmail.com"
    },
    {
        id: 2,
        nombre: "Grace",
        apellido: "Hopper",
        telefono: "087654321",
        email: "contacto@hotmail.com"
    },
    {
        id: 3,
        nombre: "Barbara",
        apellido: "Gomez",
        telefono: "1524749878",
        email: "contacto@gmail.com"
    }
];

let contador = 4;

const router = express.Router();

router.get('/users', function (req, res) {
    res.json(users);
});

router.post('/users', function (req, res) {
    // la info que me llega desde la web
    // {
    //     nombre: '',
    //     apellido: '',
    //     telefono: '',
    //     email: ''
    // }
    const newUser = req.body;

    if (newUser.nombre.length > 30) {
        return res.status(400).end('la pifiaste');
    }

    newUser.id = contador++;

    // agrego el usuario al array global
    users.push(newUser);

    // le respondemos con el array de objetos
    res.json(newUser);
});

module.exports = router;