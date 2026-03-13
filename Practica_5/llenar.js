var registro = "<tr id=\"fields\"><th>Nombre</th><th>Correo</th><th>Consolas</th><th>Grado de estudio</th><th>Cita</th><th>Color favorito</th><th>Volumen</th></tr>";
var estilo=0;

function evaluar(){
    var nombre = document.getElementById("name").value;
    var correo = document.getElementById("mail").value;

    const consolas = [];
    const consoles = ["Xbox","Playstation","Nintendo"];
    consolas[0] = document.getElementById("xbox").checked;
    consolas[1] = document.getElementById("playstation").checked;
    consolas[2] = document.getElementById("nintendo").checked;
    var consola = consolas[0] || consolas[1] || consolas[2];

    const grados = [];
    const studies = ["Licenciatura","Maestría","Doctorado"];
    grados[0] = document.getElementById("licenciatura").checked;
    grados[1] = document.getElementById("maestria").checked;
    grados[2] = document.getElementById("doctorado").checked;
    var grado = grados[0] || grados[1] || grados[2];

    var cita = document.getElementById("fecha").value;
    var colour = document.getElementById("colour").value;
    var volumen = document.getElementById("volume").value;

    if(nombre == ""     ||
       correo == ""     ||
       !consola         ||
       !grado           ||
       cita == ""       ||
       colour == ""     ||
       volumen == ""
    ){
        document.getElementById("warning").innerHTML = "Por favor, ingrese todos los campos"
    }else{
        document.getElementById("warning").innerHTML = "Registro exitoso"
        if(estilo % 2 == 0){
            registro = registro + "<tr class=\"renglon1\">";
        }else{
            registro = registro + "<tr class=\"renglon2\">";
        }

        registro = registro + "<td>" + nombre + "</td>";
        registro = registro + "<td>" + correo + "</td>";

        var res = "";
        for(i = 0; i < 3; i++){
            if(consolas[i]){
                res = res + consoles[i] + " ";
            }
        }

        res = res.slice(0,-1);
        registro = registro + "<td>" + res + "</td>";

        res = "";
        for(i = 0; i < 3; i++){
            if(grados[i]){
                res = studies[i];
            }
        }
        
        registro = registro + "<td>" + res + "</td>";

        registro = registro + "<td>" + cita + "</td>";
        registro = registro + "<td>" + colour + "</td>";
        registro = registro + "<td>" + volumen + "</td>";

        registro = registro + "</tr>";
        document.getElementById("tabla").innerHTML = registro;

        estilo++;

        document.getElementById("name").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("xbox").checked = false;
        document.getElementById("playstation").checked = false;
        document.getElementById("nintendo").checked = false;
        document.getElementById("licenciatura").checked = false;
        document.getElementById("maestria").checked = false;
        document.getElementById("doctorado").checked = false;
        document.getElementById("fecha").value = "";
        document.getElementById("colour").value = "";
        document.getElementById("volume").value = "";
    }

}