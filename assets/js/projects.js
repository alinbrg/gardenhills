function enableSliderOnMob() {
	const swiperBlock = document.querySelector(".projects_listing-swiper"),
		swiperWrapperBlock = document.querySelector(".projects_listing"),
		slides = document.querySelectorAll(".project_info");
	let swiper;

	checkWidth(window.innerWidth);

	window.addEventListener("resize", function (event) {
		let newWidth = window.innerWidth;
		checkWidth(newWidth);
	});

	function checkWidth(width) {
		if (width <= 1024) {
			swiperBlock.classList.add("swiper");
			swiperWrapperBlock.classList.add("swiper-wrapper");

			slides.forEach((slide) => {
				slide.classList.add("swiper-slide");
			});

			swiper = new Swiper(swiperBlock, {
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
			swiper?.destroy(true, true);
			swiperBlock.classList.remove("swiper");
			swiperWrapperBlock.classList.remove("swiper-wrapper");

			slides.forEach((slide) => {
				slide.classList.remove("swiper-slide");
			});
		}
	}
}

enableSliderOnMob();
