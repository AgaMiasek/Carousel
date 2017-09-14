$(function(){

	var carouselList = $("#carousel ul");

	setInterval(changeImage, 3000);

	function changeImage(){		
			carouselList.animate({'marginLeft':-300}, 300, moveFirstSlide);
			}

			function moveFirstSlide() {
				var firstItem = carouselList.find("li:first");
				var lastItem = carouselList.find("li:last");

			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
		}

});
	