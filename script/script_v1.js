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
scrollBtn.addEventListener("click", scrollToTop)