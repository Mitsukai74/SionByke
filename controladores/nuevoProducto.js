import { productServices } from "../servicios/servicio_cliente.js";

const nuevoProducto = (imagen,nombre,descripcion) => {
    const tarjeta = document.createElement("div");
    const contenido = 
    `
    <div>
        <img src="${imagen}"/>
        <div>
           <h4>${nombre}</h4>
            <p>${descripcion}</p>
            <button class="casco__boton">Agregar al carrito</button>
        </div>
    </div>   

    `;
    tarjeta.innerHTML=contenido;
    tarjeta.classList.add("tarjeta");
    return tarjeta;
};


const productoNew=document.querySelector("[datos-productos]");
const render = async() => {
    try {
        const listaproductos = await productServices.crearProducto();
        listaproductos.forEach(elemento => {
            productoNew.appendChild(nuevoProducto(elemento.imagen,elemento.nombre,elemento.descripcion))
        });
    }catch(err){
        console.log(err);
    }
}
render();

/*formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const imagen=document.querySelector("[data-imagen]").value;
    const nombre=document.querySelector("[data-nombre]").value;
    const descript=document.querySelector("[data-descrip]").value;
    console.log(imagen,"-" ,nombre, "-", descript);
    productServices.crearProducto(imagen,nombre,descrip).then( respuesta => {
        console.log(respuesta);
    }).catch(err => console.log( err));
});*/ 