
// Start of JavaScript Coding...

document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {
		item.classList.toggle('change');
	})
})

const icons = document.querySelectorAll('.section-1-icons i')
let i = 1

setInterval(() => {
	i++
	const icon = document.querySelector('.section-1-icons .change')
	icon.classList.remove('change')

	if (i > icons.length) {
		icons[0].classList.add('change')
		i = 1
	} else {
		icon.nextElementSibling.classList.add('change')
	}
}, 4000)

// Hide language switch when not in section-1
const languageSwitch = document.querySelector('.language-switch');
const section1 = document.querySelector('.section-1');
const section2 = document.querySelector('.section-2');
const section3 = document.querySelector('.section-3');
const section4 = document.querySelector('.section-4');

if (languageSwitch && (section2 || section3 || section4)) {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				languageSwitch.classList.add('hidden');
			} else {
				languageSwitch.classList.remove('hidden');
			}
		});
	}, {
		threshold: 0.1
	});

	if (section2) observer.observe(section2);
	if (section3) observer.observe(section3);
	if (section4) observer.observe(section4);
}

// END of JavaScript Coding...
