// slider
const slides = document.querySelectorAll('.slider__slides')
const dots = document.querySelectorAll('.footer__dot')

function setActive(i) {
	for (slide of slides)
		slide.classList.remove('active')
	slides[i].classList.add('active')

	for (dot of dots)
		dot.classList.remove('active')
	dots[i].classList.add('active')
}

for (let j = 0; j < dots.length; j++) {
	dots[j].addEventListener('click', function () {
		setActive(j)
	})
}

// toggle
const headerToggle = document.querySelector('.header__toggle')
const headerNavigation = document.querySelector('.header__navigation')
headerToggle.addEventListener('click', () => {
	headerToggle.classList.toggle('_active')
	headerNavigation.classList.toggle('_active')
})