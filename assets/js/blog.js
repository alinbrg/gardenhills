function enableBlogSliderOnMob() {
	const swiperBlock = document.querySelectorAll(".articles_list-swiper");
	let swiper;
	checkWidth(swiperBlock, window.innerWidth);

	window.addEventListener("resize", function (event) {
		let newWidth = window.innerWidth;
		checkWidth(swiperBlock, newWidth);
	});

	function checkWidth(swiperBlock, width) {
		swiperBlock.forEach((element) => {
			let slides = element.querySelectorAll(".article"),
				swiperWrapperBlock = element.querySelector(".articles_list");

			if (width <= 1024) {
				element.classList.add("swiper");
				swiperWrapperBlock.classList.add("swiper-wrapper");

				slides.forEach((slide) => {
					slide.classList.add("swiper-slide");
				});

				swiper = new Swiper(element, {
					breakpoints: {
						0: {
							slidesPerView: 1.4,
							spaceBetween: 15,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
					},
				});
			} else {
				element.swiper?.destroy();

				element.classList.remove("swiper");
				swiperWrapperBlock.classList.remove("swiper-wrapper");

				slides.forEach((slide) => {
					slide.classList.remove("swiper-slide");
				});
			}
		});
	}
}

enableBlogSliderOnMob();

function blogPageTexts() {
	const mainTitles = document.querySelectorAll(".main_article-title");
	const titles = document.querySelectorAll(".article-title");
	const articleAllP = document.querySelectorAll(
		".article-desc p:first-of-type"
	);

	const articleImg = document.querySelector(".article-img");
	const articleImgHeight = articleImg.getBoundingClientRect().height;

	if (window.innerWidth > 1024) {
		mainTitles.forEach((mainTitle) => {
			if (mainTitle.innerText.length > 80) {
				const text = mainTitle.innerText;
				mainTitle.innerText = text.slice(0, 80) + "...";
			}
		});

		titles.forEach((el, i) => {
			if (el.innerText.length > 70) {
				const text = el.innerText;
				el.innerText = text.slice(0, 70) + "...";
			}

			// 	console.log(el.getBoundingClientRect().height, articleImgHeight);
			// 	if (el.getBoundingClientRect().height >= articleImgHeight / 2 - 20) {
			// 		articleAllP[i].style.display = "none";
			// 	}
		});
	}
}

blogPageTexts();
