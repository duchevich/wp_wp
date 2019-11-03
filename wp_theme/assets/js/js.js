$( document ).ready(function() {
	console.log('aaa');

	// $(".slick").slick() 


    /*---- Главное меню ----*/
	// var scrollTop = 0;
	// $(window).on('scroll', function() {
	// 	var scrollNow = $(window).scrollTop();
	// 	if(scrollNow > scrollTop && scrollNow > 400){
	// 		$('#main-nav').addClass('navbar-active');
	// 	} 
	// 	else {
	// 		$('#main-nav').removeClass('navbar-active');
	// 	}
	// });

	// // плавный скроллинг
	// $("a[href*=#nav]").on("click", function (e) {
	// 	var anchor = $(this);
	// 	$('html, body').stop().animate({
	// 		scrollTop: $(anchor.attr('href')).offset().top - 5
	// 	}, 777);
	// 	e.preventDefault();
	// 	return false;
	// });

/*---- Слайдеры ----*/
$('.slick').slick();

/*---- Маска ввода номера телефона ----*/
//     $("input[type=tel]").inputmask('38 (999) 999-99-99');

/*---- Модальные окна ----*/
$('body').click(function(e){
    e.preventDefault();
    $("#headerModal").modal('show');
});

/*---- ContactForm 7 ----*/
// document.addEventListener( 'wpcf7mailsent', function( event ) {
//     if(event.detail.contactFormId=="21"){ // 32 это id формы для отслеживания
//         dataLayer.push({'event': 'question'})
//         var name = $(".questions input[name=client-name]").val();
//         $('#questName').text(name);
//         $("#questionsModal").modal('show');
			// $("#quizModal").modal('hide');
			// setTimeout(function(){
			// 	$("#thanksModal").modal('show');
			// }, 400);
//     }
// }, false );




});