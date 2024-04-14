

const {crearArchivo} = require('./Logica/multiplicar');
const argv = require('yargs').argv;

console.clear();

//console.log(process.argv);
//console.log(argv);

const base = 5;

crearArchivo(base);