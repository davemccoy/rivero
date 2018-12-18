$(document).ready(function() {
	if ($('.js-sert-galery').length) {
		$('.js-sert-galery').magnificPopup({
			type: 'image',
			mainClass: 'mfp-fade',
			gallery:{
				enabled:true
			}
		});
	}

	//acardern for faq 
	$(".set > a").on("click", function(){
		if($(this).hasClass('active')){
			$(this).removeClass("active");
			$(this).siblings('.faq_content').slideUp(200);
			$(this).children('.icon').removeClass("acardeon-open").addClass("acardeon-close");
		}else{
			$(".set > a i").removeClass("acardeon-open").addClass("acardeon-close");
			$(this).find("i").removeClass("acardeon-close").addClass("acardeon-open");
			$(".set > a").removeClass("active");
			$(this).addClass("active");
			$('.faq_content').slideUp(200);
			$(this).siblings('.faq_content').slideDown(200);
		}
		return false;
	});
})