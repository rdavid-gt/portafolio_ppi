function factorial(){
    valor = document.getElementById("num").value
    var n = parseInt(valor);
    if(n < 0 || Number.isNaN(n)){
        document.getElementById("answer").innerHTML = "Número no válido";
    }else{
        var r = factorialC(n);
        document.getElementById("answer").innerHTML = r;
    }
}

function factorialC(n){
    if(n == 0){
        return 1;
    }
    return n * factorialC(n - 1);
}