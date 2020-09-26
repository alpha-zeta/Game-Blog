//jshint esversion:6

function getDate(x) {
    let date = new Date();
    let options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: x
    };
    let intlDateObj = new Intl.DateTimeFormat('en-GB', options);

    let localTime = intlDateObj.format(date);
    return localTime;
}

//running the clock
var x=Date().timeZone;
const time=$(".time")[0];
document.addEventListener("DOMContentLoaded",()=>{
    setInterval(()=>{
        var d=getDate(x);
        var e=getTime(x);
        time.innerHTML=`${d}<br>${e}`;
    },1000);
});