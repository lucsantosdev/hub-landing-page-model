const yearElement = document.getElementById("year");

if (yearElement) {
	yearElement.textContent = String(new Date().getFullYear());
}

const revealElements = Array.from(document.querySelectorAll(".reveal"));

if (revealElements.length) {
	const revealObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					revealObserver.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.14,
			rootMargin: "0px 0px -20px 0px"
		}
	);

	revealElements.forEach((element, index) => {
		element.style.transitionDelay = `${Math.min(index * 55, 260)}ms`;
		revealObserver.observe(element);
	});
}
