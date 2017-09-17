$(function(){

	var carouselList = $("#carousel ul");

	var autoPlay = setInterval(changeImageNext, 3000);

	$('.next').on('click', function(){
		window.clearInterval(autoPlay);
		changeImageNext();
	});
	$('.prev').on('click', function(){
		window.clearInterval(autoPlay);
		changeImagePrev();
	});

	function changeImageNext(){
		carouselList.animate({'marginLeft':-300}, 300, moveFirstSlide);
	}
	function changeImagePrev(){
		moveLastSlide();
		carouselList.animate({'marginLeft':0}, 300);
	}

			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
		}

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		firstItem.before(lastItem);
		carouselList.css({marginLeft:-300});
	}

});
