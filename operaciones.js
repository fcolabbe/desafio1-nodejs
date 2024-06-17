const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  citas.push({ nombre, edad, animal, color, enfermedad });
  fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
  console.log('Cita registrada');
};

const leer = () => {
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  console.log('Citas registradas:');
  citas.forEach((cita, index) => {
    console.log(`${index + 1}. Nombre: ${cita.nombre}, Edad: ${cita.edad}, Animal: ${cita.animal}, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`);
  });
};

module.exports = { registrar, leer };