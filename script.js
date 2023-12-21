const CORRECT_PASSWORD = "31/05/2023";

function checkPassword() {
 const password = document.getElementById("password").value;
 if (password === CORRECT_PASSWORD) {
   hideElement("loginForm");
   showElement("pdfArea");
   document.body.style.backgroundColor = "#6339ad";
   document.getElementById("errorText").textContent = "";
   fullscreenIframe("pdfFrame");
 } else {
   document.getElementById("errorText").textContent = "Esa no es amor, Inténtalo de nuevo ❤️";
 }
}

function hideElement(id) {
 document.getElementById(id).style.display = "none";
}

function showElement(id) {
 document.getElementById(id).style.display = "block";
}

function fullscreenIframe(id) {
 const iframe = document.getElementById(id);
 if (iframe.requestFullscreen) {
   iframe.requestFullscreen();
 } else if (iframe.mozRequestFullScreen) { // Firefox
   iframe.mozRequestFullScreen();
 } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
   iframe.webkitRequestFullscreen();
 }
}
