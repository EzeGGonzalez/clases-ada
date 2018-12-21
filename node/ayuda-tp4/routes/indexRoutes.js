// 1) Primero me traigo express
// nombreModulo = require("modulo")
const express = require("express");
// 2) Pedirle a expreass el Router
const router = express.Router();
// 3) Me traigo el modulo path
const path = require('path');

// Firma del get => ("/nombreRuta", (req, res) => {})
router.get("/ping", (req, res) => {
    res.send("pong")
});

router.get("/users/new", (req, res) => {
    //res.send(__dirname)
    res.sendFile(path.join(__dirname, "..", "new.html"));
});

router.get("/users", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "users.html"));
});

router.get("/users/edit", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "edit.html"));
});

module.exports = router;