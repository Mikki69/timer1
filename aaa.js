let a = document.getElementById('day');
let b = document.getElementById('hour');
let c = document.getElementById('min');
let d= document.getElementById('sec');
day = localStorage.getItem('day');
hour = localStorage.getItem('hour');
min = localStorage.getItem('min');
sec = localStorage.getItem('sec');
if (sec == null){sec = 60}
if (min == null){min = 59}
if (hour == null){hour = 23}
if (day == null){day = 1}
function countdown(){
    if(day > -1){
        sec--;
        localStorage.setItem('sec', sec);
        localStorage.setItem('min', min);
        localStorage.setItem('hour', hour);
        localStorage.setItem('day', day);
        if(sec == -1){
            min--;
            sec = 59;
        }
        if(min == -1){
            hour--;
            min = 59;
        }
        if(hour == -1){
            day--;
            hour = 23;
        }
        if(day < 10){
            a.innerHTML = "0" + day;
        }
        else{
            a.innerHTML = day;
        }
        if(hour< 10){
            b.innerHTML = "0" + hour;
        }
        else{
            b.innerHTML = hour;
        }
        if(min < 10){
            c.innerHTML  = "0" + min;
        }
        else{
            c.innerHTML = min;
        }
        if(sec < 10){
            d.innerHTML = "0" + sec ;
        }
        else{
           
            d.innerHTML = sec;
        }
        if(day == -1){
            a.innerHTML = "00";
            b.innerHTML = "00";
            c.innerHTML = "00";
            d.innerHTML = "00";
        }
    }
}
setInterval('countdown()', 1000);
