function equivalencia(){
    var valor = document.getElementById("grade").value
    var g = parseFloat(valor);
    console.log(typeof(g))
    if(g < 0 || g > 10 || Number.isNaN(g)){
        document.getElementById("answer").innerHTML = "Calificación no válida";
    }else if(g < 6){
        document.getElementById("answer").innerHTML = "NA";
    }else if(g < 7.5){
        document.getElementById("answer").innerHTML = "S";
    }else if(g < 9){
        document.getElementById("answer").innerHTML = "B";
    }else if(g < 10){
        document.getElementById("answer").innerHTML = "MB";
    }else{
        document.getElementById("answer").innerHTML = "LAP";
    }
}