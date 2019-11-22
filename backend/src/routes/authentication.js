const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Esta funcion busca los usuarios registrados
router.get('/authentication', (req, res) => {
      mysqlConnection.query("select * from authentication", (err, rows, fields) => {
          if(!err) {
              res.json(rows);
          } else {
              console.log(err);
          }
      });
});

//Esta funcion busca un usuario registrado por el id
router.get('/authentication/:id', (req, res) => {
      const { id } = req.params;
      mysqlConnection.query("select * from authentication where idAuthentication = ?", [id], (err, rows, fields) => {
          if(!err) {
              res.json(rows[0]);
          } else {
              console.log(err);
          }
      });
});

//Esta funcion crea un usuario
router.post('/authentication', (req, res) => {
      const { user, password, nombre, tipo_usuario, email } = req.body;
      mysqlConnection.query("insert into authentication(user, password, nombre, tipo_usuario, email) values ('" + user + "', '" + password + "', '" + nombre + "', '" + tipo_usuario + "', '" + email + "')", (err, rows, fields) => {
            if(!err) {
                  res.json({status: 'User Saved'});
              } else {
                  console.log(err);
              }
      });
});

//Esta funcion actualiza un usuario
router.put('/authentication/:id', (req, res) => {
      const user = req.body;
      const { id } = req.params;
      mysqlConnection.query("update authentication set ? where idAuthentication = ?", [user, id], (err, rows, fields) => {
            if(!err) {
                  res.json({status: 'User Updated'});
              } else {
                  console.log(err);
              }
      });
});

//Esta funcion elimina un usuario
router.delete("/authentication/:id", (req, res) => {
    const { id } = req.params;
    mysqlConnection.query("delete from authentication where idAuthentication = ?", [id], (err, rows, fields) => {
        if(!err) {
              res.json({status: 'User Deleted'});
          } else {
              console.log(err);
          }
  });
});

module.exports = router;