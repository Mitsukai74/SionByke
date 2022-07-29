const crearnuevoProducto = (imagen,nombre,descripcion) => {
const linea=document.createElement("div");
const contenido =    
    `<img alt="casco Scott" class="casco__imagen" src="${imagen}"/>
        <div class="casco__contenido">
            <h4 class="casco__titulo">${nombre}</h4>
            <p class="casco__descripcion">${descipcion}</p>
            <button class="casco__boton">Agregar al carrito</button>
        </div>`;
        linea.innerHTML=contenido;
        return linea;
};


//para hacer la conexión entre el back y el front
const crearProducto=(imagen,nombre,descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({imagen,nombre,descripcion,id: uuid.v4()})
    })
};

export const productServices = {
    crearProducto,
};
