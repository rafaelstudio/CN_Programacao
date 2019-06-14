window.onload = function PegarDias() {
    //Funcao para mostrar os Dias da Semana 
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Segunta";
    weekday[2] = "Terca";
    weekday[3] = "Quarta";
    weekday[4] = "Quinta";
    weekday[5] = "Sexta";
    weekday[6] = "Sabado";
  
    //
    var n = weekday[d.getDay()];
    //
    document.getElementById("dayWeek").innerHTML = n;
    document.getElementById("dayWeek2").innerHTML = n;


    //Funcao para mostrar o Dia do Mes 
        var d = new Date();
        var m = d.getDate();
        document.getElementById("dayMonth").innerHTML = m;
        document.getElementById("dayMonth2").innerHTML = m;
      
  }



  
