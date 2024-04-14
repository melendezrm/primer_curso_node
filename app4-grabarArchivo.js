const { options } = require('yargs');
const {crearArchivo} = require('./Logica/multiplicar');
const argv = require('./config/yargs');


console.clear();

//console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base);

//const base = 5;

crearArchivo(argv.b, argv.l);