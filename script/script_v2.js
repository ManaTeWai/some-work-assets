const menu = document.querySelector(".menu_container");
const menuItems = document.querySelectorAll(".menu_inner");
const humburger = document.querySelector(".humburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
	if (menu.classList.contains("showMenu")) {
		menu.classList.remove("showMenu");
		closeIcon.style.display = "none";
		menuIcon.style.display = "block";
		document.body.style.overflow = 'auto';
	} else {
		menu.classList.add("showMenu");
		closeIcon.style.display = "block";
		menuIcon.style.display = "none";
		document.body.style.overflow = 'hidden';
	}
}

menuItems.forEach(
	function (menuItem) {
		menuItem.addEventListener("click", toggleMenu);
	}
)

humburger.addEventListener("click", toggleMenu);