import { productServices } from "../servicios/servicio_cliente.js";

const formulario=document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre=document.querySelector("[data-nombre]").value;
    const descipt=document.querySelector("[data-descrip]").value;
    console.log("formulario");
    productServices.crearProducto(imagen,nombre,descrip).then( respuesta => {
        console.log(respuesta);
    }).catch(err => console.log( err));
});