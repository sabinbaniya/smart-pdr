function closeMenu() {
  document.querySelector("#cb").checked = false;
}

const overlay = document.querySelector("#overlay");
overlay.style.display = "none";

function showPopup(heading, text) {
  overlay.style.display = "block";
  document.querySelector("#popup").innerHTML = `
    <h3 class="h3_style text-black" id="heading">${heading}</h3>
    <p >${text || ""}</p>    
    <button onClick="closePopup()" class="px-8 py-2 bg-red-600 text-white font-bold rounded-md" > Close </button>
  `;
}

function closePopup() {
  overlay.style.display = "none";
}

// for image slideshow

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  unenlargePicture();
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
  x[slideIndex - 1].style.display = "block";
}

function enlargePicture(src) {
  this.event.stopPropagation();
  const bigpic = document.querySelector("#bigPicture");
  const img = document.createElement("img");
  img.setAttribute("class", "absolute w-screen h-screen");
  img.setAttribute("id", "enlargedImage");
  img.setAttribute("src", src);
  bigpic.appendChild(img);
}

function unenlargePicture() {
  const bigpic = document.querySelector("#bigPicture");
  const enlargedImage = document.querySelector("#enlargedImage");
  if (enlargedImage) {
    bigpic.removeChild(enlargedImage);
  }
}
