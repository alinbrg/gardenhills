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
