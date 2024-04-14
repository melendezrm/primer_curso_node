const argv = require('yargs')
              .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
              }) 

              .option('l',{
                alias: 'listar',
                type: 'boolean',
                demandOption: true,
                default: false,
                describe: 'Muestra la tabla en consola'
              }) 

              .check((argv, options) => {
                console.log('yargs', argv)
                if( isNaN(argv.b) ) {
                    throw 'La base debe ser número'
                }
                return true;
              })
              .argv;

module.exports = argv;        