import express from 'express';

const app = express();
const port = 3000;

app.get('/error', (req, res) => {
  throw new Error('Algo salió mal');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('¡Algo salió mal!');
});

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}

export default app;
