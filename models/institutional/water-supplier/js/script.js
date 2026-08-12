const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length > 0) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}

				entry.target.classList.add('reveal-visible');
				observer.unobserve(entry.target);
			});
		},
		{
			threshold: 0.18,
		}
	);

	revealElements.forEach((element) => observer.observe(element));
}
