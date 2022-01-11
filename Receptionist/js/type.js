"use strict";
var dates = document.getElementById('date');
function isDateBeforeToday() {
    let todayDate = new Date();
    let h=todayDate.getHours();
    let m=todayDate.getMinutes();
    let dat=todayDate.toISOString().slice(0, 10) + "T"+h+":"+m;
    dates.min = dat;
   
    if(dates.value<dat)
    {
        alert("You Can't Book for already past time");
        dates.value=dat;
        dates.focus();
    }
}