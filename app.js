// const express = require('express');
// const app = express();
// const port = 3000
// const morgan = require('morgan');
// const cors= require('cors');
// const {coneccion, Tabla}= require('./db')

// app.use(express.json());
// app.use(cors());
// app.use(morgan('dev'));

// app.get('/productos', async (_req, res) => {
//     await Tabla();
  
//     const conectar = coneccion();
  
//     conectar.query(`SELECT * FROM productos`, (err, result) => { // Utiliza "connection" en lugar de "conn"
//       if (err) {
//         return res.status(500).json({
//           message: 'Error al traer datos'
//         });
//       }
//       res.json(result);
//     });
//   });
//   app.post('/productos', async (req, res) => {
//     await createTable();
//     const { nombre, precio } = req.body;
//     const conectar = coneccion(); // Utiliza "connection" en lugar de "conn"
  
//     conectar.query(`INSERT INTO productos SET ?`, { nombre, precio }, (err, result) => { // Utiliza "connection" en lugar de "conn"
//       if (err) {
//         return res.status(500).json({
//           message: 'No se puede insertar producto'
//         });
//       }
//       res.json({
//         message: 'El producto se insertó correctamente'
//       });
//     });
//   });
  



// app.listen(port,()=>{console.log(`servidor escuchando en el puerto ${port}`);});

const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const cors = require('cors');
const { coneccion, Tabla } = require('./db');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/productos', async (req, res) => {
  await Tabla();

  const connection = coneccion(); // Renombrar "conectar" a "connection"

  connection.query(`SELECT * FROM productos`, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: 'Error al traer datos'
      });
    }
    res.json(result);
  });
});


app.post('/productos', async (req, res) => {
  await Tabla();
  const { nombre, precio } = req.body;
  const connection = coneccion(); // Renombrar "conectar" a "connection"

  connection.query(`INSERT INTO productos SET ?`, { nombre, precio }, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: 'No se puede insertar producto'
      });
    }
    res.json({
      message: 'El producto se insertó correctamente'
    });
  });
});




app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
