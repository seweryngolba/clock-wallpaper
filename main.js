setInterval(setTime, 1000);
setTime();
function setTime() {
  var dt = new Date();
  time = dt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  document.getElementById("date-time").innerHTML = time;
}
