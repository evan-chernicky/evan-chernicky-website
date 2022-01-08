
//Adds Typewriter Effectlet i = 0;
const txt = document.getElementById("introText").innerHTML;
let i = 0;
const speed = 35;

document.getElementById("introText").innerHTML = "";

function typeWriter() {

  if (i < txt.length) {

    document.getElementById("introText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();


//Arrow Navigation

const forwards = document.getElementById("forwards");
const backwards = document.getElementById("backwards");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");


forwards.addEventListener('click', function() {
    slide1.classList.add("active");
    slide2.classList.remove("active");
    forwards.classList.add("active");
    backwards.classList.remove("active");
});
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    slide1.classList.add("active");
    slide2.classList.remove("active");
    forwards.classList.add("active");
    backwards.classList.remove("active");
  }
});

backwards.addEventListener('click', function() {
    slide1.classList.remove("active");
    slide2.classList.add("active");
    forwards.classList.remove("active");
    backwards.classList.add("active");
});
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        slide1.classList.remove("active");
        slide2.classList.add("active");
        forwards.classList.remove("active");
        backwards.classList.add("active");
    }
  });