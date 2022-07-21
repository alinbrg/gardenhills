function burgerMenu() {
	const burger = document.querySelector(".burger"),
		navbar = document.querySelector(".mob");

	burger &&
		burger.addEventListener("click", (e) => {
			burger.classList.toggle("active");
			navbar.classList.toggle("active");
		});
}

burgerMenu();
