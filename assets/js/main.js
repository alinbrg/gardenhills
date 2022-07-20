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

function mainPageBlogTexts() {
	const mainTitle = document.querySelector(".main_article-title");
	const titles = document.querySelectorAll(".article-title");
	const articleAllP = document.querySelectorAll(
		".article-desc p:first-of-type"
	);

	const articleImg = document.querySelector(".article-img");
	const articleImgHeight = articleImg.getBoundingClientRect().height;

	if (window.innerWidth < 1024) {
		if (mainTitle.innerText.length > 80) {
			const text = mainTitle.innerText;
			mainTitle.innerText = text.slice(0, 80) + "...";
		}

		titles.forEach((el, i) => {
			if (el.innerText.length > 70) {
				const text = el.innerText;
				el.innerText = text.slice(0, 70) + "...";
			}
			if (window.innerWidth < 768) {
				if (el.getBoundingClientRect().height >= articleImgHeight / 2 - 20) {
					articleAllP[i].style.display = "none";
				}
			}
		});
	}
}

mainPageBlogTexts();
