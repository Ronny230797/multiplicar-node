//requireds 3 tipos
const fs = require('fs'); //Propia de nodejs solo la definimos y listo(En este caso FileSystem)
// const fs = require('express'); //No existen en doc, se debe instalar primero, los no nativos de node alguien lo hizo por nosotros
// const fs = require('./fs'); //Los archivos o required de los que nosotros mismos creamos en uestro proyecto, son archivos propios dentro del proyecto

const colors = require('colors')

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        //Aqui controlo que el parametro sea un numero
        //Con el reject devulevo que no es un numero , recordar que despues se sigue ejecutando las lineas posteriores
        //Con el return hago un break de programa para que no se siga ejecutando
        if (!Number(base)) {
            reject(`El valor introducido: '${ base }', no es un numero`)
            return
        }

        let contenido = '';

        for (let i = 1; i <= limite; i++) {
            contenido += `${ base } * ${ i } = ${ base * i }\n`
        }

        //Crear files mediante fs dentro del proyecto
        //En este caso creamos dentro del folder tablas una tabla de un numero base
        //contenido es la data que quiero que tenga el archivo txt
        //el ultimo parametro del callback es si genera un error mostrarlo y si es exitoso mostrar msj exito
        fs.writeFile(`tablas/tabla-${ base }.txt`, contenido, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`.green)
        });
    })
}

//Por ecmascript 6 yo podria definirle un valor por default al limite aqui, seria asi dentro de donde paso el param
//nada mas le digo limite=10, en es ecaso el default seria 10
let listarTabla = (base, limite) => {

    console.log('=============================='.green);
    console.log(`Tabla de ${ base }`.yellow);
    console.log('=============================='.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}