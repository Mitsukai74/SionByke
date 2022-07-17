//para hacer la conexión entre el back y el frot
const http=new XMLHttpRequest();
http.open("GET","http://localhost:3000/usuario");
http.send();

http.onload = () => {
    const data=http.response;
    console.log(data);
}