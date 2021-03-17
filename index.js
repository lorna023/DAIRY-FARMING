function daymilk() {
    shedA =(document.getElementById("shedA").value);
    shedB =(document.getElementById("shedB").value);
    shedC =(document.getElementById("shedC").value);
    shedD =(document.getElementById("shedD").value);
    shedA = parseFloat(shedA);
    shedB = parseFloat(shedB);
    shedC = parseFloat(shedC);
    shedD = parseFloat(shedD);
    milk=shedA+shedB+shedC+shedD;
    document.getElementById("sheda").innerHTML=shedA;
    document.getElementById("shedb").innerHTML=shedB;
    document.getElementById("shedc").innerHTML=shedC;
    document.getElementById("shedd").innerHTML=shedD;
    document.getElementById("milk").innerHTML =milk;
}
function overtime(){
 rate=(document.getElementById("rate").value);
 milk=(document.getElementById("todaymilk").value);
 rate =parseFloat(rate);
 milk =parseFloat(milk);
 week=rate*milk*7;
 month=rate*milk*30;
 year=rate*milk*365;
 document.getElementById("week").innerHTML=week;
 document.getElementById("month").innerHTML=month;
 document.getElementById("year").innerHTML=year;
}
function wholeyear(){
totalDayMilk=(document.getElementById("totaldaymilk").value);
totalDayMilk =parseFloat(totalDayMilk);
income=totalDayMilk*45;
months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
days= [ 31,29,31,30,31,30,31,31,30,31,30,31];
for (i = 0; i<months.length; i++){
  outcome = days[i] * income;
  document.getElementById("revenue").innerHTML+=("Your income for " + months[i] +  "is  Ksh  " + outcome + "</p>");
}

}