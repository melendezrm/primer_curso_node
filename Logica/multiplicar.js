const fs = require('fs');

const crearArchivo = (base = 5, listar = false) => {



    let salida = '';

    for (let i = 1; i <= 10; i++){
    
    //console.log(`${base} x ${i}=${base*i}`);

    salida += (`${base} x ${i}=${base*i}\n`);
    
    
    }

    if (listar){
        console.log('========================');
        console.log('Tabla del', base);
        console.log('========================');
        console.log(salida);
        
    }
    
    fs.writeFile(`./salida/Tabla del ${base}.txt`, salida, (err) =>{
    
        if (err) throw err;
    
        console.log(`Tabla del ${base}.txt creada` );
    
    })

}

module.exports = {
    crearArchivo
}