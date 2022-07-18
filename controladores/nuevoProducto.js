import { productServices } from "../servicios/servicio_cliente.js";

const formulario=document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const imagen=document.querySelector("[data-imagen]").value;
    const nombre=document.querySelector("[data-nombre]").value;
    const descript=document.querySelector("[data-descrip]").value;
    console.log(imagen,"-" ,nombre, "-", descript);
    productServices.crearProducto(imagen,nombre,descrip).then( respuesta => {
        console.log(respuesta);
    }).catch(err => console.log( err));
});