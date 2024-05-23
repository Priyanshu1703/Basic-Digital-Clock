
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById("hr0").innerHTML=hours[1];
    document.getElementById("hr1").innerHTML=hours[0];
    document.getElementById("min0").innerHTML=minutes[1];
    document.getElementById("min1").innerHTML=minutes[0];
    document.getElementById("sec0").innerHTML=seconds[1];
    document.getElementById("sec1").innerHTML=seconds[0];
}

// Update the time immediately when the page loads
updateTime();

// Update the time every second
setInterval(updateTime, 1000);









