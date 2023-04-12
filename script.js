const slideIcon = Array.from(document.getElementsByClassName('js-nav-slide'));
const slideBody = Array.from(document.getElementsByClassName('js-slide-body'));
const animateIcon = Array.from(document.getElementsByClassName('js-nav-slide__icon'));
const slickOptions = {
	dots: false,
	infinite: true,
	speed: 300,
	fade: true,
	cssEase: 'linear'
}

//js-preloader
window.onload = function () {
	const preloader = document.getElementById('js-preloader')
	preloader.style.display = 'none';
};


//js-slide-body
if (slideIcon) {
	slideIcon.forEach(item => {
		item.addEventListener('click', slide)
	});

	function slide() {
		slideBody.forEach(item => {
			item.classList.toggle('is-active');
		});
		animateIcon.forEach(item => {
			item.classList.toggle('is-active');
		});
		document.body.classList.toggle('.js-is-lock');
	}
};

////js-background-image
function bgImageConstuctor() {
	const wrappers = Array.from(document.getElementsByClassName('js-bg-target'))
	wrappers.forEach(wrapper => {
		const [img] = Array.from((wrapper.getElementsByClassName('js-bg-content')))
		if (img) {
			wrapper.style.backgroundImage = `url(${img.getAttribute('src')})`
		}
	})
}

bgImageConstuctor();

$('.js-slider').slick(slickOptions)