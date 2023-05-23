window.onload = function () {
history.pushState(null, null, window.location.href);
history.forward();
window.onpopstate = () => history.back();
var username = localStorage.getItem("username");
document.getElementById("home").innerHTML = username;
}