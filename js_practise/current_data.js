//Problem: Show current time
//Date: 19 Oct 25

const today = new Date();
let day = today.getDay();

dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Today is", dayList[day])

let hour = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let prepend = (hour >= 12)? "PM":"AM"
if(hour >= 12)
{
    hour = hour - 12;
}

if( hour === 0 && prepend ==="AM")
{
    hour = 12;
    prepend = "AM"
}
if(hour === 0 && prepend === "PM")
{
    hour = 12;
    prepend = "PM"
}
console.log("Time Now:", hour,":", minutes,":", seconds, prepend)

