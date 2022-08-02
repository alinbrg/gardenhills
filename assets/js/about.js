function downloadLinkPosition() {
	const downloadLink = document.querySelector(".download_link a"),
		footer = document.querySelector("footer");

	if (downloadLink) {
		const observer = new IntersectionObserver(
			function (entries) {
				// isIntersecting is true when element and viewport are overlapping
				// isIntersecting is false when element and viewport don't overlap
				if (entries[0].isIntersecting === true) {
					downloadLink.style.bottom = "110px";
				} else {
					downloadLink.style.bottom = "20px";
				}
			},
			{ threshold: [0] }
		);
		observer.observe(footer);
	}
}
downloadLinkPosition();

// const swiper = new Swiper(".service-swiper", {
// 	breakpoints: {
// 		0: {
// 			slidesPerView: 1.4,
// 			spaceBetween: 15,
// 		},
// 		1024: {
// 			slidesPerView: 4,
// 			spaceBetween: 16,
// 		},
// 	},
// });

function enableServiceSlider() {
	const swiperBlock = document.querySelector(".service-swiper");
	let swiper;
	checkWidth(swiperBlock, window.innerWidth);

	window.addEventListener("resize", function (event) {
		let newWidth = window.innerWidth;
		checkWidth(swiperBlock, newWidth);
	});

	function checkWidth(swiperBlock, width) {
		let slides = swiperBlock.querySelectorAll(".service-card"),
			swiperWrapperBlock = swiperBlock.querySelector(".services_list");

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
			swiperBlock.swiper?.destroy();

			swiperBlock.classList.remove("swiper");
			swiperWrapperBlock.classList.remove("swiper-wrapper");

			slides.forEach((slide) => {
				slide.classList.remove("swiper-slide");
			});
		}
	}
}

enableServiceSlider();
