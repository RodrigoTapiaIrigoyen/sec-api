import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

const { expect } = chai;
chai.use(chaiHttp);

describe('Rutas de la API', () => {
  it('debería devolver un mensaje de bienvenida en la ruta raíz', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('¡Hola, mundo!');
        done();
      });
  });

  it('debería manejar errores en la ruta /error', (done) => {
    chai.request(app)
      .get('/error')
      .end((err, res) => {
        expect(res).to.have.status(500);
        expect(res.text).to.equal('¡Algo salió mal!');
        done();
      });
  });
});
