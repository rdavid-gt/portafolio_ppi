function inicio(){
    var fin = document.getElementById("end").value;
    var countDownDate = new Date(fin).getTime();
    var x = setInterval(function() {

        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(days < 10){
            days = "0" + days;
        }
        if(hours < 10){
            hours = "0" + hours;
        }
        if(seconds < 10){
            seconds = "0" + seconds;
        }
        if(minutes < 10){
            minutes = "0" + minutes;
        }

        document.getElementById("cuenta").innerHTML = days + "d " + hours + "h "  + minutes + "m " + seconds + "s ";

        if(distance < 11000){
            document.getElementById("cuenta").innerHTML = "<p id=\"cuenta\" style=\"color:red;\">" + days + "d " + hours + "h "  + minutes + "m " + seconds + "s " + "</p>"
        }else{
            document.getElementById("cuenta").innerHTML = days + "d " + hours + "h "  + minutes + "m " + seconds + "s";
        }
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("cuenta").innerHTML = "<p id=\"cuenta\" style=\"color:black;\">Se acabó :(</p>";
        }
    }, 1000);
}
