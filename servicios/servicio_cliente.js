//para hacer la conexión entre el back y el front
const crearProducto=(img,nombre,descrip) => {
    return fetch("http://localhost:3000/producto", {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({imagen,nombre,descipcion,id: uuid.v4()})
    })
};

export const productServices = {
    crearProducto,
};
