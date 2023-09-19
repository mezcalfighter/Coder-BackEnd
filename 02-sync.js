const fs = require('fs');

//sync

// crear  sincronico
fs.writeFileSync('prueba.txt', "texto prueba");
// crear asincrono - con callbacks
fs.writeFile("prueba.txt", "texto prueba", (err) => {
    if (err) throw err;
    console.log("Archivo creado");
});
// crear asincrono - con promesas (exclusivo de fs)
fs.promises.writeFile("pruebas.txt","Texto Prueba Promesa")
    .then((res)=>console.log(res))
    .catch((err)=>console.error(err))

// leer
const texto = fs.readFileSync('prueba.txt', 'utf-8');
console.log(texto);
// eliminar
fs.unlink("prueba.txt",(err)=>{
    if(err) throw err
    console.log("Archivo elimninado")
})
