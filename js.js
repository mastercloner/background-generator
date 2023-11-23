let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let body = document.getElementById('body');
let code = document.getElementById('code');
function set(){
  body.style.background = "linear-gradient(to right," + 
    color1.value +
    "," +
    color2.value +
    ")";
code.innerHTML = "<h2>" + body.style.background + "</h2>";
}
window.addEventListener('input', set);
