var minheading=document.getElementById("min")
var secheading=document.getElementById("sec")
var msecheading=document.getElementById("msec")

min=0;
sec=0;
msec=0;

var interval;

function timer(){
    msec++
    msecheading.innerHTML=msec
    if(msec>=100){
        sec++
        secheading.innerHTML=sec
        msec=00

    }
    if(sec>=60){
        min++
        minheading.innerHTML=min
        sec=00
    }
}

function Start(){
    clearInterval(interval)
    interval=setInterval(timer,10)

    
}

function Stop(){
    clearInterval(interval)
}

function reset(){
    min=00
    sec=00
    msec=00
    minheading.innerHTML=min
    secheading.innerHTML=sec
    msecheading.innerHTML=msec
    Stop()
}
