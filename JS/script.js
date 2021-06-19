let target;
let text;
let showed = false;
window.addEventListener("load", () => {
  text = document.getElementById("count");
  document.addEventListener("scroll", () => {
    target = document
      .getElementsByClassName("cards")[0]
      .getBoundingClientRect();
    if (target.top <= window.innerHeight && !showed) {
      show();
      showed = true;
    }
  });
});
let i = 0;
function show() {
  document.getElementsByClassName("card")[i].style.transform = "translateY(0)";
  document.getElementsByClassName("card")[i].style.opacity = "1";
  i++;
  if (i < document.getElementsByClassName("card").length) {
    setTimeout(show, 200);
  } else {
    setTimeout(endShow, 500);
  }
}
function endShow() {
  for (
    let index = 0;
    index < document.getElementsByClassName("card").length;
    index++
  ) {
    document.getElementsByClassName("card")[index].style.transitionDuration =
      "0.3s";
  }
}
