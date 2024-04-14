
const fs = require('fs');

console.clear();

console.log('========================');
console.log('Tabla del 5');
console.log('========================');

const base = 4;
let salida = '';

for (let i = 1; i <= 10; i++){

console.log(`${base} x ${i}=${base*i}`);
salida += (`${base} x ${i}=${base*i}\n`);

}

fs.writeFile(`Tabla del ${base}.txt`, salida, (err) =>{

    if (err) throw err;

    console.log(`Tabla del ${base}.txt creada` );

})