function datos(){
    if(document.getElementById("name").value == ""){
        aux = "Ingrese su nombre"
    }else{
        aux = document.getElementById("name").value
    }
    var nombre = "Nombre: " + aux + "<br>";

    if(document.getElementById("age").value == ""){
        aux = "Ingrese su edad"
    }else{
        aux = document.getElementById("age").value
    }
    var edad = "Edad: " + aux + "<br>";

    var genero;

    z = document.querySelector('input[name=genero]:checked');
    if(z!=null) {
      genero = z.value;
    }

    if(genero!=null){
        y = "Género: " + genero + "</br>";;
    }else{
        y = "Género: Seleccione una opción</br>"; 

    }

    if(document.getElementById("mail").value == ""){
        aux = "Ingrese su email"
    }else{
        aux = document.getElementById("mail").value
    }
    var correo = "Correo electrónico: " + aux + "<br>";

    var color = "Color favorito: " + document.getElementById("colour").value + "<br>";

    if(document.getElementById("birthdate").value == ""){
        aux = "Ingrese su fecha de nacimiento"
    }else{
        aux = document.getElementById("birthdate").value
    }
    var nacimiento = "Fecha de nacimiento: " + aux + "<br>";

    document.getElementById("answer").innerHTML = nombre + correo + edad + y + nacimiento + color
}