//Con el ultimo (....yargs').argv, le digo de esa clase a esta variable solo asignele el argv, recordar que esta configuracion es propia y esta en una clase  creada por mi
//Esto es para no hacer navegacion mas adelnate de argv.argv cuando lo vaya a utilizar
//As[i] le estoy asignando desde un principio a const argv, esa navegacion
const argv = require('./config/yargs').argv
    //Este require colors es instalado con npm para dar color a la consola de ejecucion del programa
    //Debo hacer esta solicitud en cada lugar que lo quiera utilizar
const colors = require('colors')

const { crearArchivo, listarTabla } = require('./operaciones/multiplicar')

//process es como modules, son declaradas por debajo de node de forma global nada mas se utilizan 
// let argv2 = process.argv;
//Aqui vamos a agarra el param num 2 del array de argv, el 2 es el que nosotros mandamos
//Se puede ver la posicion haciendo un clg de argv
// let param = argv[2];
//Aqui convierto el resultado anterior en un array en base al = como separador y le decimos que el valor requerido es el 1
// let base = param.split('=')[1]

// console.log(argv);
// console.log(argv.base);




//El guion bajo'_' es el array que crea node, especificamente argv con el comando qe deseo, ej:listar,crear,etc
//el argv. es de navegacion le digo que de argv quiero el array que se representa con '_' en la pos 0
//le digo que solo quiero el primero en la pos 0 
let commando = argv._[0];

switch (commando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no definido');

}