

const swiper = new Swiper('.swiper', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
		slidesPerView: 1,
		breakpoints: {
		  950: {
			 slidesPerView: 2,
		  },
		
		},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	grabCursor: true,
});

$(document).ready(function(){
$('.swiper2-wrapper').slick()
});


