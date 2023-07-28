// Function klik button pada Home
function clickViewMore() {
  location.replace("#about");
}
// Aksi yang diberikan setelah klik tombol submit pada form contact
const kolomNama = document.getElementById("nama");
const tombolSubmit = document.querySelector(".contact button");
tombolSubmit.addEventListener("click", function () {
  alert(`Okayy ${kolomNama.value}, pesan lo udah gue terima, thank you yaa :D`);
});

// Aksi pada tombol hamburger pada Device Mobile saat di-klik
const tombolHamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

tombolHamburger.addEventListener("click", () => {
  tombolHamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) => {
  n.addEventListener("click", () => {
    tombolHamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Shadow pada judul 'ANTHROFAX berganti"
const anthrofax = document.querySelector("a.nav-branding");
const myImage = document.querySelector(".home img");

setInterval(function () {
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);
  anthrofax.style.textShadow = `0 0 10px rgb(${r}, ${g}, ${b}), 0 0 20px rgb(${r}, ${g}, ${b}),0 0 30px rgb(${r}, ${g}, ${b})`;
}, 1000);
