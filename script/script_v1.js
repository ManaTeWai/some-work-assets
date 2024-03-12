let scrollBtn = document.querySelector(".scroll_top");

let myScrollFunc = function () {
	let y = window.scrollY;
	if (y >= 500) {
		scrollBtn.classList.remove("hide");
		scrollBtn.disabled = false;
	} else {
		scrollBtn.classList.add("hide");
		scrollBtn.disabled = true;
	}
};

let scrollToTop = function () {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
}

window.addEventListener("scroll", myScrollFunc);
scrollBtn.addEventListener("click", scrollToTop);

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu_inner");
const humburger = document.querySelector(".humburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
	if (menu.classList.contains("showMenu")) {
		menu.classList.remove("showMenu");
		menu.style.display = "none"
		closeIcon.style.display = "none";
		menuIcon.style.display = "block";
	} else {
		menu.classList.add("showMenu");
		menu.style.display = "block"
		closeIcon.style.display = "block";
		menuIcon.style.display = "none";
	}
}

humburger.addEventListener("click", toggleMenu);