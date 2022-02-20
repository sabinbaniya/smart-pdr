function closeMenu() {
  document.querySelector("#cb").checked = false;
}

const overlay = document.querySelector("#overlay");
overlay.style.display = "none";

function showPopup(heading, text) {
  console.log("hi");
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
