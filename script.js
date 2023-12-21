document.getElementById("button").addEventListener("click", checkPassword);

function checkPassword() {
 var password = document.getElementById("password").value;
 if (password === "31/05/2023") {
   document.getElementById("loginForm").style.display = "none";
   document.getElementById("pdfArea").style.visibility = "visible";
   document.body.style.backgroundColor = "#6339ad";
   document.getElementById("errorText").textContent = "";
 } else {
   document.getElementById("errorText").textContent = "Esa no es amor, Inténtalo de nuevo ❤️";
 }
}
