const Estudiante = require('../models/estudiante');

module.exports = function(app) {
  
  app.get('/estudiantes', Estudiante.list);
  app.get('/estudiantes/:id', Estudiante.get);
  app.post('/estudiantes', Estudiante.add);
  app.delete('/estudiantes/:id', Estudiante.delete);
}
