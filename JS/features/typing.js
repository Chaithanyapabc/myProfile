const roles = ["Full-Stack developer | MERN enthusiast | Competitive Programmer"];
let i = 0, j = 0;

function typeEffect() {
  const element = document.getElementById("typing");

  element.textContent = roles[i].slice(0, j++);

  if (j > roles[i].length) {
    setTimeout(() => {
      j = 0;
      i = (i + 1) % roles.length;
    }, 1000);
  }

  setTimeout(typeEffect, 100);
}

typeEffect();