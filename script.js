//Add JS Here
let i = 0;
const txt = document.getElementById("introText").innerHTML;
const speed = 35;

//Adds Typewriter Effect
document.getElementById("introText").innerHTML = "";

function typeWriter() {

  if (i < txt.length) {

    document.getElementById("introText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();