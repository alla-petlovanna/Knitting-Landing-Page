function questions() {
  let name = prompt("What is your name?");
  let experience = prompt(
    "How many years do you do knitting? If you have never knit before, enter 0."
  );
  if (experience > 0) {
    prompt(name + ", what is your favorite thing to knit?");
  } else if ((experience = 0)) {
    alert(name + ", knitting is good hobby. You should try it.");
  } else {
    alert(name + ", keep knitting and you'll become a master.");
  }
}

let aboutBtn = document.querySelector("button");
aboutBtn.addEventListener("click", questions);
