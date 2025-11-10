// const test = {
//     prop: 42,
//     func: function() {
//         // setTimeout(function() {
//             console.log(this.prop)
//         // }, 1000)
//     },
//   };

// test.func()

function crearFichero(nombre, extension) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.5 
            if (exito) {
                var mensajeExitoso = {nombreFichero:nombre, extensionFichero:extension}
                resolve(mensajeExitoso)
            } else{
                var error  = 'dio error'
                reject(error)
            }
        }, 2000);
    })
}

crearFichero('Oscar', '.txt')
    .then((res => { console.log(res, 'exito');}))
    .catch((err => { console.log(err, 'error');}))