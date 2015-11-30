$(function(){
	setInterval(function(){articleTada()}, 4000);

});


function articleTada(){
	var randNum= Math.floor(Math.random() * $('.article-thumb').length) + 1

	$('.article-thumb').eq(randNum).addClass('is-emph')
	.siblings().removeClass('is-emph');
}



$(window).scroll(function(){
  youtubeVidScroll();
  startArticle();
});

function startArticle(){
	var wScroll = $(window).scrollTop();

 if($('.article').offset().top - $(window).height()/2 < wScroll){
	 $('.article-thumb').each(function(i){
		 setTimeout(function(){
		 $('.article-thumb').eq(i).addClass('is-visible');
	 }, 200 * i);
	 });
 }
 }


function youtubeVidScroll(){
  var wScroll = $(window).scrollTop();

$('.video-strip').css('background-position','center -'+ wScroll +'px');
}


$(document).ready(function(){
$("#nav-mobile").html($("#nav-1").html());
	 $("#menu span").click(function(){
		  if ($("#nav-mobile  ul").hasClass("expanded")) {
			 $("#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			 $(this).removeClass("open");
		  } else {
				$("#nav-mobile  ul").addClass("expanded").slideDown(250);
				$(this).addClass("open");
		  }
	 });

	 
});
