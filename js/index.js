let slideIndex = 1;

function plusDivs(n) {
  showDivs((slideIndex += n));
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth >= 768) {
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "flex";
    }
    return;
  } else {
    showDivs(1);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "flex";
    }
    return;
  } else {
    showDivs(1);
  }
});

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "flex";
}
