//ejemplo de crud
const express = require('express');
const mongodb = require('mongodb');
// Crear una instancia de la aplicación express
const app = express();
// Usar el middleware para parsear el cuerpo de las peticiones
app.use(express.json());
// Crear una variable para almacenar la referencia al cliente de MongoDB
let db;
// Conectar con MongoDB usando el método MongoClient.connect
mongodb.MongoClient.connect('srv://AlanWasaka:alandejesus@clusteralan.rnfab7j.mongodb.net/test',
(err, client) => {
  if (err) {
console.error(err);
    return;
  }
  // Asignar el cliente a la variable db
  db = client;
  // Escuchar en el puerto 3000
  app.listen(3000, () => {
console.log('Servidor escuchando en el puerto 3000');
  });
});
// Definir una ruta para obtener todos los documentos de una colección llamada productos
app.get('/productos', (req, res) => {
// Obtener la colección productos desde la base de datos test
  const productos =
db.db('test').collection('productos');
  // Buscar todos los documentos y convertirlos a un array 
productos.find().toArray((err, result) => {
    if (err) {
console.error(err);
res.status(500).send(err);
      return;
    }
    // Enviar el resultado como respuesta JSON
    res.json(result);
  });
});

// Definir una ruta para crear un nuevo documento en lacolección productos
app.post('/productos', (req, res) => {
  // Obtener la colección productos desde la base de datos test
  const productos =
db.db('test').collection('productos');
  // Insertar el documento que viene en el cuerpo de la petición

productos.insertOne(req.body, (err, result) => {
    if (err) {
console.error(err);
res.status(500).send(err);
      return;
    }
    // Enviar el resultado como respuesta JSON
    res.json(result);
  });
});