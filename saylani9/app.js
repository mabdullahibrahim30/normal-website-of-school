function GetTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let resultDiv = document.getElementById(`result`);
    let Hours = hours % 12 || 12;
    let ampm = hours >= 12 ? "PM" : "AM";
    resultDiv.innerHTML = `Current Time : ${hours} : ${minutes} : ${seconds} ${ampm}`;
    // console.log (`Current Time :${hours}:${minutes}:${seconds}`);
}
setInterval(GetTime, 1000);
