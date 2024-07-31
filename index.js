import express from 'express';
const app = express();
const port = 3000;

// Ruta que lanza un error
app.get('/error', (req, res) => {
  throw new Error('Algo salió mal');
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('¡Algo salió mal!');
});

// Ruta GET para la página de inicio
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
} else {

}
