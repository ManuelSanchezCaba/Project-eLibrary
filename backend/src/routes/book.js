const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Esta funcion busca los libros registrados
router.get('/api/book', (req, res) => {
    mysqlConnection.query("select * from book", (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Esta funcion busca un libro registrado por el id
router.get('/api/book/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query("select * from book where idBook = ?", [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//Esta funcion crea un libro
router.post('/api/book', (req, res) => {
    const { contenido, autor, fecha_creacion, categoria, descripcion, cantidad_pagina } = req.body;
    mysqlConnection.query("insert into book(contenido, autor, fecha_creacion, categoria, descripcion, cantidad_pagina) values ('" + contenido + "', '" + autor + "', '" + fecha_creacion + "', '" + categoria + "', '" + descripcion + "', '" + cantidad_pagina +  "')", (err, rows, fields) => {
          if(!err) {
                res.json({status: 'Book Saved'});
            } else {
                console.log(err);
            }
    });
});

//Esta funcion actualiza un libro
router.put('/api/book/:id', (req, res) => {
    const book = req.body;
    const { id } = req.params;
    mysqlConnection.query("update book set ? where idBook = ?", [book, id], (err, rows, fields) => {
          if(!err) {
                res.json({status: 'Book Updated'});
            } else {
                console.log(err);
            }
    });
});

//Esta funcion elimina un libro
router.delete("/api/book/:id", (req, res) => {
    const { id } = req.params;
    mysqlConnection.query("delete from book where idBook = ?", [id], (err, rows, fields) => {
        if(!err) {
              res.json({status: 'Book Deleted'});
          } else {
              console.log(err);
          }
  });
});

module.exports = router;