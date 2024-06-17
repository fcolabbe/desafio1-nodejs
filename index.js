const operaciones = require('./operaciones');

const operacion = process.argv[2];

if (operacion === 'registrar') {
  const nombre = process.argv[3];
  const edad = process.argv[4];
  const animal = process.argv[5];
  const color = process.argv[6];
  const enfermedad = process.argv[7];

  operaciones.registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
  operaciones.leer();
} else {
  console.log('Operación no válida');
}