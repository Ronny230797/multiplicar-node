const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    //Le puedo poner un valor por default al param en caso de que no lo envien
    limite: {
        alias: 'l',
        default: 10

    }
}


const argv = require('yargs')
    //Este command es propio de yargs, primer parametro es el comando
    //segundo param es una ayuda o descripcion del command
    //tercero es un objeto con la config de params pueda recibir
    .command('listar', 'Imprime la tabla de multiplicar en consola', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar de un numero base', opts)
    .help()
    .argv


module.exports = {
    argv
}



///Misma configuracion lo de aqui abajo pero mas largo y repetia configs

// const argv = require('yargs')
//     //Este command es propio de yargs, primer parametro es el comando
//     //segundo param es una ayuda o descripcion del command
//     //tercero es un objeto con la config de params pueda recibir
//     .command('listar', 'Imprime la tabla de multiplicar en consola', {
//         //Aqui le digo que un param es la base, y en la config le digo que es obligatorio
//         //Ademas le digo que se puede usar con solo b como con base son lo mismo
//         //-b 7 es lo mismo que --base 7
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         //Le puedo poner un valor por default al param en caso de que no lo envien
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Crea un archivo con la tabla de multiplicar de un numero base', {
//         //Aqui le digo que un param es la base, y en la config le digo que es obligatorio
//         //Ademas le digo que se puede usar con solo b como con base son lo mismo
//         //-b 7 es lo mismo que --base 7
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         //Le puedo poner un valor por default al param en caso de que no lo envien
//         limite: {
//             alias: 'l',
//             default: 10

//         }
//     })
//     .help()
//     .argv